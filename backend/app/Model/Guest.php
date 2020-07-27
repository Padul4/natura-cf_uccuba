<?php
App::uses('AppModel', 'Model');
App::uses('Comment', 'Model');

class Guest extends AppModel {

	public $validate = array(
		'name' => array(
			'notEmpty' => array(
				'rule' => array('notEmpty'),
				//'message' => 'Your custom message here',
				//'allowEmpty' => false,
				//'required' => false,
				//'last' => false, // Stop validation after this rule
				//'on' => 'create', // Limit validation to 'create' or 'update' operations
			),
		),
		'email' => array(
			'email' => array(
				'rule' => array('email'),
				//'message' => 'Your custom message here',
				//'allowEmpty' => false,
				//'required' => false,
				//'last' => false, // Stop validation after this rule
				//'on' => 'create', // Limit validation to 'create' or 'update' operations
			),
		),
	);

	public $hasMany = array(
		'Comment' => array(
			'className' => 'Comment',
			'foreignKey' => 'guest_id',
			'dependent' => false,
			'conditions' => '',
			'fields' => '',
			'order' => '',
			'limit' => '',
			'offset' => '',
			'exclusive' => '',
			'finderQuery' => '',
			'counterQuery' => ''
		),
		'Discount' => array(
			'className' => 'Discount',
			'foreignKey' => 'guest_id',
			'dependent' => false,
			'conditions' => '',
			'fields' => '',
			'order' => '',
			'limit' => '',
			'offset' => '',
			'exclusive' => '',
			'finderQuery' => '',
			'counterQuery' => ''
		)
	);
	
	/*
	 * Verifica se o código já foi utilizado,
	 * retorna verdadeiro se não foi utilizado.
	 * $type = quando acessado pelo verifyCode
	 */
	public function validateCode($code){
		$data = array('success' => 0, 'msg' => '');
		
		$findCode = $this->find('first', array(
						'conditions' => array(
							'Guest.code LIKE' => '%'. $code .'%',
							'Guest.verify' => 0
						)
					));
					
		if($findCode){
			$data['success'] = 1;
			$data['moreNodes'] = $this->_numberOfNodes($findCode['Guest']['root_id']);
			$data['code'] = $findCode['Guest']['code'];
			$data['guest'] = $findCode['Guest']['id'];
		}else{
			$data['msg'] = 'Código inválido';
			$data['success'] = 0;
		}

		return $data;
	}

	public function confirmCodeandComment($guest_id = null){
		if($guest_id){
			$save = array();
			
			$save['Guest']['id'] = $guest_id;
			$save['Guest']['verify'] = 1;
			
			if($this->save($save)){
				return true;
			}else{
				return false;
			}		
		}else{
			return false;
		}
	}
	
	/*
	 *	Salva o nome completo, email e imagem do cliente, bem como seu comentário 
	 */
	public function saveRoot($data){
		$return = array('success' => 0, 'msg' => '');
		$root = array();
		
		$root['Guest']['id'] = $data['Guest']['guest'];
		$root['Guest']['name'] = $data['Guest']['name'];
		$root['Guest']['email'] = $data['Guest']['email'];
		$root['Guest']['url_image'] = $data['Guest']['url_image'];
		
		if($this->save($root)){
			if($this->Comment->saveComment($data['Guest']['comment'], $data['Guest']['guest'])){
				$return['success'] = 1;
				$this->confirmCodeandComment($data['Guest']['guest']);
				$return['guest'] = $data['Guest']['guest'];
			}
		}
		
		return $return;
	}
	
	/*
	 * Salva nova amiga para enviar um comentário posteriormente.
	 */
	public function saveNew($data){
		$return = array('success' => 0, 'msg' => '');

        App::uses('Code', 'Model');
        $Code = new Code();

		$root_id = $this->_getRootId($data['Guest']['guest']);

        $code_generated = $Code->getSortCode();

		$data['Guest']['root_id'] = $root_id;
		$data['Guest']['father_id'] = $data['Guest']['guest'];
		$data['Guest']['name'] = $data['Guest']['name'].' '.$data['Guest']['last_name'];
		$data['Guest']['code'] = $code_generated;
		
		$this->create();
		if($this->save($data)){
            $Code->setUsed($code_generated);
			$return['success'] = 1;
			$return['code'] = $code_generated;
			$return['from'] = $this->getGuest($data['Guest']['guest']);
		}
		
		return $return;
	}
	
	public function getGuest($guest_id){
		$guest = $this->find('first', array(
						'conditions' => array(
							'Guest.id' => $guest_id
						)
					));	
					
		return $guest['Guest']['name'];
	}
	
	private function _getRootId($id = null){
		if($id){
			$data = $this->find('first', array(
							'conditions' => array(
								'Guest.id' => $id,
							),
							'fields' => array(
								'Guest.root_id'
							)
						));
			return $data['Guest']['root_id'];
		}
	}	
	/*
	 * Retorna todos os convidados
	 */
	public function getGuests(){
		return $this->find('all');
	}
	
	public function getGuestsTestimonials(){
		return $this->find('all', array(
						'conditions' => array(
							'Guest.verify' => 1
						),
						'contain' => 'Comment'
				));
	}
	
	public function setRelationsOption($guest_id, $option){
		$root = $this->_getRootId($guest_id);
		
		$relations = $this->find('all', array(
							'conditions' => array(
								'Guest.root_id' => $root,
							),
							'contain' => 'Comment'
						));

		if($option == 2 || $option == 0){
			foreach ($relations as $key => $value) {
				if($value['Guest']['id'] >= $guest_id){
					$this->saveViewOption($value['Guest']['id'], 0);
				}
			}
		} else if($option == 1){
			$hasDenied = $this->find('all', array(
							'conditions' => array(
								'Guest.root_id' => $root,
							),
							'contain' => 'Comment',
							'joins' => array(
					                    array(
					                        'table' => 'comments',
					                        'alias' => 'Comment',
					                        'type' => 'INNER',
					                        'conditions' => array('Comment.guest_id = Guest.id', 'Comment.guest_id !=' => $guest_id, 'Comment.status = 2')
					                    )
					                ),
			                'group' => array('Guest.id'),
						));
			foreach ($relations as $k => $relation) {			
				if($hasDenied){
					foreach ($hasDenied as $key => $value) {
						if($value['Guest']['id'] <= $guest_id){
							$this->saveViewOption($value['Guest']['id'], 0);
						}else{
							$this->saveViewOption($value['Guest']['id'], 1);
						}
					}
				} else {
					$this->saveViewOption($relation['Guest']['id'], 1);
				}
			}
		} else {
			
		}
		
		return true;
	}
	
	/*
	 * Salva se será apresentado na home, 0 = não será
	 */
	public function saveViewOption($guest_id, $option){
		$data['Guest']['id'] = $guest_id;
		$data['Guest']['accept'] = $option;
		if($this->save($data)){
			return true;
		}else{
			return false;
		}
	}
	
	public function getGuestList(){
		return $this->find('list', array(
						'fields' => array('id', 'name')
					));		
	}

	private function _numberOfNodes($root){
		$nodes = $this->find('count', array(
						'conditions' => array(
							'Guest.root_id' => $root
						)
					));
					
		if($nodes < 20){
			return true;
		}else{
			return false;
		}
	}

	private function _getRoot($root){
		$teste = $this->find('all', array('conditions' => array(
								'Guest.root_id' => $root,
								'Guest.accept' => 1
							),
							'joins' => array(
					                    array(
					                        'table' => 'comments',
					                        'alias' => 'Comment',
					                        'type' => 'INNER',
					                        'conditions' => array('Comment.guest_id = Guest.id', 'Comment.status = 1')
					                    )
					                ),
			                'group' => array('Guest.id'),
			                'fields' => array(
								'Guest.name', 'Guest.url_image', 'Comment.comment'
							)
						));
		
		$return = array();
		foreach ($teste as $key => $t) {
			$guest = array(
						'name' => $t['Guest']['name'],
						'url_image' => $t['Guest']['url_image'],
						'comment' => $t['Comment']['comment']	
					);
			$return[] = $guest; 
		}
		return $return;
	}
	
	public function getTree(){
		$return = array();
		for ($i=1; $i <= 5; $i++) { 
			$return[] = $this->_getRoot($i);
		}
		
		return $return;
	}
	
	public function getAdminTree($guest_id){
		$root = $this->_getRootId($guest_id);
		
		$tree = $this->find('all', array(
						'conditions' => array(
							'Guest.root_id' => $root
						)
					));	
					
		return $tree;
	}
}

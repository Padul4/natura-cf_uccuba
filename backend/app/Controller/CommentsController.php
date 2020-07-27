<?php
App::uses('AppController', 'Controller');

class CommentsController extends AppController {

	public $components = array('Paginator');
	
	public $uses = array('Comment', 'Guest');
	
	public function isAuthorized() {
		switch ($this->action) {
			case 'admin_index' :
			case 'admin_edit' :
			case 'admin_network' :
				if($this->Auth->user('level') == 2){
					return true;
					break;	
				} else {
					return false;
					break;
				}
	  	}
 	}

	public function admin_index($option = null) {
		$this->theme = 'AdminSb';
		
		if ($option >= 0 && isset($option) && ($option <= 2)) {
			$filter = $option;
			$conditions = array('Comment.status'=>$option);
		} else {
			$filter = null;
			$conditions = array();
  		}
		
		$arguments = array('order' => 'User.name ASC', 'limit' => 10, 'conditions' => array($conditions));
		
		$arguments = array('order' => array(
								'Comment.created'=> 'ASC'
							), 
							'limit' => 20,
							'contain' => array('Guest'),
							'conditions' => $conditions
		);
		
		$this -> paginate = $arguments;
		$this->set('comments', $this->Paginator->paginate());
		$this->set('status', Configure::read('COMMENT_STATUS'));
		$this->set('guests', $this->Guest->getGuestList());
		$this->set('filter', $filter);
		$this->setLayoutTitle('Depoimentos', 'Lista');
	}

	public function admin_edit($id = null) {
		$this->theme = 'AdminSb';
		if (!$this->Comment->exists($id)) {
			$this->Session->setFlash('Depoimento inválido.', 'flash_error');
			return $this->redirect(array('action' => 'admin_index'));
		}
		if ($this->request->is(array('post', 'put'))) {
			
			$this->Guest->setRelationsOption($this->request->data['Guest']['id'], $this->request->data['Comment']['status']);
			
			if ($this->Comment->save($this->request->data)) {
				$this->Session->setFlash('Depoimento verificado com sucesso.', 'flash_success');
				return $this->redirect(array('action' => 'admin_index'));
			} else {
				$this->Session->setFlash('Erro ao salvar. Tente novamente.', 'flash_error');
			}
		} else {
			$options = array('conditions' => array('Comment.' . $this->Comment->primaryKey => $id), 'contain' => array('Guest'));
			$this->request->data = $this->Comment->find('first', $options);
		}
		
		$this->set('statuses', Configure::read('COMMENT_STATUS'));
		$this->setLayoutTitle('Depoimentos', 'Avaliar');
	}
	
	public function admin_network($id = null){
		$this->theme = 'AdminSb';
		if (!$this->Guest->exists($id)) {
			$this->Session->setFlash('Depoimento inválido.', 'flash_error');
			return $this->redirect(array('action' => 'admin_index'));
		}
		
		$tree = $this->Guest->getAdminTree($id);
		
		$this->set('tree', $tree);
		$this->set('asked', $id);
		$this->setLayoutTitle('Depoimentos', 'Rede');
	}
}

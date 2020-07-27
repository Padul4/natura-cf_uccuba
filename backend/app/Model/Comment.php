<?php
App::uses('AppModel', 'Model');

class Comment extends AppModel {

	public $validate = array(
		'guest_id' => array(
			'numeric' => array(
				'rule' => array('numeric'),
				//'message' => 'Your custom message here',
				//'allowEmpty' => false,
				//'required' => false,
				//'last' => false, // Stop validation after this rule
				//'on' => 'create', // Limit validation to 'create' or 'update' operations
			),
		),
		'comment' => array(
			'notEmpty' => array(
				'rule' => array('notEmpty', 'maxLength', 200),
				'message' => 'Comentário obrigatório.',
			)
		)
	);

	public $belongsTo = array(
		'Guest' => array(
			'className' => 'Guest',
			'foreignKey' => 'guest_id',
			'conditions' => '',
			'fields' => '',
			'order' => ''
		)
	);
	
	public function saveComment($comment, $guest){
		$rootComment = array();
		
		$rootComment['Comment']['guest_id'] = $guest;
		$rootComment['Comment']['comment'] = $comment;
		
		if($this->save($rootComment)){
			return true;
		} else {
			return false;
		}
	}
}

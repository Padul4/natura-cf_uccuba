<?php
App::uses('AppModel', 'Model');
/**
 * User Model
 *
 */
class User extends AppModel {

/**
 * Validation rules
 *
 * @var array
 */
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
		'username' => array(
			'notEmpty' => array(
				'rule' => array('notEmpty'),
				//'message' => 'Your custom message here',
				//'allowEmpty' => false,
				//'required' => false,
				//'last' => false, // Stop validation after this rule
				//'on' => 'create', // Limit validation to 'create' or 'update' operations
			),
		),
		'password' => array(
			'notEmpty' => array(
				'rule' => array('notEmpty'),
				//'message' => 'Your custom message here',
				//'allowEmpty' => false,
				//'required' => false,
				//'last' => false, // Stop validation after this rule
				//'on' => 'create', // Limit validation to 'create' or 'update' operations
			),
		),
	);
	
	public function beforeSave($options = array()) {
		if (isset($this -> data[$this -> alias]['name'])) {
			$this -> data[$this -> alias]['name'] = strip_tags($this -> data[$this -> alias]['name']);
		}
		
		if (isset($this -> data[$this -> alias]['username'])) {
			$this -> data[$this -> alias]['username'] = strip_tags($this -> data[$this -> alias]['username']);
		}

		if (isset($this -> data[$this -> alias]['password'])) {
			$this -> data[$this -> alias]['password'] = AuthComponent::password($this -> data[$this -> alias]['password']);
		}
		
		if ((isset($this -> data[$this -> alias]['password_new'])) && (!empty($this -> data[$this -> alias]['password_new']))) {
			$this -> data[$this -> alias]['password'] = AuthComponent::password($this -> data[$this -> alias]['password_new']);
		}
	}
}

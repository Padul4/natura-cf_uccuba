<?php
App::uses('AppModel', 'Model');

class Discount extends AppModel {

	public $displayField = 'name';
	
	public $belongsTo = array(
		'Guest' => array(
			'className' => 'Guest',
			'foreignKey' => 'guest_id',
			'conditions' => '',
			'fields' => '',
			'order' => ''
		)
	);
	
	public function numberOfInvitations($guest_id){
		return $this->find('count', array(
						'conditions' => array(
							'Discount.guest_id' => $guest_id
						)
				));
	}
	
	public function saveDiscounts($data){
		foreach ($data as $key => $value) {
			$save['Discount']['guest_id'] = $value['guest'];
			$save['Discount']['name'] = $value['name'];
			$save['Discount']['email'] = $value['email'];
			$this->create();
			$this->save($save);
		}
		return true;
	}
}

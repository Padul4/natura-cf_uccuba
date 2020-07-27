<?php

App::uses('Controller', 'Controller');

class AppController extends Controller {
	public $components = array(
		'Session',
        'Auth' => array(
            'loginAction' => array('controller' => 'users', 'action' => 'login'),
            'loginRedirect' => array('controller' => 'comments', 'action' => 'admin_index'),
            'logoutRedirect' => array('controller' => 'users', 'action' => 'login'),
            'authError' => 'Você precisa efetuar login para acessar esta página',
            'authorize' => array('Controller'),
        ),
        'DebugKit.Toolbar',
        'Paginator',
	);
	
	function setLayoutTitle($title, $subtitle=null) {
        $this->set('layoutMenuActive', $this->_setLayoutMenuActive($title));
		$this->set('titleView', array('primary'=>$title, 'secondary'=>$subtitle));
    }
	
	private function _setLayoutMenuActive($menu) {
        $return = array(
            'usuarios' => null,
       	);

        $section = strtolower(Inflector::slug(str_replace(' ', '', $menu), '-'));
        $return[$section] = 'active';

        return $return;
    }
	
	public function response($data){
		header('Content-Type: application/json');
		header("access-control-allow-origin: *");
		die(json_encode($data));
	}
}

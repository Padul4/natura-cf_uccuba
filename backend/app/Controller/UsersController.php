<?php
App::uses('AppController', 'Controller');

class UsersController extends AppController {

	public $components = array('Paginator');
	
	public function isAuthorized() {
		switch ($this->action) {
			case 'admin_index' :
			case 'admin_add' :
			case 'admin_edit' :
			case 'login':
			case 'logout':
				if($this->Auth->user('level') == 2){
					return true;
					break;	
				} else {
					return false;
					break;
				}
	  	}
 	}
	
	public function admin_index() {
		$this->theme = 'AdminSb';
		$this->User->recursive = 0;
		$this->set('users', $this->Paginator->paginate());
		
		$this->setLayoutTitle('Usuários', 'Lista');
	}
	
	public function admin_edit($id = null) {
		$this->theme = 'AdminSb';		
		if (!$this->User->exists($id)) {
			throw new NotFoundException('Registro inválido.', 'flash_error');
		}

		if ($this->request->is(array('post', 'put'))) {
			
			if($this->request->data['User']['password_new']){
				$this->request->data['User']['password'] = $this->request->data['User']['password_new'];	
			}
		
			if ($this->User->save($this->request->data)) {
				$this->Session->setFlash('Registro salvo com sucesso.', 'flash_success');
				return $this->redirect(array('controller' => 'comments', 'action' => 'admin_index'));
			} else {
				$this->Session->setFlash('Erro ao salvar. Tente novamente.', 'flash_error');
			}
		} 
		$options = array('conditions' => array('User.' . $this->User->primaryKey => $id));
		$this->request->data = $this->User->find('first', $options);
		
		$this->setLayoutTitle('Admin', 'Alterar Senha');
	}

	public function login() {
		$this->theme = 'AdminSb';
        if ($this->request->is('post')) {
            if ($this->Auth->login()) {
				$this -> redirect(array('controller'=>'comments', 'action'=>'admin_index'));
            } else {
                $this->Session->setFlash('Login inválido', 'flash_error');
            }
        }
        $this->layout = 'login';
    }

    public function logout() {
    	$this->theme = 'AdminSb';
		$this->redirect($this->Auth->logout());
    }
}

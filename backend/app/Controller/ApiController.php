<?php 
App::uses('CakeEmail', 'Network/Email');

class ApiController extends AppController {
	
	public $uses = array('Guest', 'Discount');
	
	public function beforeFilter(){
		$this->Auth->allow();
	}
	
	public function index(){
		die;
	}
	
	public function getNodes() {
		AppController::response($this->Guest->getTree());
	}	
	
	public function verifyCode() {
		$return = array('success' => 0, 'msg' =>'');
		
		if ($this->request->is('post') && isset($this->request->data['Guest']['code'])) {
			$return = $this->Guest->validateCode($this->request->data['Guest']['code']);
		}
		
		AppController::response($return);
	}
	
	public function setRegister(){
		$return = array('success' => 0, 'msg' => '');
		
		if($this->request->is('post') && isset($this->request->data['Guest'])){
			$code = $this->Guest->validateCode($this->request->data['Guest']['code']);
			
			if ($code['success'] != 0){
				$return = $this->Guest->saveRoot($this->request->data);
			}
		}
		
		AppController::response($return);
	}
	
	public function setNewFriend(){
		$return = array('success' => 0, 'msg' => '');
		
		if($this->request->is('post') && isset($this->request->data['Guest'])){
			
			$return = $this->Guest->saveNew($this->request->data);
		
			if($return['success'] == 1) {
                unset($return['code']);
                unset($return['from']);
                $return['success'] = 1;
                $return['msg'] = 'Usuário salvo com sucesso.';
            } else {
                $return['msg'] = 'Erro ao salvar.';
            }
		}
		
		AppController::response($return);
	}
	
	public function setMoreFriends(){
		$return = array('success' => 0, 'msg' => '');
		
		if($this->request->is('post') && isset($this->request->data['Discount'])){
				
			$nEnvitations = $this->Discount->numberOfInvitations($this->request->data['Discount'][0]['guest']);
			
			if(($nEnvitations < 10) && (sizeof($this->request->data['Discount']) <= 10)){
				if($this->Discount->saveDiscounts($this->request->data['Discount'])){
					$guest = $this->Guest->getGuest($this->request->data['Discount'][0]['guest']);
					
					$envitations = $this->Discount->numberOfInvitations($this->request->data['Discount'][0]['guest']);
					foreach ($this->request->data['Discount'] as $key => $value) {
						$email = new CakeEmail('default');
						$email -> template('cupom_10');
						$email -> to(array($value['email']));
						$email -> subject('Natura - Cupom de desconto');
						$email -> viewVars(array('to' => $value, 'from' => $guest));
						$email -> send();
					}
					
					$return['success'] = 1;
					$return['msg'] = 'E-mail de desconto enviado com sucesso.';
					$return['nEnvitations'] = $envitations;	
					
				}else{
					$return['success'] = 0;
					$return['msg'] = 'Erro ao salvar. Tente novamente.';
				}
			}else{
				$return['success'] = 0;
				$return['msg'] = 'Você atingiu o limite de cupons de desconto.';
			}
		}
		
		AppController::response($return);
	}

	public function getAddress($cep){
		$json = file_get_contents('http://cepbrave.azurewebsites.net/api/cep?cep='.$cep.'&token=00000000-0000-0000-0000-000000000000');
		AppController::response(json_decode($json));
	}

    public function version(){
        echo '2015-04-09 10h';
        die;
    }
}
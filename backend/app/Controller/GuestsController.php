<?php
App::uses('AppController', 'Controller');

class GuestsController extends AppController {

	public $components = array('Paginator');
	
	public function isAuthorized() {
		switch ($this->action) {
			case 'admin_index' :
			case 'admin_code_export' :
			case 'admin_code_generate' :
			case 'admin_testemony_export' :
				if($this->Auth->user('level') == 2){
					return true;
					break;	
				} else {
					return false;
					break;
				}
	  	}
 	}

	public function admin_code_generate(){
		debug($this->Guest->codeGenerator());die;
	}
	
	public function admin_index() {
		$this->theme = 'AdminSb';
		
		$arguments = array('order' => array(
								'Guest.name'=> 'ASC'
							), 
							'limit' => 20,
							'conditions' => array(
								'Guest.verify' => 1
							)
		);
		
		$this -> paginate = $arguments;
		$this->set('guests', $this->Paginator->paginate());
		$this->setLayoutTitle('Usuários', 'Lista');
	}
	
	public function admin_code_export(){
		$codes = $this->Guest->getGuests();

		if($codes){
			foreach($codes as $d){
				$rows = array();
				$rows[] = $d['Guest']['name'];
				$rows[] = $d['Guest']['email'];
				$rows[] = $d['Guest']['phone'];
				$rows[] = $d['Guest']['cell_phone'];
				$rows[] = $d['Guest']['address'];
				$rows[] = $d['Guest']['number'];
				$rows[] = $d['Guest']['complement'];
				$rows[] = $d['Guest']['neighborhood'];
				$rows[] = $d['Guest']['cep'];
				$rows[] = $d['Guest']['city'];
				$rows[] = $d['Guest']['state'];
				$rows[] = $d['Guest']['code'];
				if($d['Guest']['verify'] == 0){
					$rows[] = 'Não validado';
				}else{
					$rows[] = 'Validado';
				}
				$data[] = $rows;
			}
			// output headers so that the file is downloaded rather than displayed
			header('Content-Type: text/csv; charset=utf-8');
			header('Content-Disposition: attachment; filename=codes.csv');
			
			// create a file pointer connected to the output stream
			$output = fopen('php://output', 'w');
			// output the column headings
			fputcsv($output, array('Nome', 'E-mail', 'Telefone', 'Celular', 'Endereço', 'Número', 'Complemento', 'Bairro',  'Cep', 'Cidade', 'Estado' , 'Código', 'Situação'));
			// loop over the rows, outputting them
			foreach($data as $items){
				fputcsv($output, $items, ',');
			}
			
			fclose($output);
			exit;
		} else {
			$this->Session->setFlash('Não existem códigos cadastrados para exportar', 'flash_error');
			return $this->redirect(array('controller' => 'comments', 'action' => 'index'));
		}
	}

	public function admin_testemony_export(){
		$testemonials = $this->Guest->getGuestsTestimonials();

		if($testemonials){
			foreach($testemonials as $d){
				$rows = array();
				$rows[] = $d['Guest']['name'];
				$rows[] = $d['Guest']['email'];
				$rows[] = $d['Comment'][0]['comment'];
				$data[] = $rows;
			}
			// output headers so that the file is downloaded rather than displayed
			header('Content-Type: text/csv; charset=utf-8');
			header('Content-Disposition: attachment; filename=testimonials.csv');
			
			// create a file pointer connected to the output stream
			$output = fopen('php://output', 'w');
			// output the column headings
			fputcsv($output, array('Nome', 'E-mail', 'Depoimento'));
			// loop over the rows, outputting them
			foreach($data as $items){
				fputcsv($output, $items, ',');
			}
			
			fclose($output);
			exit;
		}else {
			$this->Session->setFlash('Não existem depoimentos cadastrados para exportar', 'flash_error');
			return $this->redirect(array('controller' => 'comments', 'action' => 'index'));
		}
	}
}

<?php
App::uses('AppModel', 'Model');

/**
 * Code Model
 *
 */

class Code extends AppModel {

    /*
     * Sorteia qualquer código que ainda não foi usado
     */
	function getSortCode(){
        $code = $this->find('first', array(
                'conditions'=>array(
                    'Code.used' => 0
                ),
                'order' => 'RAND()'
        ));

        return $code['Code']['name'];
    }


    /*
     * Marca um código como usado
     */
    function setUsed($code_generated){
        $code = $this->findByName($code_generated);

        $update['Code'] = array(
            'id'=>$code['Code']['id'],
            'used'=>1
        );

        return $this->save($update);
    }

     /*
     * Gerador de códigos com tamanho 8, variando entre numeros e letras. Usados apenas pelos desenvolvedores para gerar os 95 códigos.
     */
    public function codeGenerator(){

        for($i=0; $i<95; $i++){

            $code['Code']=array(
                'name'=>$this->_sort(),
                'used'=>0
            );

            $this->create();
            $this->save($code);
        }

    }

    private function _sort(){
        $code = substr(str_shuffle("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, 8);

        $find = $this->find('first', array(
            'conditions' => array(
                'Code.name' => $code
            )
        ));

        if($find){
            $this->_sort();
        } else {
            return $code;
        }

    }


}

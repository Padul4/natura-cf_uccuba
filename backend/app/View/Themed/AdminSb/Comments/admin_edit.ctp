<div class="form form-center">
	<?php
	echo $this->Form->create('Comment', array('inputDefaults' => array(
        				'format' => array('before', 'label', 'between', 'input', 'error', 'after'),
        				'div' => array('class' => 'form-group'),
        				'label' => array('class' => 'control-label'),
        				'between' => '<div class="controls">',
        				'after' => '</div>',
        				'error' => array('attributes' => array('wrap' => 'span', 'class' => 'error-message')))));
	
	echo $this->Form->input('id');
	echo $this->Form->input('Guest.id');
	echo $this->Form->input('Guest.name', array('label' => 'Enviado por', 'class' => 'form-control', 'required' => false, 'readonly' => true));
	echo $this->Form->input('Guest.email', array('label' => 'E-mail', 'class' => 'form-control', 'required' => false, 'readonly' => true));
	echo $this->Form->input('Guest.cell_phone', array('label' => 'Celular', 'class' => 'form-control', 'required' => false, 'readonly' => true));
	if($this->request->data['Comment']['created']){
		$date = date('d/m/Y', strtotime($this->request->data['Comment']['created']));
	}else{
		$date = null;
	}
	echo $this->Form->input('date', array('label' => 'Data de envio', 'class' => 'form-control', 'required' => false, 'readonly' => true, 'value' => $date));
	echo $this->Form->input('comment', array('label' => 'Comentário', 'class' => 'form-control', 'required' => false, 'type' => 'textarea', 'maxlength' => 160));
	?>
	<p>Atenção: Ao reprovar o depoimento, todos os posteriores dependentes à ele não serão apresentados na lista de depoimentos.</p>
	<?php  
	echo $this->Form->input('status', array('label' => 'Status', 'class' => 'form-control', 'required' => false));
	
    ?>
	<div class="btn-group">
		<button type="submit" class="btn btn-small btn-success">Salvar</button>
	<?php	
	echo $this->Html->link('Cancelar', array('action' => 'admin_index'), array('class' => 'btn btn-default'));
    ?>
   </div>
    
</div>


	
	
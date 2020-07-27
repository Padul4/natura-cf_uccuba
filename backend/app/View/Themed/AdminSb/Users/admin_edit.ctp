<div class="form form-center">
	<?php
	echo $this->Form->create('User', array('inputDefaults' => array(
        				'format' => array('before', 'label', 'between', 'input', 'error', 'after'),
        				'div' => array('class' => 'form-group'),
        				'label' => array('class' => 'control-label'),
        				'between' => '<div class="controls">',
        				'after' => '</div>',
        				'error' => array('attributes' => array('wrap' => 'span', 'class' => 'error-message')))));
	
	echo $this->Form->input('id');
	echo $this->Form->input('username', array('label' => array('text' => 'Usuário'), 'class' => 'form-control', 'required' => false));
	echo $this->Form->input('password_new', array('label' => array('text' => 'Nova Senha'), 'type' => 'password', 'class' => 'form-control', 'required' => false));
	echo $this->Form->input('password_confirm', array('label' => array('text' => 'Confirmar Senha'), 'type' => 'password', 'class' => 'form-control', 'required' => false));
	echo $this->Form->end();	
    ?>
    
    <div class="btn-group">
		<button class="btn btn-small btn-success" id="btnSaveUser">Atualizar</button>
		<?php	
		echo $this->Html->link('Cancelar', array('controller' => 'comments', 'action' => 'admin_index'), array('class' => 'btn btn-default'));
	    ?>
	</div>
</div>
<nav class="navbar navbar-inverse navbar-fixed-top">
	<div class="navbar-header">
		<a class="navbar-brand header" href="<?php echo $this->Html->url(array('controller' => 'comments', 'action' => 'admin_index')); ?>">Salve_ | Admin Ekos Ucuuba</a>
	</div>
	<div id="navbar" class="navbar-collapse collapse">
		<ul class="nav navbar-nav">
			<li>
				<?php echo $this->Html->link('<span> Exportar Códigos</span>', 
												array('controller'=>'guests', 'action' => 'admin_code_export'), 
												array('escape' => false)); ?>
			</li>
			<li>
				<?php echo $this->Html->link('<span> Exportar Depoimentos</span>', 
												array('controller'=>'guests', 'action' => 'admin_testemony_export'), 
												array('escape' => false)); ?>
			</li>
			<li>
				<?php echo $this->Html->link('<span> Alterar senha</span>', 
												array('controller'=>'users', 'action' => 'admin_edit', 1), 
												array('escape' => false)); ?>
			</li>
		</ul>
		<ul class="nav navbar-nav navbar-right">
			<li>
				<a href="<?php echo $this->Html->url(array('controller'=>'users', 'action'=>'logout'));?>">
					<i class="fa fa-sign-out fa-fw"></i> sair</a>
			</li>
		</ul>
	</div>
</nav>

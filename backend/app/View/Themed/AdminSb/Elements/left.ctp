<div class="navbar-default sidebar" role="navigation">
	 <div class="sidebar-nav navbar-collapse">
		<ul class="nav" id="side-menu">
			<li>
				<?php echo $this->Html->link('<i class="glyphicon glyphicon-comment"></i><span> Depoimentos</span>', 
												array('controller' => 'comments', 'action' => 'index', 'admin' => 1 ), 
												array('escape' => false)); ?>
			</li>
			
			<li>
				<?php echo $this->Html->link('<i class="glyphicon glyphicon-barcode"></i><span> Exportar códigos</span>', 
												array('controller'=>'guests', 'action' => 'code_export'), 
												array('escape' => false)); ?>
			</li>
			
			<li>
				<?php echo $this->Html->link('<i class="glyphicon glyphicon-export"></i><span> Exportar depoimentos</span>', 
												array('controller'=>'guests', 'action' => 'testemony_export'), 
												array('escape' => false)); ?>
			</li>
			
			
			<li>
				<?php $this->Html->link('<i class="glyphicon glyphicon-user"></i><span> Gerar código</span>', 
												array('controller' => 'guests', 'action' => 'code_generate'), 
												array('escape' => false)); ?>
			</li>
		</ul>	
	</div>
</div>
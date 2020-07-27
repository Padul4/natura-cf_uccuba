<div class="users index index-center">
	<div class="btn-group">
		<button data-toggle="dropdown" class="btn btn-info btn-small dropdown-toggle">
			<?php
				if ($filter >= 0 && isset($filter)) {
					echo $status[$filter];
				} else {
					echo 'Filtros';
				}
			?>
			<span class="caret"></span>
		</button>
	
		<ul class="dropdown-menu dropdown-info pull-right">
			<?php	foreach ($status as $key => $obj) {
					   echo '<li>';
					   echo $this -> Html -> link($obj, array('action' => 'admin_index', $key));
					   echo '</li>';
					}
			?>
	  		<li class="divider"></li>
	  		<li>
	   			<?php echo $this->Html->link('Todos', array('action'=>'admin_index'))?>
	  		</li>
	 	</ul>
	</div>

	<br />
	<br />
	
	<?php if (sizeof($comments)==0) : echo 'Nenhum resultado foi encontrado.'; endif ?>
	
	<?php if (sizeof($comments)>0) : ?>
	
		<table cellpadding="0" cellspacing="0" class='table table-striped'>
			<tr>
				<th><?php echo $this->Paginator->sort('Guest.name', 'Enviado por'); ?></th>
				<th><?php echo $this->Paginator->sort('Guest.father_id', 'Convidado por'); ?></th>
				<th>Celular</th>
				<th>Data de envio</th>
				<th>Status</th>
				<th>Visível na Home</th>
				<th class="actions"></th>
			</tr>
			<?php foreach ($comments as $comment): ?>
			<tr>
				<td><?php echo $comment['Guest']['name']; ?></td>
				<?php if($comment['Guest']['father_id']): ?>
					<td><?php echo $guests[$comment['Guest']['father_id']]; ?></td>
				<?php else: ?>
					<td><?php echo 'Natura'; ?></td>
				<?php endif; ?>
				<td><?php echo $comment['Guest']['cell_phone']; ?></td>
				<?php if($comment['Comment']['created']): ?>
					<td><?php echo date('d/m/Y', strtotime($comment['Comment']['created'])); ?></td>
				<?php else: ?>
					<td></td>
				<?php endif; ?>
				<td><?php echo $status[$comment['Comment']['status']]; ?></td>
				<?php if($comment['Guest']['accept'] == 1 && $comment['Comment']['status'] == 1):?>
					<td><?php echo 'Sim'; ?></td>
				<?php else: ?>
					<td><?php echo 'Não'; ?></td>
				<?php endif; ?>
				<td class="actions">
					<a href="<?php echo $this->Html->url(array('action' => 'admin_edit',  $comment['Comment']['id']));?>" class="btn btn-sm btn-default">Avaliar</a>
					<a href="<?php echo $this->Html->url(array('action' => 'admin_network',  $comment['Guest']['id']));?>" class="btn btn-sm btn-default">Ver Rede</a>
				</td>
			</tr>
			<?php endforeach; ?>
		</table>
	<?php echo $this->Element('paginate');?>

	<?php endif; ?>

</div>
	
<div class="users index index-center">
	<?php echo $this -> Html -> link(__('Exportar códigos'), array('action' => 'code_export'), array('class'=>'btn btn-small btn-primary')); ?>
	<?php echo $this -> Html -> link(__('Exportar depoimentos'), array('action' => 'testemony_export'), array('class'=>'btn btn-small btn-primary')); ?>
	<br />
	<br />
	
	<?php if (sizeof($guests)==0) : echo 'Nenhum resultado foi encontrado.'; endif ?>
	
	<?php if (sizeof($guests)>0) : ?>
	
		<table cellpadding="0" cellspacing="0" class='table table-striped'>
			<tr>
				<th>Nome</th>
				<th>Status</th>
				<th class="actions"></th>
			</tr>
			<?php foreach ($guests as $guest): ?>
			<tr>
				<td><?php echo $guest['Guest']['name']; ?></td>
				<td><?php echo $status[$guest['Comment'][0]['accept']]; ?></td>
				<td class="actions">
					<?php echo $this->Html->link(__('Avaliar'), array('action' => 'admin_edit',  $guest['Comment'][0]['id'])); ?>
					<?php echo $this->Html->link(__('Deletar'), array('action' => 'admin_delete',  $guest['Guest']['id']), null, __('Tem certeza que deseja deletar este usário?')); ?>
				</td>
			</tr>
			<?php endforeach; ?>
		</table>
	<?php echo $this->Element('paginate');?>

	<?php endif; ?>

</div>
<div class="users index index-center">
	<a href="<?php echo $this->Html->url(array('action' => 'admin_index'));?>" class="btn btn-sm btn-info"><i class="glyphicon glyphicon-chevron-left"></i><b>Retornar</b></a>
		<br />
		<br />
	<?php for ($i=0; $i < sizeof($tree); $i++): ?>
		<?php if($i==0): ?>
			<b>Raíz</b>
			<?php if($asked == $tree[$i]['Guest']['id']): ?>
				<span style="color:red;"><?php echo $tree[$i]['Guest']['name']; ?></span>
			<?php else: ?>
				<?php echo $tree[$i]['Guest']['name']; ?>
			<?php endif; ?>
			<br />
			<br />
		<?php else: ?>
			<?php if($asked == $tree[$i-1]['Guest']['id']): ?>
				<span style="color:red;"><?php echo $tree[$i-1]['Guest']['name']; ?></span> <b> convidou </b> <?php echo $tree[$i]['Guest']['name']; ?>
				<br />
				<br />
			<?php elseif($asked == $tree[$i]['Guest']['id']): ?>
				<?php echo $tree[$i-1]['Guest']['name']; ?><b> convidou </b>  <span style="color:red;"><?php echo $tree[$i]['Guest']['name']; ?></span>
				<br />
				<br />
			<?php else: ?>
				<?php echo $tree[$i-1]['Guest']['name']; ?><b> convidou </b> <?php echo $tree[$i]['Guest']['name']; ?>
				<br />
				<br />
			<?php endif; ?>
		<?php endif; ?>
	<?php endfor; ?>
</div>
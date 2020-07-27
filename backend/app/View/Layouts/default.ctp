<!DOCTYPE html>
<html>
<head>
	<?php
		echo $this->Html->charset();
		echo $this->Html->meta('icon');

		echo $this->Html->css('cake.generic');
		echo $this->fetch('meta');
	?>
</head>
<body>
	<div id="container">
		<header id="header">
		</header>
		<div id="content">
			<?php echo $this->Session->flash(); ?>

			<?php echo $this->fetch('content'); ?>
		</div>
	</div>
</body>
</html>

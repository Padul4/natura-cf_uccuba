<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>Salve_ :: Admin Ekos Ucuuba</title>
		<?php
			echo $this->Html->meta('favicon.ico','img/favicon.ico',array('type' => 'icon'));
			
			echo $this -> Html -> css('bootstrap.min');
			echo $this -> Html -> css('../font-awesome/css/font-awesome');
			echo $this -> Html -> css('sb-admin');
			echo $this -> Html -> css('geral-admin');
			echo $this -> Html -> css('plugins/timeline');
			echo $this -> Html -> css('plugins/metisMenu/metisMenu.min');
		?>
		<script>
			var __BASE_URL__ = '<?php echo Router::url('/'); ?>';
			var base_url = '<?php echo Router::url('/'); ?>';
		</script>
		<?php
			echo $this -> Html -> script('jquery-1.11.0');
			echo $this -> Html -> script('bootstrap.min');
			echo $this -> Html -> script('jquery.metisMenu');
			echo $this -> Html -> script('sb-admin');
			echo $this -> Html -> script('jQueryMask');
            echo $this -> Html -> script('user_edit');
		?>
		
	</head>
	<body>
		<div id="wrapper">
			<?php echo $this -> Element('header'); ?>
			<div class="container theme-showcase" role="main">
				<br />
				<br />
				<div class="row">
					<div class="col-lg-12">
						<h1 class="page-header"><?php echo $titleView['primary']; ?> 
							 <small><?php echo $titleView['secondary']; ?></small>
						</h1>
					</div>
				</div>
				<div class="row">
					<?php echo $this -> Session -> flash(); ?>
					<?php echo $this -> fetch('content'); ?>
				</div>
			</div>
		</div>
	</body>
</html>


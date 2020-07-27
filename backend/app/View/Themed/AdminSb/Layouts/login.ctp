<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>Natura :: CMS :: Login</title>
		<?php
			echo $this -> Html -> css('bootstrap.min');	
			echo $this -> Html -> css('login');
			echo $this -> Html -> script('jquery-1.11.0');
			echo $this -> Html -> script('bootstrap.min');
		?>
		
	</head>
	<body>
		<div id="wrapper">
			<div id="page-wrapper"	>
				<div class="row">
					<div class="container">
							<?php echo $this -> Session -> flash(); ?>
							<?php echo $this -> fetch('content'); ?>
					</div>
				</div>
			</div>
		</div>
	</body>
</html>


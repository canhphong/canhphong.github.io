<!DOCTYPE html>
<html lang="en-US">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/calendar.css">
  <title>Bài tập FormAjax JS</title>
</head>
<body>
	<div class="container">
		<div class="signup">
			<form method="post" action="#" name="register" >
				<p>
					<label for="username">Username</label>
					<input type="text" name="username" id="username">
				</p>
				<p>
					<label for="password">Password</label>
					<input type="password" name="password" id="password">
				</p>
				<p>
					<label for="email">Email</label>
					<input type="text" name="email" id="email">
				</p>
				<p>
					<label for="birthday">Birthday</label>
					<?php include_once 'calendar.php'; ?>
				</p>
				<p class="btn-submit">
					<input type="submit" name="action" id="submit" value="SUBMIT">
					<input type="reset" value="REFREST">
				</p>
			</form>
		</div>
		<!-- Link JS -->
      <script src="js/form_ajax.js"></script>
      <script src="js/calendar.js"></script>
</body>

</html>

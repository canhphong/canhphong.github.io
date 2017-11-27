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
			<form action="#" method="post" name="signup" >
				<p>
					<label for="username">Username</label>
					<input type="text" name="username" id="username">
				</p>
				<p>
					<label for="password">Password</label>
					<input type="text" name="password" id="password">
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
					<label for=""><input type="submit" value="SUBMIT"></label>
					<input type="reset" value="REFREST">
				</p>
			</form>
		</div>
      <script src="js/formajax.js"></script>
      <script src="js/calendar.js"></script>
</body>

</html>

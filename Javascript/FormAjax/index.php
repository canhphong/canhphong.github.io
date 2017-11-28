<?php include_once 'register.php'; ?>

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
			<form action="<?php echo $_SERVER['PHP_SELF'] ?>" method="post" name="signupform">
				<p>
					<label for="username">Username</label>
					<input type="text" name="username" id="username">
					<span class="text-danger"><?php if (isset($username_error)) echo $username_error; ?></span>
				</p>
				<p>
					<label for="password">Password</label>
					<input type="password" name="password" id="password">
					<span class="text-danger"><?php if (isset($password_error)) echo $password_error; ?></span>
				</p>
				<p>
					<label for="email">Email</label>
					<input type="text" name="email" id="email">
					<span class="text-danger"><?php if (isset($email_error)) echo $email_error; ?></span>
				</p>
				<p>
					<label for="birthday">Birthday</label>
					<?php include_once 'calendar.php'; ?>
					<!-- <span class="text-danger"><?php if (isset($birthday_error)) echo $name_error; ?></span> -->
				</p>
				<p class="btn-submit">
					<input type="submit" name="signup" value="SUBMIT">
					<input type="reset" name="" value="REFREST">
				</p>
			</form>
<div class="msg">
	 <span class="text-success"><?php if (isset($successmsg)) { echo $successmsg; } ?></span>
       <span class="text-danger"><?php if (isset($errormsg)) { echo $errormsg; } ?></span>
</div>
			
		</div>
		<!-- Link JS -->
      <!-- <script src="js/form_ajax.js"></script> -->
      <script src="js/calendar.js"></script>
</body>

</html>

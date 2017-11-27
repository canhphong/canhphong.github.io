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
				<form action="/sync.php" method="post">
		<table class="form-ajax">
		<tr>
			<td><label>Username:</label></td>
			<td><input type="text" name="username" placeholder="Enter Username"></td>
		</tr>
		<tr>
			<td><label>Password:</label></td>
			<td><input type="password" name="password" placeholder="Enter Password"></td>
		</tr>
		<tr>
			<td><label>Email:</label></td>
			<td><input type="email" name="email" placeholder="Enter Email"></td>
		</tr>
		<tr>
			<td><label>Birthday:</label></td>
			<td><?php include 'calendar.php'; ?></td>
		</tr>
		<tr>
			<td></td>
			<td>
				<input type="submit" value="SUBMIT">
				<input type="reset" value="REFREST">
			</td>
		</tr>
	</table>
</form>
		</div>
	</div>
      <script src="js/formajax.js"></script>
      <script src="js/calendar.js"></script>
</body>

</html>

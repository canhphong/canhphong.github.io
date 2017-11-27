// Function validate form 
// function checkInput() {
// 	// Storing Field Values In Variables
// 	var username = docunment.getElementById('username').value;
// 	var password = docunment.getElementById('password').value;
// 	var email = docunment.getElementById('email').value; 
// 	// Regular Expression For Email
// 	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
// 	// Conditions
// 	if (username != '' && password != '' && email != '') {
// 		if (email.match(emailReg)) {

// 		}
// 	}
// 	if (username == '') {
// 		alert('Please enter Username!');
// 		return false;
// 	} else if(password == '') (
// 		alert('Please enter Password!');
// 		return false;
// 	) else if(email == '') {
// 		alert('Please enter email');
// 		return false;
// 	}
// 	else {return true;}	
// }

function checkInput() {
	// Check Username
	if (docunment.flogin.username.value=="") 
	{
		alert('Please enter username');
		docunment.flogin.username.focus();
		return false;
	}
	if (docunment.flogin.password.value=="") 
	{
		alert('Please enter username');
		docunment.flogin.password.focus();
		return false;
	}
	return true;
}

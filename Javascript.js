function formValid()	//password matching
{
	var pass1= document.getElementById("newPassword").value;
	var pass2= document.getElementById("confirmPassword").value;
	
	if(pass1==pass2)
		return true;
	else
	{
		alert("Password do not match!");
		return false;
	}
	return false;
}

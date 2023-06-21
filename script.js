function validate() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if (username == "" || password == "") {
		alert("Please fill in all the fields");
		return false;
	}

	if (username != " " && password != " ") {
		alert("Login successful!");
		window.location.href = " "; // Redirect to dashboard page
		return true;
	} else {
		alert("Invalid username or password");
		return false;
	}
}
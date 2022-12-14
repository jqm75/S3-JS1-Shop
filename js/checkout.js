const validateEmail = (email) => {
	return String(email)
	  .toLowerCase()
	  .match(
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	  );
  };
const addClassError = (element, error) => {
	if(error){
		element.classList.add('is-invalid');
		
	}
	else{
		element.classList.remove('is-invalid');
		element.classList.add('is-valid');
	}
}
// Exercise 6
function validate() {
	let error = 0;
	// Get form
	let checkoutForm = document.getElementById("checkoutForm");

	// Get the input fields
	let fName = document.getElementById("fName");
	let fEmail = document.getElementById("fEmail");

	let fAddress = document.getElementById("fAddress");
	let fLastN = document.getElementById("fLastN");
	let fPassword = document.getElementById("fPassword");
	let fPhone = document.getElementById("fPhone");

	// Get the error elements
/* 	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");

	var errorAddress = document.getElementById("errorAddress");
	var errorLastN = document.getElementById("errorLastN");
	var errorPassword = document.getElementById("errorPassword");
	var errorPhone = document.getElementById("errorPhone");  */
	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value == "" || !fName.value.match(/^[A-Za-z\s]*$/) || fName.value.length < 3){
		addClassError(fName, true);
		error++;
	}
	else{
		addClassError(fName, false);
	}

	if(fEmail.value == "" || !validateEmail(fEmail.value) || fName.value.length < 3){
		addClassError(fEmail, true);
		error++;
	}
	else{
		addClassError(fEmail, false);
	}

	if(fAddress.value == "" || fAddress.value.length < 3){
		addClassError(fAddress, true);
		error++;
	}
	else{
		addClassError(fAddress, false);
	}

	if(fLastN.value == "" || !fLastN.value.match(/^[A-Za-z\s]*$/) || fLastN.value.length < 3){
		addClassError(fLastN, true);
		error++;
	}
	else{
		addClassError(fLastN, false);
	}

	if(fPassword.value == "" ||  !fPassword.value.match(/^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{3,8}$/) || fPassword.value.length < 3){
		addClassError(fPassword, true);
		error++;
	}
	else{
		addClassError(fPassword, false);
	}

	if(fPhone.value == "" || isNaN(fPhone.value) || fPhone.value.length != 9){
		addClassError(fPhone, true);
		error++;
	}
	else{
		addClassError(fPhone, false);
	}

	if(error>0){
		checkoutForm.addEventListener('submit', e => {
			e.preventDefault()
		}, true)
	}else{
		alert("OK");
	}
	
}
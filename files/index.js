const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', function(e){
	e.preventDefault();

	checkInputs();
});

function checkInputs(){
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if(usernameValue === '') {
		setErrorFor(username, 'Email cannot be empty');
	} else {
		setSuccessFor(username);
	}

  if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be empty');
	} else {
		setSuccessFor(password);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

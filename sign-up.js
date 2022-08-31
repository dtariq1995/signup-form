const form = document.querySelector('#form');
const email = document.querySelector('#user_email');
const pwd = document.querySelector('#user_password');
const cpwd = document.querySelector('#password_two');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // get values from inputs
    const emailValue = email.value.trim();
    const pwdValue = pwd.value.trim();
    const cpwdValue = cpwd.value.trim();

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }

    if (pwdValue === '') {
		setErrorFor(pwd, 'Password cannot be blank');
	} else {
		setSuccessFor(pwd);
	}

    if(cpwdValue === '') {
		setErrorFor(cpwd, 'Confirm Password cannot be blank');
	} else if(pwdValue !== cpwdValue) {
		setErrorFor(cpwd, 'Passwords do not match');
	} else{
		setSuccessFor(cpwd);
	}
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; 
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
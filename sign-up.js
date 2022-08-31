const form = document.querySelector('#form');
const email = document.querySelector('#user_email');
const pwd = document.querySelector('#user_password');
const cpwd = document.querySelector('#password_two');
const fname = document.querySelector('#first_name');
const lname = document.querySelector('#last_name');
const phone = document.querySelector('#phone');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // get values from inputs
    const emailValue = email.value.trim();
    const pwdValue = pwd.value.trim();
    const cpwdValue = cpwd.value.trim();
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const phoneValue = phone.value.trim();

    if (emailValue === '') {
        setErrorFor(email, 'Enter an email.');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid.');
    } else {
        setSuccessFor(email);
    }

    if (pwdValue === '') {
		setErrorFor(pwd, 'Password cannot be blank.');
	} else {
		setSuccessFor(pwd);
	}

    if (cpwdValue === '') {
		setErrorFor(cpwd, 'Confirm Password cannot be blank.');
	} else if(pwdValue !== cpwdValue) {
		setErrorFor(cpwd, 'Passwords do not match');
	} else {
		setSuccessFor(cpwd);
	}

    if (fnameValue === '') {
        setErrorFor(fname, 'Enter your first name.');
    } else {
        setSuccessFor(fname);
    }

    if (lnameValue === '') {
        setErrorFor(lname, 'Enter your last name.');
    } else {
        setSuccessFor(lname);
    }

    if (phoneValue === '') {
        setErrorFor(phone, 'Enter a phone number.');
    } else if (!isPhone(phoneValue)) {
        setErrorFor(phone, 'Enter a valid phone number.');
    } else {
        setSuccessFor(phone);
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

function isPhone(phone) {
    return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone);

}
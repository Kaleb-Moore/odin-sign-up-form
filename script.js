//get all the input fields and their values
let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let email = document.getElementById("email");
let phoneNumber = document.getElementById("phone-number");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");
let submit = document.getElementById("create-account");

//create a new paragraph element for each error message
let firstNameError = document.createElement('p');
let lastNameError = document.createElement('p');
let emailError = document.createElement('p');
let phoneError = document.createElement('p');
let passwordError = document.createElement('p');
let confirmPasswordError = document.createElement('p');

//Error message for elements above
let firstNameText = document.createTextNode("* Name can not have numbers");
let lastNameText = document.createTextNode("* Name can not have numbers")
let emailText = document.createTextNode("* Please enter a valid email address");
let phoneNumberText = document.createTextNode("* Please enter a valid phone number");
let passwordText = document.createTextNode("* Passwords must match");
let passwordText2 = document.createTextNode("* Passwords must match");

//Regular expressions for validation on name, email and phone number
const onlyLetters = new RegExp("^[a-zA-z-']+$");
const emailReg = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
const phoneNumberReg = new RegExp("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$");

//Event listener that hides or shows error message based on if it passes regex
firstName.addEventListener("keyup", (e) => {
    if (onlyLetters.test(e.target.value)){
        firstName.classList.add("valid");
        firstName.classList.remove("invalid");
        firstNameError.remove();
    } else if (e.target.value == "") {
        firstName.classList.remove("valid");
        firstName.classList.remove("invalid");
        firstNameError.remove();
    } else if(!(onlyLetters.test(e.target.value))) {
        firstName.classList.remove("valid");
        firstName.classList.add("invalid");
        firstNameError.appendChild(firstNameText);
        firstNameError.classList.add("error-text");
        firstName.parentElement.appendChild(firstNameError);
    } 
});

//Event listener that hides or shows error message based on if it passes regex
lastName.addEventListener("keyup", (e) => {
    if (onlyLetters.test(e.target.value)){
        lastName.classList.add("valid");
        lastName.classList.remove("invalid");
        lastNameError.remove();
    } else if (e.target.value == "") {
        lastName.classList.remove("valid");
        lastName.classList.remove("invalid");
        lastNameError.remove();
    } else if(!(onlyLetters.test(e.target.value))) {
        lastName.classList.remove("valid");
        lastName.classList.add("invalid");
        lastNameError.appendChild(lastNameText);
        lastNameError.classList.add("error-text");
        lastName.parentElement.appendChild(lastNameError);
    } 
});

//Event listener that hides or shows error message based on if it passes regex
//Happens after focusing on a new element
email.addEventListener("focusout", (e) => {
    if (emailReg.test(e.target.value)){
        email.classList.add("valid");
        email.classList.remove("invalid");
        emailError.remove();
    } else if (e.target.value == "") {
        email.classList.remove("valid");
        email.classList.remove("invalid");
        emailError.remove();
    } else if(!(emailReg.test(e.target.value))) {
        email.classList.remove("valid");
        email.classList.add("invalid");
        emailError.appendChild(emailText);
        emailError.classList.add("error-text");
        email.parentElement.appendChild(emailError);
    } 
});

//Event listener that hides or shows error message based on if it passes regex
//Happens after focusing on a new element
phoneNumber.addEventListener("focusout", (e) => {
    console.log('test');
    if (phoneNumberReg.test(e.target.value)){
        phoneNumber.classList.add("valid");
        phoneNumber.classList.remove("invalid");
        phoneError.remove();
    } else if (e.target.value == "") {
        phoneNumber.classList.remove("valid");
        phoneNumber.classList.remove("invalid");
        phoneError.remove();
    } else if(!(phoneNumberReg.test(e.target.value))) {
        phoneNumber.classList.remove("valid");
        phoneNumber.classList.add("invalid");
        phoneError.appendChild(phoneNumberText);
        phoneError.classList.add("error-text");
        phoneNumber.parentElement.appendChild(phoneError);
    } 
});

//Listens for the click event on button and checks if passwords match
//If passwords don't match, then it won't submit the form
submit.addEventListener('click', (e) => {

    if (password.value != confirmPassword.value){
        e.preventDefault();
        password.classList.add("invalid");
        confirmPassword.classList.add("invalid");

        passwordError.appendChild(passwordText);
        passwordError.classList.add("error-text");
        password.parentElement.appendChild(passwordError);
        
        confirmPasswordError.appendChild(passwordText2);
        confirmPasswordError.classList.add("error-text");
        confirmPassword.parentElement.appendChild(confirmPasswordError);
    }

});


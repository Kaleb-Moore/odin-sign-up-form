//get all the input fields and their values

let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let email = document.getElementById("email");
let phoneNumber = document.getElementById("phone-number");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm password");

let nameError = document.createElement('p');
let nameText = document.createTextNode("* Name can not have numbers or symbols");
let emailText = document.createTextNode("* Please enter a valid email address");
let phoneNumberText = document.createTextNode("* Please enter a valid phone number");

const onlyLetters = new RegExp("^[a-zA-z-']+$");
const emailReg = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
const phoneNumberReg = new RegExp("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$");

firstName.addEventListener("keyup", (e) => {
    if (onlyLetters.test(e.target.value)){
        firstName.classList.add("valid");
        firstName.classList.remove("invalid");
        nameError.remove();
    } else if (e.target.value == "") {
        firstName.classList.remove("valid");
        firstName.classList.remove("invalid");
        nameError.remove();
    } else if(!(onlyLetters.test(e.target.value))) {
        firstName.classList.remove("valid");
        firstName.classList.add("invalid");
        nameError.appendChild(nameText);
        nameError.classList.add("error-text");
        firstName.parentElement.appendChild(nameError);
    } 
});

lastName.addEventListener("keyup", (e) => {
    if (onlyLetters.test(e.target.value)){
        lastName.classList.add("valid");
        lastName.classList.remove("invalid");
        nameError.remove();
    } else if (e.target.value == "") {
        lastName.classList.remove("valid");
        lastName.classList.remove("invalid");
        nameError.remove();
    } else if(!(onlyLetters.test(e.target.value))) {
        lastName.classList.remove("valid");
        lastName.classList.add("invalid");
        nameError.appendChild(nameText);
        nameError.classList.add("error-text");
        lastName.parentElement.appendChild(nameError);
    } 
});

email.addEventListener("focusout", (e) => {
    if (emailReg.test(e.target.value)){
        email.classList.add("valid");
        email.classList.remove("invalid");
        nameError.remove();
    } else if (e.target.value == "") {
        email.classList.remove("valid");
        email.classList.remove("invalid");
        nameError.remove();
    } else if(!(emailReg.test(e.target.value))) {
        email.classList.remove("valid");
        email.classList.add("invalid");
        nameError.appendChild(emailText);
        nameError.classList.add("error-text");
        email.parentElement.appendChild(nameError);
    } 
});

phoneNumber.addEventListener("focusout", (e) => {
    console.log('test');
    if (phoneNumberReg.test(e.target.value)){
        phoneNumber.classList.add("valid");
        phoneNumber.classList.remove("invalid");
        nameError.remove();
    } else if (e.target.value == "") {
        phoneNumber.classList.remove("valid");
        phoneNumber.classList.remove("invalid");
        nameError.remove();
    } else if(!(phoneNumberReg.test(e.target.value))) {
        phoneNumber.classList.remove("valid");
        phoneNumber.classList.add("invalid");
        nameError.appendChild(phoneNumberText);
        nameError.classList.add("error-text");
        phoneNumber.parentElement.appendChild(nameError);
    } 
});
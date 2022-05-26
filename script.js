//get all the input fields and their values

let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let email = document.getElementById("email");
let phoneNumber = document.getElementById("phone-number");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm password");

let nameError = document.createElement('p');
let nameText = document.createTextNode("* Name can not have numbers or symbols");

const onlyLetters = new RegExp("^[a-zA-z]+$");

firstName.addEventListener("keyup", (e) => {
    
    console.log(e.target.value)
    console.log(onlyLetters.test(e.target.value))
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
})
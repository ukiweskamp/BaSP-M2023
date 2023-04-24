window.onload = function() {

console.log('hola')

// VARIABLES

var nameInput = document.getElementById('name');
var lastName = document.getElementById('lastname');
var id = document.getElementById('id')
var birthday = document.getElementById('birthday');
var phone = document.getElementById('phone');
var address = document.getElementById('address');
var locationInput = document.getElementById('location');
var zipCode = document.getElementById('zipcode');
var email = document.getElementById('email');
var password = document.getElementById('password');
var repeatPassword = document.getElementById('repeat-password');

// ERROR VALIDATIONS

var errorName = document.getElementById('error-name');
var errorLastName = document.getElementById('error-last-name');
var errorId = document.getElementById('error-id');
var errorBirthday = document.getElementById('error-birthday');
var errorPhone = document.getElementById('error-phone');
var errorAddress = document.getElementById('error-address');
var errorLocation = document.getElementById('error-location');
var errorZipCode = document.getElementById('error-zipcode');
var errorEmail = document.getElementById('error-email');
var errorPassword = document.getElementById('error-password');
var errorRepeatPassword = document.getElementById('error-repeat-password');

// Events
nameInput.addEventListener('blur', nameBlur);
nameInput.addEventListener('focus', nameFocus);
lastName.addEventListener('blur', lastNameBlur);
lastName.addEventListener('focus', lastNameFocus);
id.addEventListener('blur', idBlur);
id.addEventListener('focus', idFocus);
birthday.addEventListener('blur', birthdayBlur);
birthday.addEventListener('focus', birthdayFocus);
phone.addEventListener('blur', phoneBlur);
phone.addEventListener('focus', phoneFocus);
address.addEventListener('blur', addressBlur);
address.addEventListener('focus', addressFocus);
locationInput.addEventListener('blur', cityBlur);
locationInput.addEventListener('focus', cityFocus);
zipCode.addEventListener('blur', zipCodeBlur);
zipCode.addEventListener('focus', zipCodeFocus);
email.addEventListener('blur', emailBlur);
email.addEventListener('focus', emailFocus);
password.addEventListener('blur', passwordBlur);
password.addEventListener('focus', passwordFocus);
repeatPassword.addEventListener('blur', repeatPasswordBlur);
repeatPassword.addEventListener('focus', repeatPasswordFocus);

// FUNCTIONS
var arrayLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const arrayNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Name: Only Letters. 3 letters min.
function nameBlur() {
    var arrayLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    if(nameInput.value.length < 3 || nameInput.value == '') {
        nameInput.classList.add("error");
        errorName.innerHTML = '* Must contain at least 3 characters.';
        nameValidation = false;
    } else {
        for (let i = 0; i < nameInput.value.length; i++){
            var letter = nameInput.value[i];
            if(!arrayLetters.includes(letter.toLowerCase())){
                nameInput.classList.add("error");
                errorName.innerHTML = "* Can only contain letters";
                nameValidation = false;
            } else {
                errorName.innerHTML = " ";
                nameValidation = true;
            }
        }
    }
    return nameValidation;
}

function nameFocus(){
    errorName.innerHTML = " "
}

// Last Name: Only Letters. 3 letters min.
function lastNameBlur() {
    var arrayLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    if (lastName.value.length < 3 || lastName.value == '') {
        lastName.classList.add("error");
        errorLastName.innerHTML = "* Must contain at least 3 characters."
        lastNameValidation = false
    } else {
        for (let i = 0; i < lastName.value.length; i++){
            var letter = lastName.value[i];
            if(!arrayLetters.includes(letter.toLowerCase())){
                lastName.classList.add("error");
                errorLastName.innerHTML = "* Can only contain letters";
                lastNameValidation = false
            } else {
                errorLastName.innerHTML = " ";
                lastNameValidation = true;
            }
        }
    }
    return lastNameValidation
}

function lastNameFocus() {
    errorLastName.innerHTML = " ";
}

// ID: Numbers only. More than 7 numbers.
function idBlur(){
    if (id.value.length < 7 || id.value == ""){
        id.classList.add("error")
        errorId.innerHTML = "* Must contain more than 7 characters."
        idValidation = false;
    } else {
        if (isNaN(id.value)) {
            id.classList.add("error")
            errorId.innerHTML = "* Can only contain numbers";
            idValidation = false;
        } else {
            errorId.innerHTML = " ";
            idValidation = true;
        }
    }
    return idValidation;
}

function idFocus() {
    errorId.innerHTML = " ";
}

// Date of birth: dd/mm/yyyy. > 16 years.


function birthdayBlur(){
    var age = 0;
    var actualDay = new Date();
    var birthday1 = new Date(birthday.value);
    var years = actualDay.getFullYear() - birthday1.getFullYear();
    if (actualDay.getMonth() < birthday1.getMonth() || (actualDay.getMonth() === birthday1.getMonth() && actualDay.getDate() < birthday1.getDate())) {
    age = years - 1;
} else {
    age = years;
}
if (age <= 16){
    birthday.classList.add("error");
    errorBirthday.innerHTML = "* You must be over 16 years old.";
    birthdayValidation = false;
} else {
    errorBirthday.innerHTML = " ";
    birthdayValidation = true;
}
return birthdayValidation;
}

function birthdayFocus(){
    errorBirthday = '';
}

// Phone: Only Numbers. Must contains 10 numbers.

function phoneBlur() {
    if(phone.value.length !== 10 || phone.value == '' || isNaN(phone.value)){
        phone.classList.add("error");
        errorPhone.innerHTML = 'Must contain 10 characters and numbers only.';
        phoneValidation = false;
    } else {
        errorPhone.innerHTML = " "
        phoneValidation = true;
    }
    return phoneValidation
}

function phoneFocus() {
    errorPhone.innerHTML = '';
}

}
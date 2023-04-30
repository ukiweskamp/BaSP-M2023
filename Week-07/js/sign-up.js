window.onload = function() {

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

// FUNCTIONS
const arrayLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const arrayNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

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
locationInput.addEventListener('blur', locationBlur);
locationInput.addEventListener('focus', locationFocus);
zipCode.addEventListener('blur', zipCodeBlur);
zipCode.addEventListener('focus', zipCodeFocus);
email.addEventListener('blur', emailBlur);
email.addEventListener('focus', emailFocus);
password.addEventListener('blur', passwordBlur);
password.addEventListener('focus', passwordFocus);
repeatPassword.addEventListener('blur', repeatPasswordBlur);
repeatPassword.addEventListener('focus', repeatPasswordFocus);

// Validation variables
var nameValidation = false;
var lastNameValidation = false;
var idValidation = false;
var birthdayValidation = false;
var phoneValidation = false;
var addressValidation = false;
var locationValidation = false;
var zipcodeValidation = false;
var emailValidation = false;
var passwordValidation = false;
var repeatPasswordValidation = false;


// Name: Only Letters. 3 letters min.
function nameBlur() {
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

// Birthday: dd/mm/yyyy. > 16 years.


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
if (age <= 16 || birthday.value == ""){
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
    errorBirthday.innerHTML = ' ';
}

// Phone: Only Numbers. Must contains 10 numbers.

function phoneBlur() {
    if(phone.value.length !== 10 || phone.value == '' || isNaN(phone.value)){
        phone.classList.add("error");
        errorPhone.innerHTML = '* Must contain 10 characters and numbers only.';
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

// Address: At least 5 characters. Must contain letters and numbers with a space between.

function addressBlur() {
    var containsLetters = false;
    var containsNumbers = false;
    if (address.value.length < 5 || address.value === "") {
        address.classList.add("error");
        errorAddress.innerHTML = '* At least 5 characters.';
        addressValidation = false;
    } else {
      const spaceCount = address.value.split(' ').length - 1; // contar espacios
      const containsOneSpace = spaceCount === 1; // verificar si hay un solo espacio
        for (let i = 0; i < address.value.length; i++) {
        const reading = address.value[i];
        if (arrayLetters.includes(reading.toLowerCase())) {
            containsLetters = true;
        } if (arrayNumbers.includes(reading)) {
            containsNumbers = true;
        }
        if (containsLetters && containsNumbers && containsOneSpace) {
            errorAddress.innerHTML = '';
            addressValidation = true;
        } else {
            address.classList.add("error");
            errorAddress.innerHTML = '* Must contain letters and numbers separated by a single space.';
            addressValidation = false;
        }
    }
    }
    return addressValidation;
}

function addressFocus() {
    errorAddress.innerHTML = '';
}

// Location: Alphanumeric text. At least 3 letters.

function locationBlur () {
    var containsLetter = false;
    if(locationInput.value.length < 5 || locationInput == ""){
        locationInput.classList.add("error");
        errorLocation.innerHTML = "* Must contain at least 5 characters.";
        locationValidation = false
    } else {
        for (let i = 0; i < locationInput.value.length; i++) {
            const reading = locationInput.value[i];
            if(arrayLetters.includes(reading.toLowerCase())){
                containsLetter = true
            }
            if (containsLetter) {
                errorLocation.innerHTML = "";
                locationValidation = true;
            }
            else {
                locationInput.classList.add("error");
                errorLocation.innerHTML = "* Must contain letters";
                locationValidation = false;
            }
        }
    }
    return locationValidation;
}

function locationFocus() {
    errorLocation.innerHTML = '';
}

// Zipcode: Numbers only. Must contain between 4 and 5 characters.

function zipCodeBlur(){
    if(zipCode.value.length < 4 || zipCode.value.length > 5 || zipCode.value == ""){
        zipCode.classList.add("error");
        errorZipCode.innerHTML = "* Must contain between 4 and 5 characters."
        zipcodeValidation = false;
    } else {
        if (isNaN(zipCode.value)) {
            zipCode.classList.add("error");
            errorZipCode.innerHTML = "Can only contains numbers."
            zipcodeValidation = false;
        } else {
            errorZipCode.innerHTML = "";
            zipcodeValidation = true;
        }
    }
    return zipcodeValidation;
}

function zipCodeFocus() {
    errorZipCode.innerHTML = '';
}

// Email: RegEx

function emailBlur() {
    if(emailExpression.test(email.value)) {
        emailValidation = true;
    } else {
        email.classList.add("error");
        errorEmail.innerHTML = '* Please, enter a valid email.';
        emailValidation = false;
    }
    return emailValidation;
}

function emailFocus(){
    errorEmail.innerHTML = ' ';
}

// Password: At least 8 characters. Must contain numbers and letters.

function passwordBlur() {
    var containsLetters = false;
    var containsNumbers = false;
    if (password.value.length < 8 || password.value.indexOf(' ') !== -1) {
        password.classList.add("error");
        errorPassword.innerHTML = '* Enter at least 8 characters.';
        return passwordValidation;
    } else {
        for (let i = 0; i < password.value.length; i++) {
            var letter = password.value[i];
            if (arrayLetters.includes(letter.toLowerCase())){
                containsLetters = true;
            }
            if (arrayNumbers.includes(letter)) {
                containsNumbers = true;
            }
            if (containsLetters && containsNumbers) {
                errorPassword.innerHTML = " ";
                passwordValidation = true;
            } else {
                errorPassword.classList.add("error");
                errorPassword.innerHTML = '* Password must contain numbers and letters.';
                passwordValidation = false;
            }
        }
    }
    return passwordValidation;
}
function passwordFocus() {
    errorPassword.innerHTML = ' ';
}

function repeatPasswordBlur() {
    if (repeatPassword.value !== password.value || repeatPassword.value == ""){
        repeatPassword.classList.add("error");
        errorRepeatPassword.innerHTML = "* Password must coincide.";
        repeatPasswordValidation = false;
    } else {
        errorRepeatPassword.innerHTML = "";
        repeatPasswordValidation = true;
    }
    return repeatPasswordValidation
}

function repeatPasswordFocus() {
    errorRepeatPassword.innerHTML = ' ';
}

// convert date
function getFormattedDate(birthday) {
    let year = birthday.getFullYear();
    let month = (1 + birthday.getMonth()).toString().padStart(2, '0');
    let day = birthday.getDate().toString().padStart(2, '0');

    return month + '/' + day + '/' + year;
}


// Modal
var modal = document.getElementById('modal');
var modalClose = document.getElementById('close');
var pModal = document.getElementById('p-modal');

modalClose.addEventListener('click', closeModal);

function closeModal() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}


// Button validation
var submitButton = document.getElementById('submit');
submitButton.addEventListener('click', submitEvent);

function submitEvent() {
    var url = 'https://api-rest-server.vercel.app/signup';
    var queryParams =
        "?name=" + encodeURIComponent (nameInput.value) +
        '&lastName=' + encodeURIComponent (lastName.value) +
        '&dni=' + encodeURIComponent (parseInt(id.value)) +
        '&dob=' + encodeURIComponent(getFormattedDate(new Date(birthday.value))) +
        '&phone=' + encodeURIComponent (parseInt(phone.value)) +
        '&address=' + encodeURIComponent (address.value) +
        '&city=' + encodeURIComponent (locationInput.value) +
        '&zip=' + encodeURIComponent (parseInt(zipCode.value)) +
        '&email=' + encodeURIComponent (email.value) +
        '&password=' + encodeURIComponent (password.value) +
        '&repeatPassword=' + encodeURIComponent (repeatPassword.value);
    if (
        nameBlur() &&
        lastNameBlur() &&
        idBlur() &&
        birthdayBlur() &&
        phoneBlur() &&
        addressBlur() &&
        locationBlur() &&
        zipCodeBlur() &&
        emailBlur() &&
        passwordBlur() &&
        repeatPasswordBlur()
        ){
    fetch (url + queryParams, {
            method: 'GET'
    })
        .then(response => response.json())
        .then(data => {
            if(data.success) {
                localStorage.setItem('name', nameInput.value);
                localStorage.setItem('lastName', lastName.value);
                localStorage.setItem('id', id.value);
                localStorage.setItem('birthday', birthday.value);
                localStorage.setItem('phone number', phone.value);
                localStorage.setItem('address', address.value);
                localStorage.setItem('location', locationInput.value);
                localStorage.setItem('zipCode', zipCode.value);
                localStorage.setItem('email', email.value);
                localStorage.setItem('password', password.value);
                localStorage.setItem('repeat pasword', repeatPassword.value);
                modal.style.display = 'flex';
                pModal.innerText =
                data.msg + ':\n' +
                'Name: ' + nameInput.value + '\n' +
                'Lastname: ' + lastName.value + '\n' +
                'ID: ' + id.value + '\n' +
                'Birthday: ' + birthday.value + '\n' +
                'Phone Number: ' + phone.value + '\n' +
                'Address: ' + address.value + '\n' +
                'Location: ' + locationInput.value + '\n' +
                'Zipcode: ' + zipCode.value + '\n' +
                'Email: ' + email.value + '\n' +
                'Password: ' + password.value + '\n' +
                'Repeat Password: ' + repeatPassword.value + '\n' +
                'Please, confirm.';
                submitButton.setAttribute('href', "../views/index.html")
            } else {
                modal.style.display = 'flex';
                pModal.innerText = data.msg;
            }
        })
        .catch(error => console.error(error));
    } else {
        nameBlur();
        lastNameBlur();
        idBlur();
        birthdayBlur();
        phoneBlur();
        addressBlur();
        locationBlur();
        zipCodeBlur();
        emailBlur();
        passwordBlur();
        repeatPasswordBlur();
        modal.style.display = 'flex';
        pModal.innerText = 'Please, check you information is correct.';
    }
};

}


window.onload = function() {

// VARIABLES

var nameInput = document.getElementById('name');
var lastName = document.getElementById('lname');
var email = document.getElementById('email');
var contactReason = document.getElementById('contact');
var message = document.getElementById('message');

// ERROR VALIDATIONS

var errorName = document.getElementById('error-name');
var errorLastName = document.getElementById('error-last-name');
var errorEmail = document.getElementById('error-email');
var errorContactReason = document.getElementById('error-contact-reason');
var errorMessage = document.getElementById('error-message');

// FUNCTIONS
const arrayLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const arrayNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

// Events
nameInput.addEventListener('blur', nameBlur);
nameInput.addEventListener('focus', nameFocus);
lastName.addEventListener('blur', lastNameBlur);
lastName.addEventListener('focus', lastNameFocus);
email.addEventListener('blur', emailBlur);
email.addEventListener('focus', emailFocus);
contactReason.addEventListener('blur', contactReasonBlur);
contactReason.addEventListener('focus', contactReasonFocus);
message.addEventListener('blur', messageBlur);
message.addEventListener('focus', messageFocus);


// Validation variables
var nameValidation = false;
var lastNameValidation = false;
var emailValidation = false;
var contactReasonValidation = false;
var messageValidation = false;

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

// Contact reason: not null

function contactReasonBlur() {
    if(contactReason.value == ""){
        contactReason.classList.add("error");
        errorContactReason.innerHTML = "* Please, choice one option";
        contactReasonValidation = false;
    } else {
        errorContactReason.innerHTML = "";
        contactReasonValidation = true;
    }
    return contactReasonValidation;
}

function contactReasonFocus(){
    errorEmail.innerHTML = ' ';
}

// Message text area: More than 10 characters

function messageBlur () {
    var containsLetter = false;
    if(message.value.length < 10 || message.value == ""){
        message.classList.add("error");
        errorMessage.innerHTML = "* Must contain at least 10 characters";
        messageValidation = false;
    } else {
        for (let i = 0; i < message.value.length; i++) {
            const reading = message.value[i];
            if(arrayLetters.includes(reading.toLowerCase())){
                containsLetter = true
            }
        }
        if (containsLetter) {
            errorMessage.innerHTML = "";
            messageValidation = true;
        }
        else {
            message.classList.add("error");message.classList.add("error");
            errorMessage.innerHTML = "* Must contain letters";
            messageValidation = false;
        }
    }
    return messageValidation;
}
function messageFocus(){
    errorMessage.innerHTML = ' ';
    message.classList.remove("error");
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
var submitButton = document.getElementById('button-send-it');
submitButton.addEventListener('click', submitEvent);
function submitEvent() {
    if (
        nameBlur() &&
        lastNameBlur() &&
        emailBlur() &&
        contactReasonBlur() &&
        messageBlur() )
        {
            modal.style.display = 'flex';
            pModal.innerText = 'Message send!' + '\n'
            + 'Name: ' + nameInput.value + '\n'
            + 'Last name: ' + lastName.value + '\n'
            + 'Email: ' + email.value + '\n'
            + 'Contact Reason: ' + contactReason.value + '\n'
            + 'Message: ' + message.value + '\n';
        } else {
            modal.style.display = 'flex';
            pModal.innerText =('Please check your information is correct.');
    }
}



function clearFields() {
    document.querySelectorAll('input, textarea').forEach(input => input.value = '');
    document.getElementById('message').value = '';
}
document.getElementById('button-clear').addEventListener('click', clearFields);
}



// Email validation
var inputEmail = document.getElementById('email');
var errorEmail = document.getElementById('error-email');
inputEmail.addEventListener("blur", emailBlur);
inputEmail.addEventListener("focus", emailFocus);

// Password validation
var inputPassword = document.getElementById('password');
var errorPassword = document.getElementById('error-password');
inputPassword.addEventListener("blur", passwordBlur);
inputPassword.addEventListener("focus", passwordFocus);


//FUNCTIONS
//Email validation
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
function emailBlur() {
    var emailValidate = false;
    if(emailExpression.test(inputEmail.value)) {
        emailValidate = true;
    } else {
        inputEmail.classList.add("error");
        errorEmail.innerHTML = '* Please, enter a valid email.';
        emailValidate = false;
    }
    return emailValidate;
}

function emailFocus(){
    errorEmail.innerHTML = ' ';
}

//Password validation
const arrayLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const arrayNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function passwordBlur() {
    var passwordValidate = false;
    var containsLetters = false;
    var containsNumbers = false;
    if (inputPassword.value.length < 8 || inputPassword.value.indexOf(' ') !== -1) {
        inputPassword.classList.add("error");
        errorPassword.innerHTML = '* Enter at least 8 characters.';
        return passwordValidate;
    } else {
        for (let i = 0; i < inputPassword.value.length; i++) {
            var letter = inputPassword.value[i];
            if (arrayLetters.includes(letter.toLowerCase())){
                containsLetters = true;
            }
            if (arrayNumbers.includes(letter)) {
                containsNumbers = true;
            }
            if (containsLetters && containsNumbers) {
                errorPassword.innerHTML = " ";
                passwordValidate = true;
            } else {
                errorPassword.classList.add("error");
                errorPassword.innerHTML = '* Password have to contain numbers and letters only.';
                passwordValidate = false;
            }
        }
    }
    return passwordValidate;
}
function passwordFocus() {
    errorPassword.innerHTML = ' ';
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
var url = 'https://api-rest-server.vercel.app/login';
var queryParams = "?email=" + encodeURIComponent (inputEmail.value) +
                    '&password=' + encodeURIComponent (inputPassword.value)
    if (emailBlur() && passwordBlur()) {
    fetch (url + queryParams, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    modal.style.display = 'flex';
                    pModal.innerText = data.msg + ':' + '\n' + 'Email: ' + inputEmail.value + '\n' + 'Password: ' + inputPassword.value + '.';
                    submitButton.setAttribute('href', "../views/index.html")
                } else {
                    modal.style.display = 'flex';
                    pModal.innerText = data.msg;
                }
            })
            .catch(error => console.error(error));
    } else {
        emailBlur();
        passwordBlur();
        modal.style.display = 'flex';
        pModal.innerText = 'Ooops! Something went wrong.' + '\n' + 'Please verify login information.';
    }
};
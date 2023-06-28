var fullNameInput = document.getElementById('fullName');
var emailInput = document.getElementById('email');
var ageInput = document.getElementById('age');
var phoneInput = document.getElementById('phone');
var addressInput = document.getElementById('address');
var cityInput = document.getElementById('city');
var postalCodeInput = document.getElementById('postalCode');
var idNumberInput = document.getElementById('idNumber');
var passwordInput = document.getElementById('password');
var confirmPasswordInput = document.getElementById('confirmPassword');

fullNameInput.addEventListener("blur", function () {
    var error = document.getElementById("fullNameError");

    if (fullNameInput.value.length > 6) {
        error.style.display = "none";
    } else {
        error.style.display = "block";
        error.textContent = "Debe tener más de 6 letras y al menos un espacio entre medio..";
    };
})

emailInput.addEventListener("blur", function () {
    var error = document.getElementById("emailError");

    if (emailInput.value.includes("@")) {
        error.style.display = "none"
    } else {
        error.style.display = "block"
        error.textContent = "Debe tener un formato de email válido.."
    }
})

ageInput.addEventListener("blur", function () {
    var error = document.getElementById("ageError");

    if (ageInput.value >= 18) {
        error.style.display = "none";
    } else {
        error.style.display = "block";
        error.textContent = "Número entero mayor o igual a 18.."
    }
})

phoneInput.addEventListener("blur", function () {
    var error = document.getElementById("phoneError");

    if (phoneInput.value.length >= 7 && !phoneInput.value.includes(" ") && !phoneInput.value.includes("-")) {
        error.style.display = "none";
    } else {
        error.style.display = "block";
        error.textContent = "Número de al menos 7 dígitos, no aceptar espacios, guiones ni paréntesis."
    }
})

passwordInput.addEventListener("blur", function () {
    var error = document.getElementById("ageError");

    if (passwordInput.value.length > 8 && /^[a-zA-Z0-9]{8,}$/.test(passwordInput.value)) {
        error.style.display = "none";
    } else {
        error.style.display = "block";
        error.textContent = "Al menos 8 caracteres, formados por letras y números.."
    }
})




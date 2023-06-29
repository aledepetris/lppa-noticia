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
var formulario = document.getElementById('registrationForm')

fullNameInput.addEventListener("blur", function () {
    var error = document.getElementById("fullNameError");

    if (fullNameInput.value.length > 6 && fullNameInput.value.includes(" ")) {
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

addressInput.addEventListener("blur", function () {
    var error = document.getElementById("addressError");

    if (fullNameInput.value.length > 4 && fullNameInput.value.includes(" ")) {
        error.style.display = "none";
    } else {
        error.style.display = "block";
        error.textContent = "Al menos 5 caracteres, con letras, números y un espacio en el medio."
    }
})

cityInput.addEventListener("blur", function () {
    var error = document.getElementById("cityError");

    if (cityInput.value.length > 3) {
        error.style.display = "none";
    } else {
        error.style.display = "block";
        error.textContent = "La dirección debe tener al menos 3 caracteres."
    }
})

postalCodeInput.addEventListener("blur", function () {
    var error = document.getElementById("postalCodeError");

    if (postalCodeInput.value.length > 3) {
        error.style.display = "none";
    } else {
        error.style.display = "block";
        error.textContent = "La dirección debe tener al menos 3 caracteres."
    }
})

idNumberInput.addEventListener("blur", function () {
    var error = document.getElementById("idNumberError");

    if (idNumberInput.value.length > 6 && idNumberInput.value.length < 9) {
        error.style.display = "none";
    } else {
        error.style.display = "block";
        error.textContent = "DNI debe tener 7 u 8 caracteres."
    }
})

passwordInput.addEventListener("blur", function () {
    var error = document.getElementById("passwordError");

    if (passwordInput.value.length > 8 && /^[a-zA-Z0-9]{8,}$/.test(passwordInput.value)) {
        error.style.display = "none";
    } else {
        error.style.display = "block";
        error.textContent = "Al menos 8 caracteres, formados por letras y números.."
    }
})

confirmPasswordInput.addEventListener("blur", function () {
    var error = document.getElementById("confirmPasswordError");

    if (confirmPasswordInput.value.length > 8 && /^[a-zA-Z0-9]{8,}$/.test(confirmPasswordInput.value)) {
        error.style.display = "none";
    } else {
        error.style.display = "block";
        error.textContent = "Al menos 8 caracteres, formados por letras y números.."
    }
})

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    var fullName = fullNameInput.value;
    var email = emailInput.value;
    var age = parseInt(ageInput.value);
    var phone = parseInt(phoneInput.value);
    var address = addressInput.value;
    var city = cityInput.value;
    var postalCode = parseInt(postalCodeInput.value);
    var idNumber = parseInt(idNumberInput.value);
    var password = passwordInput.value;
    var confirmPassword = confirmPasswordInput.value;

    if (fullName === '' || email === '' || age <= 0 || phone <= 0 || address === '' ||
        city === '' || postalCode <= 0 || idNumber <= 0 || password === '' ||
        confirmPassword === '') {
        alert('Por favor, complete todos los campos correctamente antes de enviar el formulario.');
    } else if (passwordInput != confirmPasswordInput) {
        alert('Los passwords no coinciden');
    } else {
        var mensaje = 'Se envían los datos confirmados:\n\n';
        mensaje += 'Nombre: ' + fullName + '\n';
        mensaje += 'Email: ' + email + '\n';
        mensaje += 'Edad: ' + age + '\n';
        mensaje += 'Teléfono: ' + phone + '\n';
        mensaje += 'Dirección: ' + address + '\n';
        mensaje += 'Ciudad: ' + city + '\n';
        mensaje += 'Código Postal: ' + postalCode + '\n';
        mensaje += 'DNI: ' + idNumber + '\n';
    
        alert(mensaje);
    }
});


// CARDHOLDER NAME
let nameCard = document.querySelector('.card_details-name');
let nameInput = document.querySelector('#cardholder');
let nameErrorDiv = document.querySelector('.form__cardholder--error');

// CARD NUMBER
let numberCard = document.querySelector('.card_number');
let numberInput = document.querySelector('#cardnumber');
let numberErrorDiv = document.querySelector('.form__inputnumber--error');


// Ingreso dinamico del nombre
nameInput.addEventListener('input', () => {
    if (nameInput.value === '') {
        nameCard.innerText = 'JANE APPLESEED'
    } else {
        nameCard.innerText = nameInput.value;
    }
});

// Ingreso dinamico del numero  //cuando tenga un true (que seria si hay una letra) me va a largar el error
numberInput.addEventListener('input', event => {

    let inputValue = event.target.value;

    // Actualizando graficamente la tarjeta
    numberCard.innerText = numberInput.value;

    //Validando que haya una letra
    let regExp = /[A-z]/g;
    if (regExp.test(numberInput.value)) {
        showError(numberInput, numberErrorDiv, 'Wrong format, numbers only')
    } else {
        //agregando espacios cada 4 digitos, borrando espacios ingresados por el usuario y borrando el espacio final(con trim)
        numberInput.value = inputValue.replace(/\s/g, '').replace(/([0-9]{4})/g, '$1 ').trim();
        hideError(numberInput, numberErrorDiv);
    }

    // Mostrando los 0 por defecto cuando no se ha ingresado nada
    if (numberInput.value === '') {
        numberCard.innerText = '0000 0000 0000 0000';
    }
});

function showError(divInput, divError, msgError) {
    divError.innerText = msgError;
    divInput.style.borderColor = 'hsl(0, 100%, 66%)';
}

function hideError(divInput, divError) {
    divError.innerText = '';
    divInput.style.borderColor = 'hsl(270, 3%, 87%)';
}
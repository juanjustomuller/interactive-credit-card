const inputName = document.querySelector("#cardholder");
const inputNumber = document.querySelector("#cardnumber");
const inputMonth = document.querySelector("#cardmonth");
const inputYear = document.querySelector("#cardyears");
const inputCvc = document.querySelector("#cardCvc");
const cardNumber = document.querySelector(".card_number");
const cardName = document.querySelector(".card_details-name");
const cardMonth = document.querySelector(".card_month");
const cardYear = document.querySelector(".card_year");
const cardCVC = document.querySelector(".card-back__cvc");
const form = document.querySelector(".form");
const thankYou = document.querySelector("#thank-you");
const continueBtn = document.querySelector(".thanks-section__btn");

inputName.addEventListener("input", () => {
    cardName.innerText = inputName.value;

    if(inputName.value.length === 0){
        cardName.innerHTML = 'JANE APPLESEED';
    }
})

var cleave = new Cleave('#cardnumber', {
    creditCard: true,
});

inputNumber.addEventListener("input", () => {
    cardNumber.innerText = inputNumber.value;

    if(inputNumber.value.length === 0){
        cardNumber.innerHTML = '0000 0000 0000 0000';
    }
})

inputMonth.addEventListener("input", () => {
    cardMonth.innerText = inputMonth.value;

    if(inputMonth.value.length === 0){
        cardMonth.innerHTML = '00';
    }
})

inputYear.addEventListener("input", () => {
    cardYear.innerText = inputYear.value;

    if(inputYear.value.length === 0){
        cardYear.innerHTML = '00';
    }
})

inputCvc.addEventListener("input", () => {
    cardCVC.innerText = inputCvc.value;

    if(inputCvc.value.length === 0){
        cardCVC.innerHTML = '000';
    }
})

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    form.classList.add("disabled");
    thankYou.classList.remove("disabled");
})

continueBtn.addEventListener("click", () => {
    form.classList.remove("disabled");
    thankYou.classList.add("disabled");
    form.reset();
    cardName.innerHTML = 'JANE APPLESEED';
    cardNumber.innerHTML = '0000 0000 0000 0000';
    cardMonth.innerHTML = '00';
    cardYear.innerHTML = '00';
    cardCVC.innerHTML = '000';
})




















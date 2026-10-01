const start = document.getElementById("start");

start.addEventListener("click", function(){
    start.textContent = "transition";
});

const explore = document.getElementById("explore");

explore.addEventListener("click", function(){
    explore.textContent = "exploring...";
});

const firstc = document.getElementById("firstc");

firstc.addEventListener("click", function(){
    firstc.textContent = "Buying...";
});

const secondc = document.getElementById("secondc");

secondc.addEventListener("click", function(){
    secondc.textContent = "Buying...";
});

const firstButton = document.getElementById("firstc");
const secondButton = document.getElementById("secondc");

const creditDebitPopup = document.getElementById("creditDebitPopup");
const debitPopup = document.getElementById("debitPopup");

const closeCreditDebit = document.getElementById("closeCreditDebit");
const closeDebit = document.getElementById("closeDebit");

firstButton.addEventListener("click", () => {
    creditDebitPopup.classList.add("active");
});

secondButton.addEventListener("click", () => {
    debitPopup.classList.add("active");
});

closeCreditDebit.addEventListener("click", () => {
    creditDebitPopup.classList.remove("active");
});

closeDebit.addEventListener("click", () => {
    debitPopup.classList.remove("active");
});

creditDebitPopup.addEventListener("click", (event) => {
    if (event.target === creditDebitPopup) {
        creditDebitPopup.classList.remove("active");
    }
});

debitPopup.addEventListener("click", (event) => {
    if (event.target === debitPopup) {
        debitPopup.classList.remove("active");
    }
});

const pay = document.getElementById("pay");

pay.addEventListener("click", function(){
    pay.textContent = "Payed!";
});

const pay2 = document.getElementById("pay2");

pay2.addEventListener("click", function(){
    pay2.textContent = "Payed!";
});

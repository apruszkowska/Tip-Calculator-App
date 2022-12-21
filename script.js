const billInput = document.querySelector(".bill-input");
const peopleInput = document.querySelector(".people-input");
const tipPerPerson = document.getElementById("tip-amount");
const totalPerPerson = document.getElementById("total-amount");
const tips = document.querySelectorAll(".tips");
const tipCustom = document.querySelector(".tip-custom");
const reset = document.querySelector(".reset");
const error = document.querySelector(".error");


billInput.addEventListener("input", billInputFunction);
peopleInput.addEventListener("input", peopleInputFunction);
tips.forEach(function(value){
    value.addEventListener('click', handleClick);
})
tipCustom.addEventListener("input", tipCustomInputFunction)
reset.addEventListener("click", resetFunction);



billInput.value = "0.0";
peopleInput.value = "1";
tipPerPerson.innerHTML = "$" + (0.0).toFixed(2);
totalPerPerson.innerHTML = "$" + (0.0).toFixed(2);

let billValue = 0.0;
let peopleValue = 1;

function billInputFunction(){
    billValue = parseFloat(billInput.value);
    result();
}


function peopleInputFunction(){
    peopleValue = parseFloat(peopleInput.value);
    

    // can't be zero
    if(peopleValue < 1){
        error.style.display = "flex";
        peopleInput.style.border = "thick solid red"
    }else{
        error.style.display = "none";
        peopleInput.style.border = "none"
        result();
    }
}

function handleClick(event){
    tips.forEach(function(value){
        value.classList.remove("tip-active");
 
        if(event.target.innerHTML === value.innerHTML){
            value.classList.add("tip-active");
            tipValue = parseFloat(value.innerHTML) / 100;
        }
    });
    result();
}

function result(){
    if(peopleValue >= 1){
        let tipAmount = (billValue * tipValue) / peopleValue;
        let total = (billValue + tipAmount) / peopleValue;
        tipPerPerson.innerHTML = "$" + tipAmount.toFixed(2);
        totalPerPerson.innerHTML = "$" + total.toFixed(2);
    }

}

function tipCustomInputFunction(){
    tipValue = parseFloat(tipCustom.value / 100);
    
    tips.forEach(function(value){
        value.classList.remove("tip-active");
    });
    result();
}

function resetFunction(){
    billInput.value = "0.0"
    billInputFunction();
    peopleInput.value = "1"
    peopleInputFunction();
    tipCustom.value = "";

}

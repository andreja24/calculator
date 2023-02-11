let firstNumber=prompt("Enter your first number");
let secondNumber=prompt("Enter your second number");
let operator = prompt("Enter an operator (+, -, *, /):");
let leftDisplay = document.querySelector(".left-display");

function add(a, b){
    return Number(a)+Number(b);
}
function subtract(a, b){
    return Number(a)-Number(b);
}
function multiply(a, b){
    return (a)*Number(b);
}
function divide(a, b){
    return Number(a)/Number(b);
}

function operate(operator, a, b){
    switch(operator){
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return divide(a,b);
    }
}

 // console.log(operate(operator,firstNumber,secondNumber));



function display_numbers() {
    const NumberButtons = document.querySelectorAll(".num-button");
  
    NumberButtons.forEach(function(button) {
      button.addEventListener("click", function() {
       // let valueOfNumberButton = this.innerHTML;
       leftDisplay.innerHTML = button.innerHTML;
        
      });
    });
  }

display_numbers();
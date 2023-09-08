

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function division(a, b){
    return a / b;
}

const operate = function (operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return division(a, b);
        default:
            return 'Invalid operator';
    }
}

let firstNumber = null;
let secondNumber = null;
let operator = null;
let isOperatorClicked = false;

const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const timesButton = document.getElementById("multiply");
const divButton = document.getElementById("divide");
const equalsButton = document.getElementById("equals");
const clearButton = document.getElementById("clear");
const decimalButton = document.getElementById("decimal")

function handleOperatorClick(op) {
    if(firstNumber !== null && secondNumber !== null && operator) {
        firstNumber = operate(operator, firstNumber, secondNumber);
        secondNumber = null;
    }

    operator = op;
    isOperatorClicked = true;
}

addButton.addEventListener("click", function() { handleOperatorClick('+');
console.log("+") });
subtractButton.addEventListener("click", function() { handleOperatorClick('-'); 
console.log("-")});
timesButton.addEventListener("click", function() { handleOperatorClick('*');
console.log("*") });
divButton.addEventListener("click", function() { handleOperatorClick('/'); 
console.log("/")});

clearButton.addEventListener("click", function() {
    firstNumber = null;
    secondNumber = null;
    operator = null;
    console.log("All clear!");
});

for(let i = 0; i <= 9; i++) {
    document.getElementById(i.toString()).addEventListener("click", function() {
        if (isOperatorClicked) {
            secondNumber = i;
            console.log("Second number is now:", secondNumber);
        } else {
            firstNumber = i;
            console.log("First number is now:", firstNumber);
        }
    });
}

equalsButton.addEventListener("click", function() {
    if (firstNumber !== null && secondNumber !== null && operator !== null) {
        const result = operate(operator, firstNumber, secondNumber);
        console.log("Result", result);
        firstNumber = result;
        secondNumber = null;
        operator = null;
        console.log("equals");
    }
});

decimalButton.addEventListener("click", function(){
    if (isOperatorClicked){
        if (secondNumber !== null && typeof secondNumber === "number")
        secondNumber = secondNumber.toString();
    }
    if(secondNumber === null){
        secondNumber = "0.";
    } else if (!secondNumber.includes('.')){
        secondNumber += '.'
    } else {
        if (firstNumber !== null && typeof firstNumber === "number"){
            firstNumber = firstNumber.toString();
        }
        if (firstNumber === null){
            firstNumber = 0;
        } else if (!firstNumber.includes('.')){
            firstNumber += '.'
        }
    }
})
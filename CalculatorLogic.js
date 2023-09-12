let isNewCalculation = true;
let previousInput = "";

document.addEventListener("DOMContentLoaded", function(){

    
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
        a = parseFloat(a);
        b = parseFloat(b);
        
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
            
            console.log("First Number:", firstNumber);
            console.log("Second Number:", secondNumber);
            console.log("Operator:", operator);
            
            
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

function updatePreviousInputDisplay(value) {
    document.getElementById(previousOperationScreen).innerText = value
}

addButton.addEventListener("click", function() { handleOperatorClick('+');
console.log("+") });
subtractButton.addEventListener("click", function() { handleOperatorClick('-'); 
console.log("-")});
timesButton.addEventListener("click", function() { handleOperatorClick('*');
console.log("*") });
divButton.addEventListener("click", function() { handleOperatorClick('/'); 
console.log("/")});



function handleOperationClick(op){
    previousInput += " " + op + " ";
    updatePreviousInputDisplay:(previousInput)
}

for(let i = 0; i <= 9; i++) {
    document.getElementById(i.toString()).addEventListener("click", function() {
        
if(isNewCalculation){
    firstNumber = null;
    secondNumber = null;
    operator = null;
    isNewCalculation = false;
    isOperatorClicked = false;
}


if (isOperatorClicked) {
            secondNumber = (secondNumber !== null) ? secondNumber.toString() + i.toString() : i.toString();
            console.log("Second number is now:", secondNumber);
            updateDisplay(secondNumber);
            // go back and review this code from when it was just equal to "i"
        } else {
            firstNumber = (firstNumber !== null) ? firstNumber.toString() + i.toString() : i.toString();
            console.log("First number is now:", firstNumber);
            updateDisplay(firstNumber);
        }
        previousInput += i.toString();
        updatePreviousInputDisplay(previousInput);
    });
    
    
}

equalsButton.addEventListener("click", function() {
    previousInput = "";
    updatePreviousInputDisplay(previousInput);
    
    if (firstNumber !== null && secondNumber !== null && operator !== null) {
        const result = operate(operator, firstNumber, secondNumber);
        console.log("Result", result);
        updateDisplay(result);
        firstNumber = result;
        secondNumber = null;
        operator = null;
        isNewCalculation = true;
        console.log("equals");
    }
});

clearButton.addEventListener("click", function() {
previousInput = "";
updatePreviousInputDisplay(previousInput);

    firstNumber = null;
    secondNumber = null;
    operator = null;
    isNewCalculation = true;
    updateDisplay("0");
    console.log("All clear!");
});

decimalButton.addEventListener("click", function(){
    if (isOperatorClicked){
        if (secondNumber === null){
            secondNumber = "0."; 
        } else if (!secondNumber.includes('.')){
            secondNumber += '.';
        }
        updateDisplay(secondNumber);
    } else {
        if(firstNumber === null){
            firstNumber = "0.";
        } else if (!firstNumber.includes('.')){
            firstNumber += '.'
        } 
        updateDisplay(firstNumber);
    }
 
});

const deleteButton = document.getElementById("deleteBtn");
deleteButton.addEventListener("click", function(){
    if (isOperatorClicked && secondNumber) {
        secondNumber = secondNumber.slice(0, -1);
        if(secondNumber === "") secondNumber = null;
        updateDisplay(secondNumber || 0);
    } else if (firstNumber){
        firstNumber = firstNumber.slice(0, -1);
        if(firstNumber === "") firstNumber = null;
        updateDisplay(firstNumber || "0")
    }
});

const display = document.getElementById("currentOperationScreen");

function updateDisplay(value){
    display.textContent = value;
    console.log("Display:", value)
}

})



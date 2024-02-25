const display = document.getElementById('display');
let firstOperand = null;
let secondOperand = null;
let currentOperator = null;

function appendNumber(number) {
    if (currentOperator === null) {
        firstOperand = firstOperand !== null ? parseFloat(`${firstOperand}${number}`) : number;
        display.value = firstOperand;
    } else {
        secondOperand = secondOperand !== null ? parseFloat(`${secondOperand}${number}`) : number;
        display.value = secondOperand;
    }
}

function setOperator(operator) {
    if (firstOperand !== null && secondOperand !== null) {
        calculate();
    }

    currentOperator = operator;
}

function calculate() {
    if (firstOperand !== null && secondOperand !== null && currentOperator !== null) {
        let result;

        switch (currentOperator) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case 'x':
                result = firstOperand * secondOperand;
                break;
            case '/':
                if (secondOperand === 0) {
                    alert('Cannot divide by zero');
                    return;
                }
                result = firstOperand / secondOperand;
                break;
            default:
                return;
        }

        firstOperand = result;
        secondOperand = null;
        currentOperator = null;
        display.value = result;
    }
}

function clearDisplay() {
    firstOperand = null;
    secondOperand = null;
    currentOperator = null;
    display.value = '';
}

function deleteLastCharacter() {
    if (currentOperator === null) {
        if (firstOperand !== null) {
            firstOperand = parseFloat(firstOperand.toString().slice(0, -1));
            display.value = firstOperand !== null ? firstOperand.toString() : '';
        }
    } else {
        if (secondOperand !== null) {
            secondOperand = parseFloat(secondOperand.toString().slice(0, -1));
            display.value = secondOperand !== null ? secondOperand.toString() : '';
        }
    }
}
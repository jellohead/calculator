// calculator.js
let numberStack = [],
    operatorStack = [];

const displayDiv = document.querySelector('.display');

const add = (a, b) => +a + +b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = function (a, b) {
    console.log("divide function a = " + a + ", b = " + b);
    //need handler for 0/0, result is NaN
    if (Number.isFinite(a / b)) {
        return a / b;
    } else {
        return "Don't divide by zero"
    };
};

const executeOp = () => { };
const clear = () => { };

const operate = (a, b, operator) => {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        case "=":
            return executeOp();
        case "clear":
            return clear();
    }
}

const keypadEntry = function (id, text) {
    console.log("keypad: id sent by keypad is " + id);
    if (id === "clear" ||
        id === "plus" ||
        id === "minus" ||
        id === "times" ||
        id === "divide" ||
        id === "equal") {
        pushNumber(displayDiv.textContent);
        pushOperator(id);
        console.log("keypad: entered an operator");
    } else {
        display(id, text);
    }
}

const pushNumber = (item) => {
    numberStack.push(item);
    console.log("pushNumber pushed item = " + item);
}

const pushOperator = (item) => {
    operatorStack.push(item);
    console.log("pushOperator pushed item = " + item);
}

const pop = () => numberStack.pop();

const buttons = document.querySelectorAll('button');
// console.log("buttons: node list = " + buttons);
console.log(buttons);
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log("buttons.forEach: e.target.id " + e.target.id);
        console.log("button: record = " + e);
        console.log("button: text = " + e.target.firstChild.data);
        keypadEntry(e.target.id, e.target.firstChild.data);
        //take action for button clicked
    })
})

// display function
let display = (id, text) => {
    console.log("display: id = " + id + ", text = " + text);
    console.log("display: keypad entry id = " + id);
    // displayDiv.textContent = text;
    displayDiv.textContent += text;
};
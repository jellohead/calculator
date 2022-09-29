// calculator.js
let numberStack = [],
    operatorStack = [];

const displayDiv = document.querySelector('.display');

const add = (a, b) => a + b;
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

const executeOp = () => {
    b = popNumber();
    a = popNumber();
    operator = popOperator();
    return a, b, operator;
};

const clear = () => {
    numberStack = [];
    operatorStack = [];
    displayDiv.textContent = "";
};

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
            // executeOp();
            console.log("operate: in equal case");
            console.log("a = " + a + ", b = " + b + ", operator is " + operator);
            operate(a, b, operate);
        case "clear":
            return clear();
    }
}

const keypadEntry = function (id, text) {
    console.log("keypad: id sent by keypad is " + id + ", text is " + text);
    if (id === "clear" ||
        id === "plus" ||
        id === "minus" ||
        id === "times" ||
        id === "divide"
    ) {
        pushNumber(displayDiv.textContent);
        displayDiv.textContent = "";
        pushOperator(text);
        console.log("keypad: entered an operator");
    } else if (id === "equal") {
        b = popNumber();
        console.log("keypad: b popNumber is " + b);
        a = popNumber();
        console.log("keypad: a popNumber is " + a);
        operator = popOperator();
        console.log("keypad: operator popOperator is " + operator);
        console.log("keypad: text is " + text);
        let result = operate(a, b, operator);
        console.log("keypad: result is " + result);
        displayDiv.textContent = result;
    } else {
        display(id, text);
        pushNumber(text);
    }
}

const pushNumber = (item) => {
    numberStack.push(Number(item));
    console.log("pushNumber pushed item " + item);
}

const pushOperator = (item) => {
    operatorStack.push(item);
    console.log("pushOperator pushed item " + item);
}

const popNumber = () => numberStack.pop();
const popOperator = () => operatorStack.pop();

const buttons = document.querySelectorAll('button');
// console.log("buttons: node list = " + buttons);
console.log(buttons);
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log("buttons.forEach: e.target.id " + e.target.id);
        console.log("button: record is " + e);
        console.log("button: text is  " + e.target.firstChild.data);
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
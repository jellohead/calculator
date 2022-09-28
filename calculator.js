// calculator.js
let numberStack = [],
    operatorStack = [];

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

const push = (item) => numberStack.push(item);
const pop = () => numberStack.pop();

const buttons = document.querySelectorAll('button');
console.log(buttons);
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(e.target.id);
        //take action for button clicked
    })
})

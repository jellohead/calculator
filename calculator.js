// calculator.js
let numberStack = [],
    operatorStack = [];

const add = (a, b) => +a + +b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = function (a, b) {
    console.log("divide function a = " + a + ", b = " + b);

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


//this needs to be wrapped in some sort of init loop
const buttons = document.querySelectorAll('button');
console.log(buttons);
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(e);
        //take action for button clicked
    })
})



// let a = prompt("enter a number");
// console.log("a = " + a);
// let b = prompt("enter another number");
// console.log("b = " + b);
// let operator = prompt("enter +, -, * or /");
// console.log("operator = " + operator);
// console.log("The answer is " + operate(a, b, operator));


// // Do not edit below this line
// module.exports = {
//     add,
//     subtract,
//     multiply,
//     divide
// };
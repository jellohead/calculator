// calculator.js
const add = (a, b) => +a + +b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = function (a, b) {
    if (Number.isFinite(a / b)) {
        return a / b;
    } else {
        return "Don't divide by zero"
    };
};

const executeOp = () => { };
const clear = () => { };

const operate = function (a, b, operator) {
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

// let a = prompt("enter a number");
// console.log("a = " + a);
// let b = prompt("enter another number");
// console.log("b = " + b);
// let operator = prompt("enter +, -, * or /");
// console.log("operator = " + operator);
// console.log("The answer is " + operate(a, b, operator));

// equal buttons calls operate function
// set up event listeners for each button
// save entered numbers and operator in variables
// should i use two stacks to hold numbers and operators?


// // Do not edit below this line
// module.exports = {
//     add,
//     subtract,
//     multiply,
//     divide
// };
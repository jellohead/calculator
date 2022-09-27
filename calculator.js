// calculator.js
const add = (a, b) => +a + +b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => b === 0 ? console.log("Don't divide by zero") : a / b;

const operate = function (a, b, operator) {
    switch (operator) {
        case "+":
            console.log(add(a, b));
            break;
        case "-":
            console.log(subtract(a, b));
            break;
        case "*":
            console.log(multiply(a, b));
            break;
        case "/":
            console.log(divide(a, b));
            break;
    }
}

let a = prompt("enter a number");
console.log("a = " + a);
let b = prompt("enter another number");
console.log("b = " + b);
let operator = prompt("enter +, -, * or /");
console.log(operate(a, b, operator));


// // Do not edit below this line
// module.exports = {
//     add,
//     subtract,
//     multiply,
//     divide
// };
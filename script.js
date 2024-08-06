function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

let num1;
let num2;
let operator = "";

function operate(operator, num1, num2) {
    switch (operator) {
        case "+": return add(num1, num2);
        case "-": return subtract(num1, num2);
        case "x": return multiply(num1, num2);
        case "/": return divide(num1, num2);
    }
}

let display = "";
let displayBox = document.querySelector("#display");
let numberButton = document.querySelectorAll(".number");
let operatorButton = document.querySelectorAll(".operator");
let equalButton = document.querySelector(".equals");

for (btn of numberButton) {
    btn.addEventListener("click", (event) => {
        let target = event.target;
        display+=target.textContent;
        if (operator === "") {
            num1 = Number(display);
        } else {
            num2 = Number(display);
        }
        displayBox.textContent = display;
    });
}

for (btn of operatorButton) {
    btn.addEventListener("click", (event) => {
        displayBox.textContent = "";
        display = "";
        let target = event.target;
        operator = target.textContent;
    });
}

equalButton.addEventListener("click", () => {
    display = operate(operator, num1, num2).toString();
    displayBox.textContent = display;
});
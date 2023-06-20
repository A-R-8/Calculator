function add(a, b) {
  let sum = a + b;
  return sum;
}
function subtract(a, b) {
  let difference = a - b;
  return difference;
}
function multiply(a, b) {
  let product = a * b;
  return product;
}
function divide(a, b) {
  let ratio = a / b;
  return ratio;
}

function operate(o, a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  let total = 0;
  if (o == "+") {
    total = add(a, b);
    return total;
  } else if (o == "-") {
    total = subtract(a, b);
    return total;
  } else if (o == "x") {
    total = multiply(a, b);
    return total;
  } else if (o == "/") {
    total = divide(a, b);
    if (total == Infinity) {
      return "MATH ERROR";
    } else {
      return total;
    }
  }
}

console.log(operate("+", 80, 2));

const screen = document.querySelector(".display-screen");

const buttons = document.querySelectorAll("#number");
let previousValue = 0;
let currentValue = 0;
let key = "off";
let selectedoperator = "";
let previousOperator;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (key == "off") {
      screen.innerHTML += e.target.innerHTML;
    } else if (key == "on") {
      key = "off";
      screen.innerHTML = "";
      screen.innerHTML += e.target.innerHTML;
    }
  });
});

const operators = document.querySelectorAll(".o");
operators.forEach((button) => {
  button.addEventListener("click", (e) => {
    currentValue = screen.innerHTML;
    selectedoperator = e.target.innerHTML;

    if (!previousValue) {
      previousValue = currentValue;
      previousOperator = selectedoperator;
    } else if (previousValue) {
      previousValue = operate(previousOperator, previousValue, currentValue);
      screen.innerHTML = previousValue;
      previousOperator = selectedoperator;
    }
    key = "on";
  });
});

const equal = document.getElementById("equal");

equal.addEventListener("click", (e) => {
  const firstnumber = previousValue;
  const secondnumber = screen.innerHTML;
  const operator = selectedoperator;
  key = "on";

  let result = operate(operator, firstnumber, secondnumber);
  previousValue = "";
  screen.innerHTML = result;
});

const clearall = document.getElementById("clearall");
clearall.addEventListener("click", (e) => {
  previousValue = "";
  currentValue = "";
  screen.innerHTML = "";
  selectedoperator = "";
  previousOperator = "";
});

const clear = document.getElementById("clear");
clear.addEventListener("click", (e) => {
  screen.innerHTML = screen.innerHTML.slice(0, -1);
});

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
  let total = 0;
  if (o == "+") {
    total = add(a, b);
    return total;
  } else if (o == "-") {
    total = subtract(a, b);
    return total;
  } else if (o == "*") {
    total = multiply(a, b);
    return total;
  } else if (o == "/") {
    total = divide(a, b);
    return total;
  }
}

const screen = document.querySelector(".display-screen");

const buttons = document.querySelectorAll("#number");
let previousValue;
let currentValue = 0;
let screenvalue = "";
let currentOperator = "";
let previousOperator = "";
function Display(e) {
  screen.innerHTML += e;
  screenvalue = screen.innerHTML;
}
let prev = "";
function setNumber(n) {
  n = prev + n;
  prev = n;
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    Display(e.target.innerHTML);
    setNumber(e.target.innerHTML);
  });
});

const clearall = document.getElementById("clearall");
clearall.addEventListener("click", (e) => {
  screen.innerHTML = "";
  previousValue = undefined;
  currentValue = 0;
});

const operators = document.getElementById("plus");
operators.addEventListener("click", (e) => {
  prev = parseInt(prev);
  currentValue = prev;
  currentOperator = "+";
  if (previousValue === undefined) {
    previousValue = currentValue;
    previousValue = parseInt(previousValue);
    currentValue = 0;
  } else {
    if (previousOperator != "+") {
      previousValue = operate(previousOperator, previousValue, currentValue);
    } else {
      previousValue += currentValue;
    }
  }

  console.log("PreviousValue " + previousValue);
  console.log("CurrentValue " + currentValue);

  prev = "";
  previousOperator = "+";
  screen.innerHTML += e.target.innerHTML;
});

const equal = document.getElementById("equal");
equal.addEventListener("click", (e) => {
  prev = parseInt(prev);
  currentValue = prev;
  console.log("Previous value " + previousValue);
  console.log("Current value " + currentValue);
  screen.innerHTML = operate(currentOperator, previousValue, currentValue);
});

const operators_minus = document.getElementById("minus");
operators_minus.addEventListener("click", (e) => {
  prev = parseInt(prev);
  currentValue = prev;
  currentOperator = "-";
  if (previousValue === undefined) {
    previousValue = currentValue;
    previousValue = parseInt(previousValue);
    currentValue = 0;
  } else {
    if (previousOperator != "-") {
      operate(previousOperator, previousValue, currentValue);
    } else {
      previousValue -= currentValue;
    }
  }
  previousOperator = "-";
  console.log("PreviousValue " + previousValue);
  console.log("CurrentValue " + currentValue);
  prev = "";
  screen.innerHTML += e.target.innerHTML;
});

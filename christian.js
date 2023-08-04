let firstNumber = "";
let secondNumber = "";
let operator = "";
let displayValue = "0";

const btnPush = (value) => {
  //if button is a number or a decimal
  if (!isNaN(value) || value === ".") {
    //no number
    if (displayValue === "0" || operator === "=") {
      displayValue = value;
      operator = "";
    } else if (
      firstNumber !== "" &&
      secondNumber === "" &&
      displayValue === firstNumber
    ) {
      displayValue = value;
    } else {
      displayValue += value;
    }
  }
  // if button is an operator
  else if (value === "+" || value === "x" || value === "/" || value === "-") {
    if (firstNumber === "") {
      firstNumber = displayValue;
    } else if (operator !== "=") {
      secondNumber = displayValue;
      operate();
      firstNumber = displayValue;
    }
    operator = value;
  }
  // if button is =
  else if (value === "=") {
    if (firstNumber !== "" && operator !== "=") {
      secondNumber = displayValue;
      operate();
      operator = "=";
    }
  }
  //if button is delete
  else if (value === "del") {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    displayValue = "0";
  }

  updateDisplay();
};

const updateDisplay = () => {
  document.getElementById("display").value = displayValue;
};

operate = () => {
  if (operator === "/") {
    displayValue = divide(firstNumber, secondNumber);
  } else if (operator === "-") {
    displayValue = subtract(firstNumber, secondNumber);
  } else if (operator === "x") {
    displayValue = multiply(firstNumber, secondNumber);
  } else if (operator === "+") {
    displayValue = add(firstNumber, secondNumber);
  }
  firstNumber = "";
  secondNumber = "";
};

const add = (a, b) => {
  return parseFloat(a) + parseFloat(b);
};
const subtract = (a, b) => {
  return parseFloat(a) - parseFloat(b);
};
const divide = (a, b) => {
  if (parseFloat(b) === 0) {
    return "you thought!";
  }
  return parseFloat(a) / parseFloat(b);
};
const multiply = (a, b) => {
  return parseFloat(a) * parseFloat(b);
};

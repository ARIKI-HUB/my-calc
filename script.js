let firstArg = "";
let secondArg = "";
let operator = "";
let displayNum = document.getElementById("display");
let numButt = document.querySelectorAll(".number");
let opButt = document.querySelectorAll(".operator");
let equalsButt = document.querySelector(".equal");
let deleteButt = document.querySelector(".del");
function add(num1, num2) {
  return +num1 + +num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

function display(e) {
  const buttonText = e.target.textContent;
  if (displayNum.innerText === "Error") {
    clear();
  }
  if (!operator) {
    firstArg += buttonText;
    displayNum.innerText = firstArg;
  }
  if (operator && !isNaN(buttonText)) {
    secondArg += buttonText;
    displayNum.innerText = secondArg;
  }
  console.log("first:", firstArg, "second:", secondArg, "operator", operator);
}

const operate = () => {
  const num1 = parseFloat(firstArg);
  const num2 = parseFloat(secondArg);
  if (!firstArg || isNaN(num1) || isNaN(num2) || operator === "") {
    displayNum.innerText = "Error";
    clear();
  } else {
    const result = computeResults(num1, num2);
    displayNum.innerText = result;
    firstArg = result.toString();
  }
};
const computeResults = (num1, num2) => {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "x":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
  }
};
function clear() {
  firstArg = "";
  secondArg = "";
  operator = "";
  displayNum.innerText = "0";
  document.getElementById("display").value = displayNum;
}
numButt.forEach((button) => {
  button.addEventListener("click", display);
});
opButt.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (!firstArg) {
      firstArg = displayNum.innerText;
    } else if (firstArg && operator && secondArg) {
      operate();
      firstArg = displayNum.innerText;
    }
    operator = e.target.textContent;
    display(e);
  });
});

equalsButt.addEventListener("click", operate);
deleteButt.addEventListener("click", clear);

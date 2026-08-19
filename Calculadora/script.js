const currentOperation = document.getElementById("current-operation");
const previousOperation = document.getElementById("previous-operation");

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const clearButton = document.querySelector('[data-action="clear"]');
const deleteButton = document.querySelector('[data-action="delete"]');
const calculateButton = document.querySelector('[data-action="calculate"]');

let currentNumber = "";
let previousNumber = "";
let operation = null;

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const number = button.dataset.number;

    if (number === "." && currentNumber.includes(".")) {
      return;
    }

    currentNumber += number;

    updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (currentNumber === "") {
      return;
    }

    if (previousNumber !== "") {
      calculate();
    }

    operation = button.dataset.operation;
    previousNumber = currentNumber;
    currentNumber = "";

    updateDisplay();
  });
});

calculateButton.addEventListener("click", () => {
  if (currentNumber === "" || previousNumber === "" || operation === null) {
    return;
  }

  calculate();
  updateDisplay();
});

function calculate() {
  const number1 = parseFloat(previousNumber);
  const number2 = parseFloat(currentNumber);

  if (isNaN(number1) || isNaN(number2)) {
    return;
  }

  let result;

  switch (operation) {
    case "+":
      result = number1 + number2;
      break;

    case "-":
      result = number1 - number2;
      break;

    case "*":
      result = number1 * number2;
      break;

    case "/":
      if (number2 === 0) {
        currentNumber = "Error";
        previousNumber = "";
        operation = null;
        return;
      }

      result = number1 / number2;
      break;

    case "%":
      result = number1 % number2;
      break;

    default:
      return;
  }

  currentNumber = String(Number(result.toFixed(10)));

  previousNumber = "";
  operation = null;
}

clearButton.addEventListener("click", () => {
  currentNumber = "";
  previousNumber = "";
  operation = null;

  updateDisplay();
});

deleteButton.addEventListener("click", () => {
  if (currentNumber === "Error") {
    currentNumber = "";
  } else {
    currentNumber = currentNumber.slice(0, -1);
  }

  updateDisplay();
});

function updateDisplay() {
  currentOperation.textContent = currentNumber || "0";

  if (previousNumber && operation) {
    let symbol = operation;

    if (operation === "*") symbol = "×";
    if (operation === "/") symbol = "÷";

    previousOperation.textContent = `${previousNumber} ${symbol}`;
  } else {
    previousOperation.textContent = "";
  }
}

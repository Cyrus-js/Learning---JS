let display = document.getElementById("display");
let currentInput = "0";
let shouldResetDisplay = false;

function appendToDisplay(value) {
  if (display.value === "0" || shouldResetDisplay) {
    display.value = value;
    shouldResetDisplay = false;
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  display.value = "0";
  currentInput = "0";
  shouldResetDisplay = false;
}

function deleteLast() {
  display.value = display.value.slice(0, -1) || "0";
}

function calculate() {
  try {
    let expression = display.value.replace(/×/g, "*");
    let result = eval(expression);

    if (!isFinite(result)) {
      display.value = "Error";
      shouldResetDisplay = true;
      return;
    }

    display.value = Number(result.toFixed(8)).toString();
    shouldResetDisplay = true;
  } catch (error) {
    display.value = "Error";
    shouldResetDisplay = true;
  }
}

// Keyboard support
document.addEventListener("keydown", function (event) {
  const key = event.key;
  if ((key >= "0" && key <= "9") || key === ".") {
    appendToDisplay(key);
  } else if (key === "+" || key === "-") {
    appendToDisplay(key);
  } else if (key === "*") {
    appendToDisplay("×");
  } else if (key === "/") {
    appendToDisplay("÷");
  } else if (key === "Enter" || key === "=") {
    calculate();
  } else if (key === "Escape") {
    clearDisplay();
  } else if (key === "Backspace") {
    deleteLast();
  }
});

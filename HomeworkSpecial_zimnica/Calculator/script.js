class Calculator {
  constructor(firstNumber, secondNumber) {
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
    this.delete();
  }
  delete() {
    this.second = " ";
    this.first = " ";
    this.operation = undefined;
    this.error = "";
  }
  //Function that will clear the variables, and also return error if needed;

  clear() {
    this.second = this.second.toString().slice(0, -1);
  }
  //We need clear function that will remove a single number ←

  addNumber(number) {
    if (this.error) {
      this.delete();
    }
    if (number === "." && this.second.includes(".")) return; //to avoid adding more points than one;
    this.second = this.second.toString() + number.toString();
  }
  //This function is for adding the single number to the screen everytime is clicked;

  chosenOperation(operation) {
    if (this.second === " ") return;
    if (this.first !== " ") {
      this.calculate();
    }
    this.operation = operation;
    this.first = this.second;
    this.second = " "; //this allows whenever some operation is clicked, to clean the screen and add the second number;
  }
  //Function that will take the clicked operation;

  calculate() {
    let calculation;
    const prev = parseFloat(this.first);
    const current = parseFloat(this.second);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        calculation = prev + current;
        break;
      case "-":
        calculation = prev - current;
        break;
      case "x":
        calculation = prev * current;
        break;
      case "÷":
        if (current === 0) this.error = "Error can't divide by 0";
        //the calculator should shows error if number is divided by zero;
        else calculation = prev / current;
        break;
      default: //if none of the symbols match the operation we dont have to do the calculation;
        return;
    }

    this.second = calculation;
    this.operation = undefined;
    this.first = " ";
  }
  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    let integerDisplay;

    if (isNaN(integerDigits)) {
      integerDisplay = " ";
    } else {
      integerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  updateDisplay() {
    if (this.error) {
      this.firstNumber.innerText = this.error;
      return;
    }
    this.secondNumber.innerText = this.getDisplayNumber(this.second);
    if (this.operation != null) {
      this.firstNumber.innerText = `${this.getDisplayNumber(this.first)} ${
        this.operation
      }`;
    } else {
      this.firstNumber.innerText = " ";
    }
  } //Function that will update the values inside of the output;
}

const numberBtns = document.querySelectorAll("[data-number]");
const operationsBtns = document.querySelectorAll("[data-operations]");
const equalBtn = document.querySelector("[data-equal]");
const clearBtn = document.querySelector("[data-clear]");
const deleteBtn = document.querySelector("[data-delete]");
const firstNumber = document.querySelector("[data-first-number]");
const secondNumber = document.querySelector("[data-second-number]");

const calculator = new Calculator(firstNumber, secondNumber);

numberBtns.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.addNumber(button.innerText);
    calculator.updateDisplay();
  });
});
//We loop through all the buttons and add eventListener: whenever is clicked the button to append the innerText;
//Also we call function so the numbers will update constantly;
//We repeat the process with the buttons that remained and call the necessary funcitons that should be executed;

operationsBtns.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chosenOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalBtn.addEventListener("click", (button) => {
  calculator.calculate();
  calculator.updateDisplay();
});

deleteBtn.addEventListener("click", (button) => {
  calculator.delete();
  calculator.updateDisplay();
});

clearBtn.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updateDisplay();
});

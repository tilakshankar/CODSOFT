document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("result");
    let currentInput = "";
    let operator = "";
    let previousInput = "";

    function updateDisplay() {
        display.textContent = currentInput === "" ? "0" : currentInput;
    }

    function clear() {
        currentInput = "";
        operator = "";
        previousInput = "";
        updateDisplay();
    }

    function calculate() {
        let result;
        const num1 = parseFloat(previousInput);
        const num2 = parseFloat(currentInput);
        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = num1 / num2;
                break;
            default:
                break;
        }
        currentInput = result.toString();
        operator = "";
        previousInput = "";
    }

    document.querySelectorAll(".number").forEach(button => {
        button.addEventListener("click", function() {
            currentInput += button.textContent;
            updateDisplay();
        });
    });

    document.querySelectorAll(".operator").forEach(button => {
        button.addEventListener("click", function() {
            if (currentInput !== "") {
                if (previousInput !== "") {
                    calculate();
                    updateDisplay();
                }
                operator = button.textContent;
                previousInput = currentInput;
                currentInput = "";
            }
        });
    });

    document.querySelector(".equal").addEventListener("click", function() {
        if (previousInput !== "" && operator !== "") {
            calculate();
            updateDisplay();
        }
    });

    document.querySelector(".clear").addEventListener("click", clear);
});

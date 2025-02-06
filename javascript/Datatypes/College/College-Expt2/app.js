var display = document.getElementById("screen");
function appendInput(value) {
    if (display.innerText === "0" || display.innerText === "Error") {
        display.innerText = "";
    }
    display.innerText += value;
}
function clearScreen() {
    display.innerText = "0";
}
function calculateResult() {
    try {
        var result = eval(display.innerText);
        display.innerText = "".concat(display.innerText, "=").concat(result);
    }
    catch (error) {
        display.innerText = "Error";
    }
}

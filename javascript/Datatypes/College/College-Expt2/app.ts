const display = document.getElementById("screen") as HTMLDivElement;

function appendInput(value: string): void {
    if (display.innerText === "0" || display.innerText === "Error") {
        display.innerText = "";
    }
    display.innerText += value;
}

function clearScreen(): void {
    display.innerText = "0";
}

function calculateResult(): void {
    try {
        const result: number = eval(display.innerText);
        display.innerText = `${display.innerText}=${result}`;
    } catch (error) {
        display.innerText = "Error";
    }
}

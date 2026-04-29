import calculatorElements from "../domElements/displayElements.js";

function updatePreview(content: string) : void {
    calculatorElements.secondaryScreen.innerText = content;
}

function updateDisplay(content: string) : void {
    calculatorElements.display.value = content;
}

export {updateDisplay, updatePreview};
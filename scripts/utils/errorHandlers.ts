import calculatorElements from "../domElements/displayElements.js";

function showError(error: string) : void {
    calculatorElements.secondaryScreen.innerText = error;
    calculatorElements.secondaryScreen.style.color = "#ff5151";
}

function clearError() : void{
    calculatorElements.secondaryScreen.innerText = "";
    calculatorElements.secondaryScreen.style.color = "#747474";
}

export {showError, clearError};
import calculatorElements from "../domElements/displayElements.ts";
import { showError } from "../utils/errorHandlers.ts"
import calculator from "./calculator.ts";

const memoryState = {
    memoryContent: 0,
    incrementMemory(value: string) : void {
        if (this.isInvalidValue(value)) return;
        this.enableMemoryButtons();
        this.memoryContent += (+value);
    },
    decrementMemory(value: string) : void {
        if (this.isInvalidValue(value)) return;
        this.enableMemoryButtons();
        this.memoryContent -= (+value);
    },
    saveToMemory(value: string) : void {
        if (this.isInvalidValue(value)) return;
        this.enableMemoryButtons();
        this.memoryContent = (+value);
    },
    injectMemoryValue() : void {
        calculator.updateString(String(this.memoryContent));
    },
    clearMemory() : void {
        this.disableMemoryButtons();
        this.memoryContent = 0;
    },
    isInvalidValue(value: string) : boolean {
        if (isNaN(+value)) {
            showError("Invalid value");
            return true;
        }
        return false;
    },
    disableMemoryButtons() : void {
        calculatorElements.memoryClear.setAttribute("disabled", "true");
        calculatorElements.memoryRead.setAttribute("disabled", "true");
    },
    enableMemoryButtons() : void {
        calculatorElements.memoryClear.removeAttribute("disabled");
        calculatorElements.memoryRead.removeAttribute("disabled");
    },
}

function handleMemoryInput(type: string) : void {
    switch (type) {
        case "M+":
            memoryState.incrementMemory(calculator.inputString);
            break;
        case "M-":
            memoryState.decrementMemory(calculator.inputString);
            break;
        case "MS":
            memoryState.saveToMemory(calculator.inputString);
            break;
        case "MR":
            memoryState.injectMemoryValue();
            break;
        case "MC":
            memoryState.clearMemory();
            break;
    }
}

export { handleMemoryInput };
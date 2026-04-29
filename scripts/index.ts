import calculatorElements from "./domElements/displayElements.ts";
import calculator from "./modules/calculator.ts";
import { handleMemoryInput } from "./modules/memory.ts";
import { operators } from "./modules/operatorReference.ts";
import { loadHistory } from "./utils/historyHandlers.ts";
import handleInsertion from "./utils/insertionHandler.ts";

// Load history from localstorage.
loadHistory();

// Listen for click events on buttons.
calculatorElements.buttonParent.addEventListener("click", (e) => {
    handleInsertion(
        (e.target as HTMLElement)?.getAttribute("data-type"), 
        (e.target as HTMLElement)?.getAttribute("data-display")
    );
});

calculatorElements.dropdownContainer.addEventListener("click", (e) => {
    handleInsertion(
        (e.target as HTMLElement)?.getAttribute("data-type"), 
        (e.target as HTMLElement)?.getAttribute("data-display")
    );
});

// Listen user inputs and filter out alphabets
calculatorElements.display.addEventListener("beforeinput", (e: InputEvent) => {
    if(!e.target) return;
    if(e.data && (!isNaN(Number(e.data)) || (e.data) in operators || e.data === ".")) {
        calculator.setValue((e.target as HTMLInputElement).value);
    }
    (e.target as HTMLInputElement).value = calculator.inputString.trim();
});

// Clear history
calculatorElements.historyDelete.addEventListener("click", () => {
    localStorage.clear();
    calculatorElements.historyList.replaceChildren(calculatorElements.emptyMessage);
    calculatorElements.emptyMessage.style.display = "flex";
});

// Toggle history view
calculatorElements.historyToggle.addEventListener("click", () => {
    if(calculator.historyShown){
        calculatorElements.historyContainer.classList.remove("show");
        calculatorElements.historyContainer.classList.add("hide");
        calculator.historyShown = false;
    } else {
        calculatorElements.historyContainer.classList.remove("hide");
        calculatorElements.historyContainer.classList.add("show");
        calculator.historyShown = true;
    }
});


document.addEventListener("keydown", (e) => {
    if(e.key !== "Tab") calculatorElements.display.focus();

    calculator.handleAction(e.key);
});

calculatorElements.invertTrigonometry.addEventListener("click", () => {
    calculatorElements.invertTrigonometry.classList.toggle("active");
    calculatorElements.trigonometryList.classList.toggle("show-invert");
})

calculatorElements.invertButton.addEventListener("click", () => {
    calculatorElements.invertButton.classList.toggle("active");
    calculatorElements.buttonParent.classList.toggle("show-inverse");
})

calculatorElements.memoryButtons.addEventListener("click", (e) => {
    let type = (e.target as HTMLElement)?.getAttribute("data-Type");
    type && handleMemoryInput(type);
})

calculatorElements.degreeButton.addEventListener("click", (e) => {
    calculator.toggleUseRadian(e.target as HTMLElement);
})

calculatorElements.notationButton.addEventListener("click", (e) => {
    calculator.toggleNotation(e.target as HTMLElement);
})
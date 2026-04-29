const calculatorElements = {
    display: document.querySelector("#display") as HTMLInputElement,
    secondaryScreen: document.querySelector(".body__secondary-screen") as HTMLElement,
    buttonParent: document.querySelector(".body__buttons") as HTMLElement,
    previewScreen: document.querySelector(".body__preview") as HTMLElement,
    historyContainer: document.querySelector(".calculator__history") as HTMLElement,
    historyList: document.querySelector(".history__list") as HTMLElement,
    historyToggle: document.querySelector(".history-toggle") as HTMLElement,
    historyDelete: document.querySelector(".history-delete") as HTMLElement,
    emptyMessage: document.querySelector(".empty_message") as HTMLElement,
    dropdownContainer: document.querySelector(".dropdown-container") as HTMLElement,
    invertTrigonometry: document.querySelector("#invert-trigonometry") as HTMLElement,
    trigonometryList: document.querySelector("#trigonometry-list") as HTMLElement,
    invertButton: document.querySelector("#invert-function") as HTMLElement,
    modeButtons: document.querySelector(".button-modes") as HTMLElement,
    memoryButtons: document.querySelector(".button-memory") as HTMLElement,
    memoryClear: document.querySelector("[data-type='MC']") as HTMLElement,
    memoryRead: document.querySelector("[data-type='MR']") as HTMLElement,
    degreeButton: document.querySelector("[data-type='DEG']") as HTMLElement,
    notationButton: document.querySelector("[data-type='FE']") as HTMLElement,
}

Object.freeze(calculatorElements);

export default calculatorElements;
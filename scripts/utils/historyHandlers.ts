import calculatorElements from "../domElements/displayElements.ts";

function updateHistory(input:string, ans: string) : void {
    let data = localStorage.getItem("historyList");
    let items;

    calculatorElements.emptyMessage.style.display = "none";
    items = JSON.parse(data ?? "");

    let newItem = {
        input,
        ans
    };

    items.push(newItem);

    localStorage.setItem("historyList", JSON.stringify(items));

    // Add new entry to history list
    let listItem = document.createElement("li");

    let query = document.createElement("span");
    let answer = document.createElement("span");

    query.innerText = input;
    answer.innerText = String(ans);

    listItem.append(query, answer);

    calculatorElements.historyList.prepend(listItem);
    return;
}

function loadHistory() : void {
    let data = localStorage.getItem("historyList");
    if (!data || data === "[]") {
        localStorage.setItem("historyList", "[]");
        calculatorElements.emptyMessage.style.display = "flex";
        return;
    }
    calculatorElements.emptyMessage.style.display = "none";

    let historyList = JSON.parse(data).reverse();

    let listItems = new DocumentFragment();

    for (let item of historyList) {
        let listItem = document.createElement("li");

        let query = document.createElement("span");
        let answer = document.createElement("span");

        query.innerText = item?.input;
        answer.innerText = item?.ans;

        listItem.append(query, answer);

        listItems.append(listItem);
    }

    calculatorElements.historyList.append(listItems);
}

export {updateHistory, loadHistory};
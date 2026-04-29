import { getLastElement, wrapLastElement } from "./insertionHelpers.ts";

function toggleSign(str: string) : string {
    let [lastElement, index] = getLastElement(str);

    if(index === -1) return str;

    if(lastElement.startsWith("(-")){
        str = str.slice(0, index) + str.slice(index+2, str.length-1);
    } 
    else if(lastElement.startsWith("-")) {
        str = str.slice(0, index) + str.slice(index+1);
    } 
    else {
        str = wrapLastElement(str, "(-", ")");
    }
    return str;
}

export default toggleSign;
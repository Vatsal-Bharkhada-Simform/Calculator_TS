import { showError } from "../utils/errorHandlers.js";
import { evaluateBinaryOperators, evaluateUnaryOperators } from "./evaluationFunctions.js";
import { constants, operators } from "./operatorReference.js";
import tokenizeExpression from "./tokenizeExpression.js";

function evaluate(str: string): number | undefined {                                                                // Based on the Shunting yard algorithm
    let tokens: string[] = [];
    try {
        tokens = tokenizeExpression(str);                                               // Generate tokens
    } catch (err) {
        showError((err as Error).message);
        return;
    }

    let hStack: string[] = [];
    let oStack: (string | number)[] = [];
    let result: number[] = [];
    let temp: string = "";

    for (let i = 0; i < tokens.length; i++) {                                           // Convert into Reverse Polish format.
        if (!isNaN(Number(tokens[i]))) {                                                
            oStack.push(Number(tokens[i]));
        } else if (tokens[i] === "(") {
            hStack.push(tokens[i] ?? "");
        } else if (tokens[i] === ")") {
            while (hStack.length && hStack.at(-1) !== "(") {
                oStack.push(hStack.pop() ?? "");
            }
            hStack.pop();
        }
        else if (operators[(tokens[i] ?? "")] !== undefined) {
            while (hStack.length && (Number(operators[hStack.at(-1) ?? ""]?.precedence) >= Number(operators[tokens[i] ?? ""]?.precedence))) {
                temp = hStack.pop() ?? "";
                oStack.push(temp);
            }
            hStack.push((tokens[i] ?? ""));
        }
        else if (tokens[i] !== undefined && String(tokens[i]) in constants){
            oStack.push(Number(constants[tokens[i] ?? ""]));
        }
    }

    while (hStack.length !== 0) {
        oStack.push(String(hStack.pop()));
    }

    let tempAns = 0;

    for (let i = 0; i < oStack.length; i++) {                                           // Evaluate the reverse polish notation.
        if(oStack[i] === undefined) continue;
        if (!isNaN(Number(oStack[i]))) result.push(Number(oStack[i]) ?? 0);
        else {
            if (operators[oStack[i] ?? ""]?.operands === 2) {
                tempAns = evaluateBinaryOperators(String(oStack[i]), Number(result.pop()), Number(result.pop()));
                result.push(tempAns);
            } else {
                tempAns = evaluateUnaryOperators(String(oStack[i]), result.pop() ?? 0);
                result.push(tempAns);
            }
        }
    }

    if(result.length > 1 || isNaN(+(result[0] ?? 0))) throw new SyntaxError("Invalid expression");

    return result[0];
}

export { evaluate };
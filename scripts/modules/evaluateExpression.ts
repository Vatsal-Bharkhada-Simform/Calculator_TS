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

    for(let token in tokens) {                                           // Convert into Reverse Polish format.
        if (!isNaN(Number(token))) {                                                
            oStack.push(Number(token));
        } else if (token === "(") {
            hStack.push(token);
        } else if (token === ")") {
            while (hStack.length && hStack.at(-1) !== "(") {
                oStack.push(String(hStack.pop()));
            }
            hStack.pop();
        }
        else if (operators[token] !== undefined) {
            while (hStack.length && (Number(operators[hStack.at(-1) ?? ""]?.precedence) >= Number(operators[token].precedence))) {
                temp = String(hStack.pop());
                oStack.push(temp);
            }
            hStack.push(token);
        }
        else if (token !== undefined && String(token) in constants){
            oStack.push(Number(constants[token]));
        }
    }

    while (hStack.length !== 0) {
        oStack.push(String(hStack.pop()));
    }

    let tempAns = 0;

    for (let token in oStack) {                                           // Evaluate the reverse polish notation.
        if(token === undefined) continue;
        if (!isNaN(Number(token))) result.push(Number(token));
        else {
            if (operators[token]?.operands === 2) {
                tempAns = evaluateBinaryOperators(String(token), Number(result.pop()), Number(result.pop()));
                result.push(tempAns);
            } else {
                tempAns = evaluateUnaryOperators(String(token), Number(result.pop()));
                result.push(tempAns);
            }
        }
    }

    if(result.length > 1 || isNaN(Number(result[0]))) throw new SyntaxError("Invalid expression");

    return result[0];
}

export { evaluate };
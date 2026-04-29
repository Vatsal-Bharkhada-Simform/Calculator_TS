function evaluateUnaryOperators(op: string, a: number | "UM") : number{
    if(op === "UM") {
        if(a === "UM"){
            return 1;
        } 
        else {
            return a * -1;
        }
    }
    if(a === "UM") {
        throw new Error("Invlaid expression encountered");
    }

    switch (op) {
        case "²√": return Math.sqrt(a);
        case "³√": return Math.cbrt(a);
        case "log": return Math.log10(a);
        case "ln": return Math.log(a);
        case "sin": return Math.sin(a);
        case "cos": return Math.cos(a);
        case "tan": return Math.tan(a);
        case "asin": return Math.asin(a);
        case "acos": return Math.acos(a);
        case "atan": return Math.atan(a);
        case "abs": return Math.abs(a);
        case "round": return Math.round(a);
        case "floor": return Math.floor(a);
        case "ceil": return Math.ceil(a);
        case "!": return factorial(a);
        default:
            throw new Error("Unknown operator encountered");
    }
}

function evaluateBinaryOperators(op: string, b: number, a: number): number {
    switch (op) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return a / b;
        case "^": return a ** b;
        case "%": return a % b;
        default:
            throw new Error("Unknown operator encountered");
    }
}

function factorial(n: number): number {
    let ans = 1;
    for (let i = Math.abs(n); i > 0; --i) ans *= i;
    return n > 0 ? ans : -1*ans;
}

export {evaluateUnaryOperators, evaluateBinaryOperators};
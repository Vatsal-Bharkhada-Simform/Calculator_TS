import { handleUnaryOperators } from "../utils/expressionHandlers.js";

function tokenizeExpression(str: string): string[] {
    const TOKEN_REGEX = /asin|acos|atan|log|sin|cos|tan|ln|²√|³√|π|!|e|\d*\.\d+|\d+|[()+\-*/^%,]/gi;

    let unfilteredTokens = str.match(TOKEN_REGEX) ?? [];
    if(unfilteredTokens.join("").length !== str.length){
        throw new SyntaxError("Invalid expression");
    }
    const filteredTokens = handleUnaryOperators(unfilteredTokens);
    
    return filteredTokens || [];
}

export default tokenizeExpression;
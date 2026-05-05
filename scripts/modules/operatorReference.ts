type OperatorContent = {
    precedence: number | undefined;
    operands: number | undefined
}

const operators: Record<string, OperatorContent> = {
    "+": {
        precedence: 1,
        operands: 2,
    },
    "-": {
        precedence: 1,
        operands: 2,
    },
    "*": {
        precedence: 2,
        operands: 2
    },
    "/": {
        precedence: 2,
        operands: 2
    },
    "%": {
        precedence: 2,
        operands: 2
    },
    "^": {
        precedence: 3,
        operands: 2
    },
    "²√": {
        precedence: 4,
        operands: 1,
    },
    "³√": {
        precedence: 4,
        operands: 1,
    },
    "log": {
        precedence: 5,
        operands: 1,
    },
    "ln": {
        precedence: 5,
        operands: 1,
    },
    "sin": {
        precedence: 5,
        operands: 1,
    },
    "cos": {
        precedence: 5,
        operands: 1,
    },
    "tan": {
        precedence: 5,
        operands: 1,
    },
    "asin": {
        precedence: 5,
        operands: 1,
    },
    "acos": {
        precedence: 5,
        operands: 1,
    },
    "atan": {
        precedence: 5,
        operands: 1,
    },
    "|": {
        precedence: 6,
        operands: 1,
    },
    "UM": {
        precedence: 7,
        operands: 1
    },
    "!": {
        precedence: 7,
        operands: 1
    },
    "(": {
        precedence: undefined,
        operands: undefined,
    },
    ")": {
        precedence: undefined,
        operands: undefined,
    },
} as const;

const constants: Record<string, number> = {
    "e" : Math.E,
    "π" : Math.PI,
} as const;

const parenthesis: string[] = ["(", ")", "|"];

const trigonometricFunctions: string[] = ["sin", "cos", "tan", "asin", "acos", "atan"];

const specialParenthesis: Record<string, string[]> = {
    "round" : ["|", "|"], 
    "abs" : ["|", "|"], 
    "ceil" : ["⎡", "⎤"], 
    "floor" : ["⎣", "⎦"]
} as const;

export {operators, constants, parenthesis, trigonometricFunctions, specialParenthesis};
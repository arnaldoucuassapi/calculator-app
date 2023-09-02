interface ICalculator {
    sum: (x: number, y: number) => number;
    sub: (x: number, y: number) => number;
    multiplication: (x: number, y: number) => number;
    division: (x: number, y: number) => number;
}

export default class Calculator implements ICalculator {
    sum(x: number, y: number) {
        return x + y;
    }

    sub(x: number, y: number) {
        return x - y;
    }

    multiplication(x: number, y: number) {
        return x * y;
    }

    division(x: number, y: number) {
        return x / y;
    }
}
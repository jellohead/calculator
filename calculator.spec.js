// Jest test file
const calculator = require('./calculator');

describe('add', () => {
    test.skip('adds 0 and 0', () => {
        expect(calculator.add(0, 0)).toBe(0);
    })

    test.skip('subtracts 1 from 3', () => {
        expect(calculator.subtract(3, 1)).toBe(2);
    })

    test.skip('multiplies 3 and 2', () => {
        expect(calculator.multiply(3, 2)).toBe(6);
    })

    test.skip('divides 4 by 2', () => {
        expect(calculator.divide(4, 2)).toBe(2);
    })

    test.skip('divides 4 by 0 and throws error', () => {
        expect(calculator.divide(4, 0)).toBe("Don't divide by zero");
    })
});
// Jest test file
const calculator = require('./calculator');

describe('add', () => {
    test('adds 0 and 0', () => {
        expect(calculator.add(0, 0)).toBe(0);
    })

    test('subtracts 1 from 3', () => {
        expect(calculator.subtract(3, 1)).toBe(2);
    })

    test('multiplies 3 and 2', () => {
        expect(calculator.multiply(3, 2)).toBe(6);
    })

    test('divides 4 by 2', () => {
        expect(calculator.divide(4, 2)).toBe(2);
    })
});
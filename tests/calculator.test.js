import { add, subtract, multiply, divide } from '../calculator';

test('add 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('add 1.4 + 0.9 to equal 2.3', () => {
    expect(add(1.4, 0.9)).toBe(2.3);
});

test('subtract 10 - 10 to equal 0', () => {
    expect(subtract(10, 10)).toBe(0);
});

test('subtract 3.1 - 6.8 to equal -3.7', () => {
    expect(subtract(3.1, 6.8)).toBe(-3.7);
});

test('multiply 1 * 2 to equal 2', () => {
    expect(multiply(1, 2)).toBe(2);
});

test('multiply 0 * 2 to equal 0', () => {
    expect(multiply(0, 2)).toBe(0);
});

test('multiply 1.5 * 1.5 to equal 2.25', () => {
    expect(multiply(1.5, 1.5)).toBe(2.25);
});

test('divide 2 / 1 to equal 2', () => {
    expect(divide(2, 1)).toBe(2);
});

test('divide 1 / 2 to equal 0.5', () => {
    expect(divide(1, 2)).toBe(0.5);
});

test('divide 2 / 0 to equal 0', () => {
    expect(divide(2, 0)).toBe(0);
});
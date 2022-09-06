import { add, subtract, multiply, divide } from '../calculator';

test('add 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('subtract 10 - 10 to equal 0', () => {
    expect(subtract(10, 10)).toBe(0);
});

test('subtract 3.1 - 6.8 to equal -3.7', () => {
    expect(subtract(3.1, 6.8)).toBe(-3.7);
});
import capitalize from '../capitalize.js';

test('kittens to be Kittens', () => {
    expect(capitalize('kittens')).toBe('Kittens');
});

test('kiTTenS to be Kittens', () => {
    expect(capitalize('kiTTenS')).toBe('Kittens');
});

test('I LIKE KITTENS. to be I like kittens.', () => {
    expect(capitalize('I LIKE KITTENS.')).toBe('I like kittens.');
});

test('"" to be ""', () => {
    expect(capitalize("")).toBe("");
});
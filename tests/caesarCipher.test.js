import caesarCipher from "../caesarCipher";

test('abcd to be bcde', () => {
    expect(caesarCipher('abcd')).toBe('bcde');
});
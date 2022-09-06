import caesarCipher from "../caesarCipher";

test('abcd to be bcde', () => {
    expect(caesarCipher('abcd')).toBe('bcde');
});

test('Hi there! to be Ij uifsf"', () => {
    expect(caesarCipher('Hi there!')).toBe('Ij uifsf"');
});
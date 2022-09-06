import reverseString from "../reverseString";

test('hello to be olleh', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('Oh hi there! to be !ereht ih hO', () => {
    expect(reverseString('Oh hi there!')).toBe('!ereht ih hO');
});

test('"" to be ""', () => {
    expect(reverseString("")).toBe("");
});
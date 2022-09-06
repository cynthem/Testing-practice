import analyzeArray from "../analyzeArray";

test('[1, 2, 3] to equal {average: 2, min: 1, max: 3, length: 3}', () => {
    const expected = {
        average: 2,
        min: 1,
        max: 3,
        length: 3
    };
    
    const data = [1, 2, 3];

    expect(analyzeArray(data)).toEqual(expected);
});

test('[0] to equal {average: 0, min: 0, max: 0, length: 1}', () => {
    const expected = {
        average: 0,
        min: 0,
        max: 0,
        length: 1
    };
    
    const data = [0];

    expect(analyzeArray(data)).toEqual(expected);
});

test('[] to equal 0', () => {
    const expected = 0;
    
    const data = [];

    expect(analyzeArray(data)).toEqual(expected);
});

test('[0.5, 3, 10.3] to equal {average: 4.6, min: 0.5, max: 10.3, length: 3}', () => {
    const expected = {
        average: 4.6,
        min: 0.5,
        max: 10.3,
        length: 3
    };
    
    const data = [0.5, 3, 10.3];

    expect(analyzeArray(data)).toEqual(expected);
});
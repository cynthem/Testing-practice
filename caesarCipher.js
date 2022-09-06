function getCodes(str) {
    let codes = [];
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i) + 1;
        codes.push(code);
    }
    return codes;
}

function codesIntoChars(shiftedCodes) {
    let shiftedString = [];
    for (let i = 0; i < shiftedCodes.length; i++) {
        shiftedString += String.fromCharCode(shiftedCodes[i]);
    }
    return shiftedString;
}

function caesarCipher(str) {
    const codes = getCodes(str);
    const shiftedString = codesIntoChars(codes);
    return shiftedString;
}

caesarCipher('abcd');

export default caesarCipher;
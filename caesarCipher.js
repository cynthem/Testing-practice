function getCodes(str) {
    let codes;
    for (let i = 0; i < str.length; i++) {
        codes += str.charCodeAt(i);
    }
    return codes;
}

function shiftCodes(codes) {
    let shiftedCodes;
    for (let i = 0; i < codes.length; i++){
        shiftedCodes += codes[i] + 1;
    }
    return shiftedCodes;
}

function codesIntoChars(shiftedCodes) {
    let shiftedString;
    for (let i = 0; i < shiftedCodes.length; i++) {
        shiftedString += String.fromCharCode(shiftCodes[i]);
    }
    return shiftedString;
}

function caesarCipher(str) {
    const codes = getCodes(str);
    const shiftedCodes = shiftCodes(codes);
    const shiftedString = codesIntoChars(shiftedCodes);
    return shiftedString;
}

export default caesarCipher;
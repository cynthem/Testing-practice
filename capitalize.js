function capitalize(str) {
    if (str.length === 0) {
        return '';
    }

    const firstLetter = str.slice(0, 1).toUpperCase();
    const allOthers = str.slice(1, str.length).toLowerCase();
    return firstLetter + allOthers;
}

export default capitalize;
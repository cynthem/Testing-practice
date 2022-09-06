function analyzeArray(arr) {
    if (arr.length === 0) {
        return 0;
    }
    
    const totalArr = arr.reduce((prev, current) => prev + current, 0);
    const averageArr = Math.round((totalArr / arr.length) * 10) / 10;
    const minArr = Math.min(...arr);
    const maxArr = Math.max(...arr);
    const lengthArr = arr.length;

    return {
        average: averageArr,
        min: minArr,
        max: maxArr,
        length: lengthArr
    };
}

export default analyzeArray;
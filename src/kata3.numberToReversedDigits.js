const numberToReversedDigits = (number) => {
    const stringed = number.toString();
    let arrayed = stringed.split('');
    arrayed = arrayed.reverse();
    return arrayed.map(n => Number(n));
};

module.exports = numberToReversedDigits;

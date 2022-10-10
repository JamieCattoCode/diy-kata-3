/* eslint-disable prettier/prettier */
const humanCatDogYears = (number) => {
    let cat = 0;
    let dog = 0;
    if (number > 0){
        for (let i = 0; i < number; i++){
            if (i === 0){
                cat += 15;
                dog += 15;
            }
            else if (i === 1){
                cat += 9;
                dog += 9;
            }
            else {
                cat += 4;
                dog += 5;
            }
        }
    }
    return [number, cat, dog];
};

module.exports = humanCatDogYears;

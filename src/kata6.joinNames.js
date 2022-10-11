/* eslint-disable prettier/prettier */
const joinNames = (namesObj) => {
    let out = "";
    for (i=0; i < namesObj.length; i++){
        if (i === namesObj.length-1){
            out += ' & ';
        }
        else if (i > 0){
            out += ', ';
        }
        out += namesObj[i].name;
    }
    return out;
};

module.exports = joinNames;

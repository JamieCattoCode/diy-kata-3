const fizzBuzz = (number) => {
    let output = "";

    if (number % 3 === 0) {
        output += "Fizz";
    }
    if (number % 5 === 0) {
        output += "Buzz";
    }
    if (number % 3 != 0 && number % 5 != 0) {
        output += number;
    }
    return output;
};

module.exports = fizzBuzz;

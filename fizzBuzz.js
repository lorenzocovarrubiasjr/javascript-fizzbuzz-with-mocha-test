exports.fizzBuzz = function(number) {
    if (number < 1) return "Please input a number greater than 0!";
    result = [];
    for(i = 1; i < number +1; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            result.push('FizzBuzz')
        } else if (i % 3 == 0) {
            result.push('Fizz')
        } else if (i % 5 == 0) {
            result.push('Buzz')
        } else {
            result.push(i)
        };
    };
    return result;
};
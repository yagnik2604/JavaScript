function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const anotherfunction = multiplier(2);
// in a double we store another function 
console.log(anotherfunction(5)); // Output: 10

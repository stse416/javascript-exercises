const sumAll = function(intOne, intTwo) {
    if (intOne < 0 || intTwo < 0) return 'ERROR';
    if (!Number.isInteger(intOne) || !Number.isInteger(intTwo)) return 'ERROR';
    if (intOne == intTwo) return 0;
    

    let larger = intOne;
    let smaller = intTwo;
    let sum = 0;

    if (larger < smaller) [larger, smaller] = [smaller, larger];

    for (let i = smaller; i <= larger; i++) sum += i;   

    return sum;
};

// Do not edit below this line
module.exports = sumAll;

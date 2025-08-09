const fibonacci = function(member) {
    if (member < 0) return "OOPS";
    if (member == 0) return 0;
    
    let count = 1;
    let pre = 0;
    let sum = 1;

    while (count < member) {
        let temp = sum;

        sum += pre;
        pre = temp;
        count++;
    }

    return sum;
};

// Do not edit below this line
module.exports = fibonacci;

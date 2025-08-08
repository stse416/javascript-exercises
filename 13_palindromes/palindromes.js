const palindromes = function (str) {
    str = str.toLowerCase();
    const nonLetterDigit = /[^\w\d]/g
    str = str.replaceAll(nonLetterDigit, '');

    let front = 0;
    let last = str.length-1;

    while (front <= last) {
        if (str.charAt(front) !== str.charAt(last)) return false;
        front++;
        last--;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;

// Leap years are years divisible by 4
// Years divisible by 100 are not leap years
// unless also divisible by 400

const leapYears = function(year) {
    if (year % 100 == 0) {
        if (year % 400 == 0) return true;
        return false;
    }

    if (year % 4 == 0) return true;
    return false;
};

// Do not edit below this line
module.exports = leapYears;

const findTheOldest = function(people) {
    function findAge (yearOfBirth, yearOfDeath) {
        yearOfDeath ??= new Date().getFullYear();
        return yearOfDeath - yearOfBirth;
    }

    return people.reduce((oldest, curr) => {
        let age = findAge(curr.yearOfBirth, curr.yearOfDeath);
        return age > findAge(oldest.yearOfBirth, oldest.yearOfDeath) ? curr : oldest;
    })
};

// Do not edit below this line
module.exports = findTheOldest;

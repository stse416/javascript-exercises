const removeFromArray = function(arr, ...values) {
    const setToRemove = new Set(values);
    const newArray = [];

    arr.forEach(ele => {
        if (!setToRemove.has(ele)) newArray.push(ele);
    })

    return newArray;
};

const arr = [1, 2, 3, 4];
console.log(removeFromArray(arr, 3))

// Do not edit below this line
module.exports = removeFromArray;

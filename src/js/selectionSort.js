'use strict';

var array = [4, 5, -2, -13, 9];
console.log(`original array = ${array}`);

var findSmallest = function (array) {
    if (array) {
        var smE = array[0];
        var smEIndex = 0;
        for (let i = 1; i < array.length; i++) {
            if (smE > array[i]) {
                smE = array[i];
                smEIndex = i;
            }
        }
        return smEIndex;
    }
};

var selectionSort = function (array) {
    if (array) {
        var newArray = [];
        var iterations = array.length;
        for (let i = 0; i < iterations; i++) {
            var smallestIndex = findSmallest(array);
            newArray.push(array.splice(smallestIndex, 1)[0]);
        }
        return newArray;
    }
};

console.log(selectionSort(array));
console.log(array);
'use strict';

var array = [1, 3, 7, 15, 65, 122, 145, 150];

var binarySearch = function (array, itemToFind) {
    var low = 0;
    var high = array.length - 1;

    while (low <= high) {
        var mid = Math.floor( (low + high) / 2 );
        console.log('low = ' + low + ' high = ' + high + ' mid = ' + mid);

        if (array[mid] === itemToFind ) { return mid; }

        if (itemToFind < array[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return null;
};


var binarySearchRec = function (array, low, high, itemToFind) {
    if (high >= 1) {
        var mid = Math.floor( (low + high) / 2 );
        console.log('low = ' + low + ' high = ' + high + ' mid = ' + mid);

        if (array[mid] === itemToFind ) { return mid; }

        if (itemToFind < array[mid]) {
            return binarySearchRec(array, 0, mid-1, itemToFind);
        } else {
            return binarySearchRec(array,  mid + 1, high, itemToFind);
        }
    }
    return `not found`;
};

console.log(`item index = ${binarySearchRec(array, 0, array.length-1, 2)}`);


'use strict';

function logArray (array) {
    for (let i = 0; i < array.length; i++) {
        var str = '';
        for (let j = 0; j < array[i].length; j++) {
            str += array[i][j] + '  ';
        }
        console.log(str);
    }
}

var array1 = [[1,2,3,4],[4,5,6,11],[7,8,9,5]];

// WORKS COOL CODE
// function createArray(length) {
//     var arr = new Array(length || 0),
//         i = length;
//
//     if (arguments.length > 1) {
//         var args = Array.prototype.slice.call(arguments, 1);
//         while(i--) {
//             arr[length-1 - i] = createArray.apply(this, args);
//         }
//     }
//
//     return arr;
// }
/**
 * Creates two-dimensional array
 * @param height
 * @param width
 * @return {[]} - created array
 */
function createArray(height, width) {
    var arr = new Array(height || 0);

    for (var i = 0; i < height; i++) {
        arr[i] = new Array(width);
    }
    return arr;
}

/**
 * fill the array manually
 * @param arr
 */
// function fillArrayManually(arr){
// arr[0][0] = 3;
// arr[0][1] = 4;
// arr[0][2] = 10;
//
// arr[1][0] = 5;
// arr[1][1] = -7;
// arr[1][2] = 3;
// }

function fillArrayManually(arr){
arr[0][0] = 1;
arr[0][1] = 2;
arr[0][2] = -3;
arr[0][3] = -4;

arr[1][0] = 2;
arr[1][1] = 5;
arr[1][2] = -4;
arr[1][3] = 0;

arr[2][0] = -3;
arr[2][1] = 1;
arr[2][2] = 3;
arr[2][3] = 5;
}
// function fillArrayManually(arr){
// arr[0][0] = 2;
// arr[0][1] = 5;
// arr[0][2] = 4;
// arr[0][3] = 1;
// arr[0][4] = 20;
//
// arr[1][0] = 1;
// arr[1][1] = 3;
// arr[1][2] = 2;
// arr[1][3] = 1;
// arr[1][4] = 11;
//
// arr[2][0] = 2;
// arr[2][1] = 10;
// arr[2][2] = 9;
// arr[2][3] = 7;
// arr[2][4] = 40;
//
// arr[3][0] = 3;
// arr[3][1] = 8;
// arr[3][2] = 9;
// arr[3][3] = 2;
// arr[3][4] = 37;
// }


function gaussStepOne(arr) {
    for (let i = 1; i <= arr.length -1; i++) {
        for (let j = i; j <= arr.length - 1; j++) {
            var coef = (arr[j][i-1]/arr[i-1][i-1]).toFixed(3);
            for (let k = 0; k < arr[j].length; k++) {
                arr[j][k] = (arr[j][k] - arr[i-1][k]*coef).toFixed(3);
            }
        }
    }
}

var roots = [];
function gaussStepTwo(arr) {
    for (let i = arr.length-1; i >= 0 ; i--) {
        var sum = Number( arr[i][arr.length] ).toFixed(3);
        for (let j = i + 1; j <= arr.length-1 ; j++) {
            sum = sum - Number( arr[i][j]*roots[j] ).toFixed(3);
        }
        roots[i] = (sum/arr[i][i]).toFixed(2);
    }
}

var arr = createArray(3,4);
fillArrayManually(arr);
gaussStepOne(arr);
gaussStepTwo(arr);
logArray(arr);
console.log(`Roots = ` + roots);

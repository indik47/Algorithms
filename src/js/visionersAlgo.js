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

    for (var i = 0; i < width; i++) {
        arr[i] = new Array(width);
    }
    return arr;
}

function fillMatrixLeftHalf(array, dimension, alphabetString) {
    for (let i = 1; i <= dimension - 1; i++) {
        var char = alphabetString[i-1];
        var k = i;
        for (let j = 1; j <= i; j++) {
            array[k][j] = char;
            k--;
        }
    }
    return array;
}

function fillMatrixRightHalf(array, dimension) {
    for (let i = dimension-1; i > 1; i--) {
        var char = array[i-1][1];
        var k = dimension - 1;
        for (let j = i; j <= dimension-1; j++) {
            array[k][j] = char;
            k--;
        }
    }
    return array;
}

function fillMatrixRowsCols(array, str, arrayDimension) {
    array[0][0] = 0;
    for (let i = 1; i < arrayDimension; i++) {
        array[i][0] = str[i-1];
        array[0][i] = str[i-1];
    }
}

function createAlphabetString(startCharCode, len) {
    var str = '';
    for (let i = startChar; i <= startChar + len; i++) {
        str += String.fromCharCode(i);
    }
    return str;
}

function randomizeString(str) {
    var chars = Array.from(str);
    var randomValue;
    for (let i = 0; i < chars.length-1; i++) {
        randomValue = Math.floor(Math.random()*26);
        [chars[i],chars[randomValue]] = [chars[randomValue],chars[i]];
    }
    str = chars.join("");
    return str;
}

/**
 * Cryptoes provided string
 * @param cryptoArray
 * @param originalString
 * @param codeString
 * @return {string}
 */
function crypto(cryptoArray, originalString, codeString) {
    var cryptoString = '';
    codeString = codeString.repeat(26);

    var arrayI;
    var arrayJ;

    Array.from(originalString).forEach( (char,index) => {
        arrayI = char.charCodeAt(0) - (startChar - 1);
        arrayJ = codeString.charCodeAt(index) - (startChar - 1);

        cryptoString +=cryptoArray[arrayI][arrayJ];
    });
    return cryptoString;
}

/**
 * Reverses cryptography of the string
 * @param cryptoArray
 * @param cryptoString
 * @param codeString
 * @return {string}
 */
function deCrypto(cryptoArray, cryptoString, codeString) {
    var deCryptoString = ``;
    codeString = codeString.repeat(25);
    var arrayJ;

    Array.from(cryptoString).forEach((char,index) => {
        arrayJ = codeString.charCodeAt(index) - (startChar - 1);

        for (let i = 1; i < cryptoArray.length; i++) {
            if ( cryptoArray[i][arrayJ] === cryptoString[index] ) {
                deCryptoString += cryptoArray[i][0];
            }
        }
    });
    return deCryptoString;
}

var startChar = 0;
var len = 127;

var alphabetStr = createAlphabetString(startChar, len);
// var alphabetStrRandomized = randomizeString(alphabetStr);
// var chars = Array.from(alphabetStr); //legacy

var arrayDimension = alphabetStr.length;

var matrix = createArray(arrayDimension, arrayDimension);

fillMatrixLeftHalf(matrix, arrayDimension, alphabetStr);
fillMatrixRightHalf(matrix, arrayDimension);
fillMatrixRowsCols(matrix, alphabetStr, arrayDimension);
// logArray(matrix);


var origString = 'I study JS. Hahaha.';
var codeString = 'iamditsstudent';
var cryptedStr = crypto(matrix, origString, codeString);
var deCryptedStr = deCrypto(matrix, cryptedStr, codeString);


console.log(`original str = ` + origString);
console.log(`crypted str = ` + cryptedStr);
console.log(`decrypted str = ` + deCryptedStr);



//  to capitalize each word

// const str =  "how can mirrors be real if our eyes aren't real";
// //const regExp = /(?<=\s)\w/g; // case with not a first word
// const regExp = /(^|\s)\w/g;
//
// const result = str.replace(regExp, (match) => {
//     return match.toUpperCase();
// } );
// console.log(result);

///////////////////////////////////////////
//Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

// function count(str) {
//     return (str.match(/[aeiou]/g)|| []).length;
// }
// console.log(count("fyx"));

////////////////////////////////////////////////
// Write a function called repeat_str which repeats the given string src exactly count times.

// function repeatStr(n, s) {
//    //return (n ===1) ? s : (s + repeatStr(n-1,s)); // or
//     return s.repeat(n); //
// }
// console.log(repeatStr(5, "Hello"));

//////////////////////////////////////////////////////
// Simple, remove the spaces from the string, then return the resultant string.

// const x = "  8a aaaa dddd r     ";
// function noSpace(x){
//     return x.replace(/\s/g, "");
// }
// console.log(noSpace(x));

////////////////////////

// function litres(time) {
//     return Math.floor(time/2);
// }
// console.log(litres(6.75));

///////////////////////////////////
// const str = "Th5ere once w2a2s a s4hi4p that put to sea,";
// function alphabetPosition(text) {
//     let checkedText = text.replace(/[^a-zA-Z]/, "");
//     let result = "";
//     for (let i=0; i<checkedText.length;  i++) {
//         let code = checkedText.toLowerCase().charCodeAt(i);
//         if (code>96 && code< 123) {
//             result += (code-96) + " ";
//         }
//     }
//     return result.slice(0,-1);
// }
// console.log(alphabetPosition(str));

///////////////////////////////////////
// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line.
// Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.
// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.
// Can Vasya sell a ticket to every person and give change if he initially has no money and sells
// the tickets strictly in the order people queue?
// Return YES, if Vasya can sell a ticket to every person and give change with the bills he has
// at hand at that moment. Otherwise return NO.

// const currentQueue = [25, 50, 25, 100, 25, 25, 25, 100, 25, 50, 25, 100, 25, 25, 25, 100, 25, 25, 50, 100];
//
// function tickets(peopleInLine) {
//     let cash25 = [];
//     let cash50 = [];
//     let cash100 = [];
//     let answer = 'NO';
//     let gain = 0;
//     for (let bill of peopleInLine) {
//         switch (bill) {
//             case 25:
//                 cash25.push(25);
//                 // console.log("cash25: " + cash25);
//                 answer = "YES";
//                 break;
//             case 50:
//                 cash50.push(50);
//                 // console.log("cash50: " + cash50);
//                 if (cash25.length > 0) {
//                     cash25.pop();
//                 } else {
//                     return answer = "NO";
//                 }
//                 break;
//             case 100:
//                 cash100.push(100);
//                 // console.log("cash100: " + cash100);
//                 if (cash50.length > 0 && cash25.length > 0) {
//                     cash50.pop();
//                     cash25.pop();
//                 } else if (cash25.length >= 3) {
//                     cash25 = cash25.slice(0, -3);
//                 } else {
//                     return answer = "NO";
//                 }
//                 break;
//         }
//     }
//     gain = cash25.reduce((sum, current) => sum + current, 0) + cash50.reduce((sum, current) => sum + current, 0) + cash100.reduce((sum, current) => sum + current, 0);
//     console.log("total gain:  " + gain);
//     return answer;
// }
//
// console.log(tickets(currentQueue));

//////////////////////////////////////////////
// Given the triangle of consecutive odd numbers:
// Calculate the row sums of this triangle from the row index (starting at index 1)

// function rowSumOddNumbers(n) {
//     let rowOddNum = [];
//     for (let i=0; i<n; i++) {
//         rowOddNum[i] = (i !== 0) ? rowOddNum[i-1]+2 : ((n-1)*n+1);
//     }
//     console.log(rowOddNum);
//    return rowOddNum.reduce((sum, current)=> sum+current);
// }

///0r
// function rowSumOddNumbers(n) {
//     return Math.pow(n, 3);
// }

// console.log(rowSumOddNumbers(5));

//////////////////////////////////////////////////////
// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string,
// the longest possible, containing distinct letters - each taken only once - coming from s1 or s2

// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// function longest(s1, s2) {
//     let newString = Array.from(s1.concat(s2));
//     console.log(newString);
//    let result = [];
//    for (let letter of newString) {
//        if (!result.includes(letter)) {
//            result.push(letter);
//        }
//    }
//    return  result.sort().join("");
// }
//or !!!!!!
// const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')
//  console.log(longest(a,b));

///////////////////////////////////////
// Implement a method that accepts 3 integer values a, b, c. The method should return true if
// a triangle can be built with the sides of given length and false in any other case.

// function isTriangle(a,b,c) {
//     if (a<(b+c) && b<(a+c) && c<(a+b)) {
//         return true;
//     } else {
//         return false;
//     }
// }

//or
// function isTriangle(a,b,c) {
//     return (a<(b+c) && b<(a+c) && c<(a+b));
// }
//
// console.log(isTriangle(1, 2, 2,));

///////////////////////////////////////////
// Your task is to make a function that can take any non-negative integer as an argument and
// return it with its digits in descending order. Essentially, rearrange the digits to create
// the highest possible number.

// function descendingOrder(n){
//   let descendingArr = Array.from(n.toString().split(""));
//   for (let i=0; i<descendingArr.length; i++) {
//       descendingArr[i] = Number(descendingArr[i]);
//   }
//   return  +descendingArr.sort((a,b)=> b-a).join("");
// }
////or
// function descendingOrder(n){
//     return parseInt(String(n).split('').sort().reverse().join(''), 10)
// }
//
// console.log(descendingOrder(59483));

/////////////////////////////////////////////
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and
// be case insensitive. The string can contain any char.
// const str = "";
// str1 = Array.from(str.match(/[o]/gi));
// console.log( str1.length);

// function XO(str) {
//     let strO = str.match(/o/gi);
//     let strX = str.match(/x/gi);
//     console.log(strO);
//     console.log(strX);
//     console.log(strX.length);
//     if (strO === null || strX === null) {
//         return (strO === strX) ? true : false;
//     } else {
//         return (strO.length === strX.length) ? true : false;
//     }
// }

//or
// function XO(str) {
//     var a = str.replace(/x/gi, ''),
//         b = str.replace(/o/gi, '');
//     console.log(a);
//     console.log(a.length);
//     return a.length === b.length;
// }
//
// console.log(XO(""));

////////////////////////////////////////////////
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

// function findShort(s){
//     console.log(s.split(" "));
//     let regExp = /\b\w+?\b/gi;
//     let str = s.match(regExp);
//     str.sort((a,b)=> a.length - b.length).splice(1);
//     return str[0].length;
// }
//
// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

//////////////////////////////////////////////////////
// Complete the function that accepts a string parameter, and reverses each word in the string.
// All spaces in the string should be retained.

// function reverseWords(str) {
//     const replacer = (match  => match.split("").reverse().join(""));
//     return str.replace(/\S+/gi, replacer);
// }
//
// console.log(reverseWords("The quick brown fox jumps over the lazy dog."));

/////////////////////////////////////////////////////////////

//
// function accum(s) {
//   const letterArr = s.toLowerCase().split("");
//   console.log(letterArr);
//   const splitLetterArr = [];
//   for (let i=0; i<letterArr.length; i++) {
//       switch (true) {
//           case (i === 0):
//               splitLetterArr.push(letterArr[i], "-");
//               break;
//           case (i<letterArr.length) :
//               for (let j=0; j<=i; j++) {
//                   splitLetterArr.push(letterArr[i]);
//               }
//               splitLetterArr.push("-");
//       }
//   }
//   const resultStr = splitLetterArr.join("");
//   const replacer = (match) => match.toUpperCase();
//   return resultStr.replace(/(^\w)|(?<=\-)\w/g, replacer).slice(0,-1);
// }
//or
// function accum(s) {
//     return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
// }
// console.log(accum("HbideVbxncC"));

////////////////////////////////////////////////////////////////////////

// Your job is to write a function which increments a string,
// to create a new string.
// If the string already ends with a number,
// the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be
// appended to the new string.
// Examples:
//
// foo -> foo1
//
// foobar23 -> foobar24
//
// foo0042 -> foo0043
//
// foo9 -> foo10
//
// foo099 -> foo100
//
// Attention: If the number has leading zeros the amount of digits
// should be considered.

// function incrementString(str) {
//     const endsNum = str.match(/\d+$/g); // return array with endsNum ["099"] or null
//     console.log(`numbers at the end of str: ${endsNum}`);
//     return (endsNum) ? replacer(str, endsNum) : str + 1;  // if endsNum true go to replacer
// }
//
// function replacer(str, endsNum) {
//     let resStr = String;
//     const lengthNumInitial = endsNum.join('').length;
//     //console.log(typeof endsNum.join(''));
//     console.log( `lengthNumInitial: ${lengthNumInitial}`);
//
//     const num = parseInt(endsNum, 10) + 1;
//     console.log(` increase endsNum +1: ${num}`);
//
//     const lengthNumFinal = num.toString().length;
//     console.log( `lengthNumFinal: ${lengthNumFinal}`);
//
//     if (lengthNumInitial <= lengthNumFinal){
//         resStr = str.replace(endsNum, num);
//         console.log(`resStr: ${resStr}`);
//         return resStr;
//     }
//     else if (lengthNumInitial > lengthNumFinal) {
//         const odds = lengthNumInitial - lengthNumFinal;
//         const addNull = "0".repeat(odds);
//         console.log(`addNull: ${addNull}`);
//
//         const res = addNull + num;
//         console.log(`res: ${res}`);
//
//         console.log(`result: ${str.replace(endsNum, res)}`);
//         return str.replace(endsNum, res)
//     }
//     console.log(`initial str: ${str}`);
// }

////////////////or

// const incrementString = str => str.replace(/[0-8]?9*$/, m => ++m);
//
// console.log(incrementString('foobar099'));

/////////////////////////////////////////////////////////////////
// 1, 246, 2, 123, 3, 82, 6, 41 are the divisors of number 246.
// Squaring these divisors we get: 1, 60516, 4, 15129, 9, 6724, 36, 1681.
// The sum of these squares is 84100 which is 290 * 290.
//
// Task
// Find all integers between m and n (m and n integers such as 1 <= m <= n)
// such that the sum of their squared divisors is itself a square.
//
// We will return an array of subarrays or of tuples (in C an array of Pair)
// or a string. The subarrays (or tuples or Pairs) will have two elements:
// first the number the squared divisors of which is a square and then
// the sum of the squared divisors.
//
//     Example:
// list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
// list_squared(42, 250) --> [[42, 2500], [246, 84100]]
// The form of the examples may change according to the language,
// see "Sample Tests".
//
//     Note
// In Fortran - as in any other language - the returned string is not
// permitted to contain any redundant trailing whitespace: you can use
// dynamically allocated character strings.
/////////////////////////////
function listSquared(m, n) {
    let divisors = [];
    let sumSquaredDiv =0;
    let result = "";

    for (let i=m; i<=n; i++) {
        for (let j=1; j<=i; j++) {
            if (i%j === 0) {
                divisors.push(j);
                sumSquaredDiv += j*j;
            }
        }

        if (Number.isInteger(Math.sqrt(sumSquaredDiv))) {
            result += i + "," + sumSquaredDiv + ",";
        } else {
            //console.log(`sumSquaredDiv: ${sumSquaredDiv}`);
            sumSquaredDiv = 0;
            divisors.length = 0;
        }
        //console.log(`i: ${i}`);
    }

    let perChunk = 2; // items per chunk

    let inputArray = result.split(',').slice(0, -1);
    console.log(inputArray);

    return inputArray.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index/perChunk);

        if(!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = []; // start a new chunk
        }

        resultArray[chunkIndex].push(parseInt(item));

        return resultArray;
    }, []);

    // console.log(resultF); // result: [['a','b'], ['c','d'], ['e']]
    // console.log(Array.isArray(resultF));

}

console.log(listSquared(42, 250));
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

const currentQueue = [ 25,50,25,100,25,25,25,100,25,50,25,100,25,25,25,100,25,25,50,100];

function tickets(peopleInLine){
    let cash25 = [];
    let cash50 = [];
    let cash100 = [];
    let answer = 'NO';
    for ( let bill of peopleInLine) {
        switch (bill) {
            case 25:
                cash25.push(25);
                // console.log("cash25: " + cash25);
                answer = "YES";
                break;
            case 50:
                cash50.push(50);
                // console.log("cash50: " + cash50);
                if (cash25.length>0) {
                    cash25.pop();
                } else {
                    return answer = "NO";
                }
               break;
            case 100:
                cash100.push(100);
                // console.log("cash100: " + cash100);
                if (cash50.length>0 && cash25.length>0) {
                    cash50.pop();
                    cash25.pop();
                }
                else if (cash25.length>=3) {
                    cash25 = cash25.slice(0, -3);
                }
                else {
                    return answer = "NO";
                }
                break;
        }
    }
    return answer;
}
console.log(tickets(currentQueue));
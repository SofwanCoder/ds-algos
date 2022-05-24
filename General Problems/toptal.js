
// QUESTION 1:

// A function takes a string with set of character pairs seperated by comma,
// and each pair is seperated by '-', e.g "5-5,5-5,4-4,5-5,5-5,5-5,5-5,5-5,5-5,5-5"

// A matching pair is when the ending character of a pair is same as the beginning character of the next pair.

// Find the longest occuring matching pair in the input string.
// If no matching pair exists, return 1

// Test Cases:

// domino("6-3") // should return 1
// domino("1-2,1-2") // should return 1
// domino("1-1,3-5,5-2,2-3,2-4") // should return 3.
// domino("3-2,2-1,1-4,4-4,5-4,4-2,2-1") // 4
// domino("5-5,5-5,4-4,5-5,5-5,5-5,5-5,5-5,5-5,5-5") // 7
// domino("1-1,3-5,5-5,5-4,4-2,1-3") // 4
// domino("1-2,2-2,3-3,3-4,4-5,1-1,1-2") // 3


// QUESTION 2:

// A function takes an input string, S and a number N,
// The string contains a mix pattern of '+' and '-', 
// e.g: "+++-++-++--+-++++-+--++-++-+-++++-+++---"

// Subtracting the total number of '-' from total number of '+' gives the Balance.

// You can modify the string by removing characters from the rightmost part of the string.

// Return the minimum number of modification that can be done to the string to have a Balance
// that is greater than or equal to N.


// Test Cases:

// console.log(possibleBalance("+++-++-++--+-++++-+--++-++-+-++++-+++--", 12)) // 1
// console.log(possibleBalance("+++-++-++--+-++++-+--++-++-+-++++-+++--", 13)) // 2
// console.log(possibleBalance("+++-++-++--+-++++-+--++-++-+-++++-+++--", 14)) // -1
// possibleBalance("+++---", 3) // 3
// possibleBalance("+++-+---", 3) // 3
// possibleBalance("----+-", -2) // 4




// function domino(str) {
//     let arr = str.split(',')

//     let solution = 0
//     let count = 1

//     if (arr.length <= 1) return 1

//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i][2] === arr[i+1][0] ) {
//             count += 1
//         } else {
//             solution = count > solution ? count : solution
//             count = 1
//         }
//     }

//     solution = count > solution ? count : solution

//     return solution || 1
// }






// SOLUTION 2: 

// function possibleBalance(str, N) {
//     let arr = str.split('')
//     let minStep = 0

//     let numOfPlus = 0
//     let numOfMinus = 0

//     for (let i = 0; i< arr.length; i++) {
//         arr[i] === '+' ? numOfPlus++ : numOfMinus++
//     }

//     let balance = numOfPlus - numOfMinus

//     if (balance >= N) return 0

//     while (arr.length) {
//         let removedChar = arr.pop()

//         removedChar === '+' ? numOfPlus-- : numOfMinus--

//         balance = numOfPlus - numOfMinus
//         minStep++

//         if (balance >= N) return minStep
//     }

//     return -1

// }


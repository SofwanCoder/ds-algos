// You are given a dictionary of words and a large input string. 
// You have to find out whether the input string can be completely segmented into the words of a given dictionary. 
// The following two examples elaborate on the problem further.

// Given a dictionary of words.

// [ apple,
// apple,
// pear,
// pie ]
// Input string of “applepie” can be segmented into dictionary words.

// apple
// pie
// Input string “applepeer” cannot be segmented into dictionary words.

// assume that string is made up of just 2 words: sol 1
// assume that string is made of multiple words: sol 2

function findStringSegmentTwoWords(arr, str) {
    let result = false

    for (let i = 0; i < str.length; i++) {
        const firstWord = str.substring(0, i)
        const secondWord = str.substring(i)

        if (arr.includes(firstWord)) {
            if (secondWord) {
                if (arr.includes(secondWord)) {
                    result = true
                } else {
                    result = findStringSegmentTwoWords(arr, secondWord)
                }
            } else {
                result = true
            }
        }
    }

    return result
}

function findStringSegment(arr, str) {
    let result = false

    for (let i = 0; i <= str.length; i++) {

        if (arr.includes(str.substring(0, i))) {
            if (str.substring(i)) {
                result = findStringSegment(arr, str.substring(i))
            } else {
                result = true
            }
        }
    }

    return result
}

console.log('Result: ', findStringSegment(['apple', 'apple', 'pear', 'pie'], 'applepearpieapple'))
console.log('Result: ', findStringSegmentTwoWords(['apple', 'apple', 'pear', 'pie'], 'applepeer'))
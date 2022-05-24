// Approach 1:

let Word = 'ms'

function isPalindrome(str) {
    const len = str.length

    for (let i = 0; i < len/2; i++) {
        if (str[i] !== str[len - (i+1)]) {
            return false
        }
    }

    return true
}

function isPalindromeN(str) {
    const len = str.length

    let reversed_word = ''

    for (let i = 1; i <= len; i++) {
        reversed_word += str[len - i]
    }

    // for (let i = len; i >= 0; i--) {
    //     reversed_word += str[len - 1]
    // }

    if (str === reversed_word) {
        return true
    } else {
        return false
    }
}

console.log('Is word a palindrome? ', isPalindrome(Word))
console.log('Is word a palindrome? ', isPalindromeN(Word))
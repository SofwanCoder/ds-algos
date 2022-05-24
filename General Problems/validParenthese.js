// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
// determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

var isValid = function(s) {
    const closingParentheses = [')', '}', ']']
    const openingParentheses = ['(', '{', '[']

    const tracker = []

    for (let character of s) {
        if (openingParentheses.includes(character)) {
            tracker.push(character)
        } else if (closingParentheses.includes(character)) {
            if (closingParentheses.indexOf(character) ===                      openingParentheses.indexOf(tracker[tracker.length - 1])) {
                tracker.pop()
            } else {
                return false
            }
        }
    }

    return !!!tracker.length

};
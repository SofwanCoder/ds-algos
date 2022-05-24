// Given an array of positive integers arr[] and a sum x, 
// find all unique combinations in arr[] where the sum is equal to x. 
// The same repeated number may be chosen from arr[] unlimited number of times. 
// Elements in a combination (a1, a2, …, ak) must be printed in non-descending order. 
// (ie, a1 <= a2 <= … <= ak). 
// The combinations themselves must be sorted in ascending order, 
// i.e., the combination with smallest first element should be printed first. 
// If there is no combination possible the print “Empty” (without quotes).

// Examples: 

// Input : arr[] = 2, 4, 6, 8 
//             x = 8
// Output : [2, 2, 2, 2]
//          [2, 2, 4]
//          [2, 6]
         
// Examples: 

// Input : arr[] = 2, 4, 6, 8 
//             x = 8
// Output : [2, 2, 2, 2]
//          [2, 2, 4]
//          [2, 6]
//          [4, 4]
//          [8]

function findCombinations(arr, sum) {
    let solution = []
    let temp = []
    // first remove duplicate in array
    const set = new Set([...arr])
    arr = [...set]

    arr.sort((a, b) => a-b, 0)

    findNumbers(arr, sum, solution, temp, 0)

    return solution
}

function findNumbers(arr, sum, sol, temp, index) {
    if (sum === 0) {
        sol.push([...temp])
        return
    }

    for (let i = index; i < arr.length; i++) {
        let diff = sum - arr[i]

        if (diff >= 0) {
            temp.push(arr[i])
            // console.log(temp)

            findNumbers(arr, diff, sol, temp, i)

            // backtrack
            temp.splice(temp.indexOf(arr[i]), 1)
        }
    }
}

console.log('Sum combinations from Array: ', findCombinations([2, 4, 6, 8], 8))


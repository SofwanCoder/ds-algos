// Suppose we have coin denominations of [1, 2, 5] and the total amount is 7. 
// We can make changes in the following 6 ways

// i.e denomination -> [1, 2, 5]
//     change amount -> 7
//     sol -> 6

// 1 1 1 1 1 1 1
// 1 1 1 1 1 2
// 1 1 1 2 2
// 1 2 2 2
// 1 1 5
// 2 5

// Using dynamic programing: 
// Optimal solution of a problem at hand can be gotten from the optimal solution of it's sub-problems
// and the overlapping subproblems too

var findWaysToMakeChance = (amount, denominations) => {
    // Make a solutions array for amounts leading up to the target amount from 0
    // indexes rep x amount leading up to target amount
    // array values rep x amount solution
    let solutions = new Array(amount + 1).fill(0)
    // console.log(solutions) 

    solutions[0] = 1

    for (let i = 0; i < denominations.length; i++) {
        for (let j = denominations[i]; j <= amount; j++) {
            solutions[j] += solutions[j - denominations[i]]
            // console.log('second ', solutions)
        }
    }

    return solutions[solutions.length - 1]
}

console.log('Solution: ', findWaysToMakeChance(7, [1, 2, 5]))


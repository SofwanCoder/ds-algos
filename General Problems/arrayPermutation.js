// Given an array nums of distinct integers, return all the possible permutations. 
// You can return the answer in any order.
 

// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Example 2:

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]
// Example 3:

// Input: nums = [1]
// Output: [[1]]


function permuteArr(nums) {
    let sol = []

    if (!nums.length) return []
    if (nums.length === 1) return [nums]

    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i]
        let remainingNums = nums.slice(0, i).concat(nums.slice(i+1))

        let permutedRemainings = permuteArr(remainingNums)

        for (let j = 0; j < permutedRemainings.length; j++) {
            let permuted = [currentNum].concat(permutedRemainings[j])

            sol.push(permuted)
        }
    }

    return sol
}

console.log('Permuted arr result: ', permuteArr([1,2,3,4]))
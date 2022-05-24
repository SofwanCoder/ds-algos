// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

 
// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

function threeSumsNSqr(nums, target) {
    if (!nums || nums.length < 2) {
        return []
    }

    nums.sort((a, b) => a - b, 0)

    let pair = []
    let set = new Set()

    for (let i = 0; i < nums.length-2; i++) {
        let j = i+1
        let k = nums.length - 1

        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k]

            if (sum === target) {

                let str = `${nums[i]} : ${nums[j]} : ${nums[k]}`

                if (!set.has(str)) {
                    pair.push([nums[i], nums[j], nums[k]])
                    set.add(str)
                } 

                j++
                k--
            }
            
            else if (sum < target) {
                j++
            } 
            
            else {
                k--
            }
        }

    }

    return pair
};
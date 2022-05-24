// Largest Sum Contiguous Subarray

// Write an efficient program to find the sum of contiguous subarray 
// within a one-dimensional array of numbers that has the largest sum. 

// eg. 
// input = [-2, -3, 4, -1, -2, 1, 5, -3]
// output = 4+(-1)+(-2)+1+5 = 7

// Solution: using kadane-algorithm

var maxSubArraySum = (arr) => {
    let max_sum = Number.MIN_VALUE
    let contiguous_sum = 0

    for (let i = 0; i < arr.length; i++) {
        contiguous_sum += arr[i]

        if (max_sum < contiguous_sum) {
            max_sum = contiguous_sum
        }

        if (contiguous_sum < 0) {
            contiguous_sum = 0
        }
        
    }

    return max_sum
}

//  Another approach

function maxSubarraySum(arr) {
    let max_ending_here = 0, max_so_far = Number.MIN_VALUE;

    for (let i = 0; i < arr.length; i++) {

        // include current element to previous subarray only
        // when it can add to a bigger number than itself.
        if (arr[i] <= max_ending_here + arr[i]) {
            max_ending_here += arr[i];
        }

        // Else start the max subarray from current element
        else {
            max_ending_here = arr[i];
        }
        if (max_ending_here > max_so_far) {
            max_so_far = max_ending_here;
        }
    }

    return max_so_far;
}

// To get the subarray itself, you get the start from where the contiguous is updated and
// get the end from where the max_sum is updated

console.log('Max subarray sum = ', maxSubArraySum([-2, -3, 4, -1, -2, 1, 5, -3]))
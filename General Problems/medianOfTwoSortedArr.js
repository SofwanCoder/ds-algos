// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

 

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

var findMedianSortedArrays = function(nums1, nums2) {
    let m = nums1.length
    let n = nums2.length

    if (m || n) {
        if (!m) {
            return findMedian(nums2)
        }

        if (!n) {
            return findMedian(nums1)
        }

        // let joinedArr = nums1.concat(nums2)

        // joinedArr.sort((a, b) => a-b, 0)
        let sortedJoinedArr = []

        while (m || n) {

            if (m && n) {
                if (nums1[0] < nums2[0]) {
                    sortedJoinedArr.push(nums1.shift())
                } else if(nums1[0] > nums2[0]) {
                    sortedJoinedArr.push(nums2.shift())
                } else {
                    sortedJoinedArr.push(nums1.shift())
                    sortedJoinedArr.push(nums2.shift())
                }
            } else if (m) {
                sortedJoinedArr = sortedJoinedArr.concat(nums1)
                break
            } else {
                sortedJoinedArr = sortedJoinedArr.concat(nums2)
                break
            }

            m = nums1.length
            n = nums2.length
        }

        return findMedian(sortedJoinedArr)
    } else {
        return 0
    }
    
};

function findMedian(arr) {
    const n = arr.length

    if (n % 2) {
        return arr[(n - 1) / 2]
    } else {
        let median = (arr[(n/2) - 1] + arr[n/2]) / 2
        return  median
    }
}

console.log(findMedianSortedArrays([1,2], [3,4, 5, 6]))
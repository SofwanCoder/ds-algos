function findSumPairNSqr(arr, target) {

    for (let i = 0; i < arr.length; i++) { // O(N^2)
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                console.log(true)
                return true
            }
        }
    }

    console.log(false)
    return false
}

function findSumPairNLogN(arr, target) {
    let low = 0, 
        high = arr.length - 1;

    arr.sort((a, b) => a-b) // O(NlogN)

    while(low < high) { // O(logN)
        const currentPairSum = arr[low] + arr[high]
        
        if (currentPairSum === target) {
            // console.log(true)
            return true
        }
        else if (currentPairSum > target) {
            high -= 1
        }
        else if (currentPairSum < target) {
            low += 1
        }
    }

    // console.log(false)
    return false
}


function findSumPairN(arr, target) {
    let setOfComplements = new Set() // Sets include only unique items

    for (let i = 0; i < arr.length; i++) {
        if(setOfComplements.has(arr[i])) {
            // console.log(true)
            return true
        }

        setOfComplements.add(Math.abs(arr[i] - target))
    }

    // console.log(false)
    return false
}

findSumPairNSqr([5,7,1,2,8,4,3], 10)
findSumPairNLogN([5,7,1,2,8,4,3], 10)
findSumPairN([5,7,1,2,8,4,3], 19)
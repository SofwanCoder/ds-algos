function findMissingNumberNaive(arr, n) {
    if (arr.length === n) return 0

    const sortedArr = [...arr].sort((a, b) => a-b) // O(NlogN)

    for (let i = 1; i < sortedArr.length; i++) { // O(N)
        if (sortedArr[i]-1 === sortedArr[i-1]) {
            continue;
        } else {
            return sortedArr[i]-1
        }
    }

    return arr.length + 1
}

function findMissingNumberAP(arr, n) {
    const expectedSum = (n * ( n + 1 ) ) / 2 

    const actualSum = arr.reduce((a, b) => a+b, 0) // O(N)

    return expectedSum - actualSum
}

console.log("Result: ")
console.log(findMissingNumberNaive([3,7,1,2,4,8,5,6], 8))
console.log(findMissingNumberAP([3,7,1,2,4,8,5,6], 8))

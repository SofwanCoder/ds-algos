function binarySearch(arr, target) {
    let sortedArr = [...arr.sort()]

    let low = 0
    let high = sortedArr.length - 1

    while(low <= high) {
        const mid = Math.ceil((low + high) / 2)

        if (sortedArr[mid] < target) {
            low = mid + 1
        } else if (sortedArr[mid] > target) {
            high = mid - 1
        } else {
            return mid;
        }

    }

    return null
}

const array = [1, 3, 5, 7, 9]

console.log(binarySearch(array, 3), '\n')
console.log(binarySearch(array, -1), '\n')
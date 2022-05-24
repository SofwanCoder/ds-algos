function quickSort(arr) {
    if (arr.length < 2) return arr

    const pivot = arr[0]

    const lesserThanPivotArr = []
    const greaterThanPivotArr = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            lesserThanPivotArr.push(arr[i])
        } else if (arr[i] > pivot) {
            greaterThanPivotArr.push(arr[i])
        }
    }

    return quickSort(lesserThanPivotArr) + pivot + quickSort(greaterThanPivotArr)
}

console.log('Sorted: ', quickSort([2, 4, 5, 1, 10]))
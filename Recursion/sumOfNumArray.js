function sumArr(arr) {
    if (!arr.length) {
        return 0
    } else {
        const num = arr.shift()
        return num + sumArr(arr)
    }
}

// console.log('Sum: ', sumArr([11, 2, 4, 7]))
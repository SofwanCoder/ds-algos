function mergeTwoSortedList(arr1, arr2) {
    let mergedList = []

    if (!arr1.length) {
        return arr2
    } else if (!arr2.length) {
        return arr1
    }

    for (let i = 0; i <= arr1.length; i++ ) {
        if (arr1[i]) {
            if (arr2[i]) {
                if (arr1[i] < arr2[i]) {
                    mergedList = mergedList.concat([arr1[i], arr2[i]])
                } else {
                    mergedList = mergedList.concat([arr2[i], arr1[i]])
                }
            } else {
                mergedList = mergedList.concat(arr1.slice(i))
                break;
            }
        } else {
            mergedList = mergedList.concat(arr2.slice(i))
            break;
        }
    }

    return mergedList
}

console.log('Result: ', mergeTwoSortedList([4, 8, 15, 19], [7, 9, 10, 16]))

// TODO: Solve that for Linked List
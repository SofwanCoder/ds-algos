//O(M^2 * N)

function hasOneDiff(A, B) {
    if (A.length !== B.length) return false

    let diff = 0;

    for (let i = 0; i < A.length; i++) {
        if (A[i] !== B[i]) diff += 1

        if (diff > 1) return false
    }
    console.log(solutions) 
    if (diff === 1) {
        return true
    } else {
        return false
    }
}

function findLadderLength(beginWord, endWord, wordList) {
    let dictSet = new Set([...wordList])

    if (!(dictSet.has(beginWord) || dictSet.has(endWord)) || 
        (beginWord === endWord)) {
        return 0
    }

    let queue = [], level = 1
    
    queue.push(beginWord)
    dictSet.delete(beginWord)

    while (queue.length) {
        curr = queue[0]

        queue.shift()

        if (hasOneDiff(curr, endWord)) {
            return level + 1
        } else if (dictSet.size === 1) {
            return 0
        }

        for (let item of dictSet) {
            if (hasOneDiff(curr, item)) {
                queue.push(item)
                level += 1
                dictSet.delete(item)
                break
            } else {
                if (item === endWord) return (level + 1)
            }
        }
    }

    return 0

}

console.log('Word ladder count: ', findLadderLength('hit', 'cog', ["hot","dot","dog","lot","log","cog"]))
// console.log('Word ladder count: ', findLadderLength('fool', 'sage', ["cool","pool","poll","foil","fail","pole", "pope", "pale", "page", "sage", "sale", "fall"]))


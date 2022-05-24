function revWordsInSentenceN(sent) {
    // split sentence into array

    sent = sent.split(' ')

    let result = ''

    for (let i = sent.length - 1; i >= 0; i--) {
        result += `${sent[i]} `
    }

    return result.trim()
}

console.log('Reversed sentence: ', revWordsInSentenceN(' I love   programming'))


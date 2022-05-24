// The '>' means preceds, and every element in thr array are conditions meaning
// 'A>B' => A preceds B in the output String.

// e.g. findWord(['P>E', 'E>R', 'R>U']) : PERU
//      findWord(['I>N', 'A>I', 'P>A', 'S>P']) : SPAIN
//      findWord(['U>N', 'G>A', 'R>Y', 'H>U', 'N>G', 'A>R']) : HUNGARY

var findWord = (arr) => {
    // split the array and store the suceeding letter against the preceding using a map

    let hm = new Map()

    for (let i = 0; i < arr.length; i++) {
        const [first, second] = arr[i].split('>')

        hm.set(first, [second, true])
    }

    // find head
    for (let j of hm.keys()) {
        const [suceding, _] = hm.get(j)

        if (hm.has(suceding)) {
            hm.set(suceding, [hm.get(suceding)[0], false])
        }
    }

    let head = ''

    for (let k of hm.keys()) {
        if (hm.get(k)[1]) {
            head = k
            break
        }
    }


    let word = head
    while(head) {
        let next = hm.get(head)[0]

        word += next

        if (hm.has(next)) {
            head = next
        } else {
            head = null
        }
    }

    return word
}

// you can have 2 maps and have a copy of prev letters, that way, we will eliminate one loop to get head.
// Check starred messages on Whatsapp

console.log('WORD: ', findWord(['I>N', 'A>I', 'P>A', 'S>P']))
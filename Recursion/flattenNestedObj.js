function flattenNestedObj(obj) {
    const result = {}

    for (const i in obj) {
        if (typeof(obj[i]) === 'object' && !Array.isArray(obj[i])) {
            const tempObj = flattenNestedObj(obj[i])

            for (const j in tempObj) {
                result[i + '.' + j] = tempObj[j]
            }
        } else {
            result[i] = obj[i]
        }
    }

    return result
}

const obj = {
    name: 'Adams',
    age: 22,
    contact: {
        email: 'drkeem',
        phone: 9016860504,
        social: {
            twitter: 'Cocacoder',
            insta: 'dev_inite',
        }
    },
    proficiency: {
        feDev: 'expert',
        beDev: 'basic'
    }
}

console.log('Flattened object: ', flattenNestedObj(obj))
function substrCount(n, s) {
    let count = n
    let index = 0
    s = s.split('')
    for (let i = 0; i < s.length; i++) {
        if (s[i + 1] && s[i + 2] && s[i] === s[i + 2] && s[i + 1] !== s[i]) {
            count++
        }
    }
    let lengthLoop = 0
    for (let i = 0; i < s.length; i++) {
        lengthLoop += (s.length - i - 1)
    }
    let runningStrings = {}
    index = 0
    let indexLastCharacter = s.length
    for (let j = 1; j < lengthLoop + 1; j++) {
        runningStrings[j] = [...new Set(s.slice(index, indexLastCharacter))]
        indexLastCharacter--
        if (indexLastCharacter === index + 1) {
            indexLastCharacter = s.length
            index++
        }
    }
    for (const property in runningStrings) {
        if (runningStrings[property].length === 1) {
            count++
        }
    }
    return count
}

// console.log(substrCount(5, 'asasd'))
console.log(substrCount(4, 'aaaa'))

// get individual characters
// make an array to fill with... 
// 3-character strings
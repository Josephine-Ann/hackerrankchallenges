function substrCount(n, s) {
    let count = n
    s = s.split('')
    let lengthLoop = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i + 1] && s[i + 2] && s[i] === s[i + 2] && s[i + 1] !== s[i]) {
            count++
        }
        lengthLoop += (s.length - i - 1)
    }
    let runningStrings;
    let index = 0
    let indexLastCharacter = s.length
    for (let j = 1; j < lengthLoop + 1; j++) {
        runningStrings = [...new Set(s.slice(index, indexLastCharacter))]
        if (runningStrings.length === 1) {
            count++
        }
        indexLastCharacter--
        if (indexLastCharacter === index + 1) {
            indexLastCharacter = s.length
            index++
        }
    }
    return count
}

// console.log(substrCount(5, 'asasd'))
console.log(substrCount(4, 'aaaa'))
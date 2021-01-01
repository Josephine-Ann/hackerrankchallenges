function substrCount(n, s) {
    let count = n
    let threeChar = []
    let index = 0
    s = s.split('')
    s.forEach(element => {
        if (s[index + 1] && s[index + 2]) {
            threeChar.push([element, s[index + 1], s[index + 2]])
        }
        index++
    });
    threeChar.forEach(element => {
        if (element[0] === element[2] && element[0] !== element[1]) {
            count++
        }
    })
    let lengthLoop = 0
    for (let i = 0; i < s.length; i++) {
        lengthLoop += (s.length - i - 1)
    }
    let runningStrings = {}
    index = 0
    let indexLastCharacter = s.length
    for (let j = 1; j < lengthLoop + 1; j++) {
        runningStrings[j] = s.slice(index, indexLastCharacter)
        indexLastCharacter--
        if (runningStrings[j].length === 2) {
            indexLastCharacter = s.length
            index++
        }
    }
    for (const property in runningStrings) {
        runningStrings[property] = [...new Set(runningStrings[property])]
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
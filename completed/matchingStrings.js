function matchingStrings(strings, queries) {
    let indexOfStrings = 0
    let indexOfQueries = 0
    let count = 0
    let counts = []
    let repetitions = queries.length + (strings.length * queries.length)
    for (let i = 0; i < repetitions; i++) {
        console.log('strings ' + strings[indexOfStrings])
        if (strings[indexOfStrings] === queries[indexOfQueries]) {
            count++
        }
        if (indexOfStrings === strings.length - 1) {
            counts.push(count)
            count = 0
            indexOfStrings = 0
            indexOfQueries++
            console.log('queries ' + queries[indexOfQueries])
        } else {
            indexOfStrings++
        }
        if (queries[indexOfQueries] === undefined) {
            i = repetitions
        }
    }
    return counts
}

// console.log(matchingStrings(['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab']))
console.log(matchingStrings(['def', 'de', 'fgh'], ['de', 'lmn', 'fgh']))


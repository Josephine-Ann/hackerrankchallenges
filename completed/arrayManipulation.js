function arrayManipulation(n, queries) {
    let frequencyCounterOne = new Map()
    let totalIterations = (queries.length) * n
    let indexOfQuery = 0
    let index = 1
    let numberOfItemsToAddTo = 0
    let indexNumberToStartCreating = 0
    while (totalIterations > 0) {
        if (!indexNumberToStartCreating || indexNumberToStartCreating < 1) {
            indexNumberToStartCreating = queries[indexOfQuery][0]
        }
        if (numberOfItemsToAddTo === 0) {
            numberOfItemsToAddTo = queries[indexOfQuery][1] - queries[indexOfQuery][0] + 1
            totalIterations -= (n - numberOfItemsToAddTo)
        }
        frequencyCounterOne[indexNumberToStartCreating] ? frequencyCounterOne[indexNumberToStartCreating] = frequencyCounterOne[indexNumberToStartCreating] + queries[indexOfQuery][2] : frequencyCounterOne[indexNumberToStartCreating] = queries[indexOfQuery][2]
        if (index === numberOfItemsToAddTo) {
            indexOfQuery++
            indexNumberToStartCreating = -1
            index = 0
            numberOfItemsToAddTo = 0
        }
        index++
        indexNumberToStartCreating++
        totalIterations--
    }
    return Math.max(...Object.values(frequencyCounterOne))
}


console.log(arrayManipulation(10, [[2, 6, 8], [3, 5, 7], [1, 8, 1], [5, 9, 15]]))
// console.log(arrayManipulation(5, [[1, 2, 100], [2, 5, 100], [3, 4, 100]]))
// console.log(arrayManipulation(10, [[1, 5, 3], [4, 8, 7], [6, 9, 1]]))

// 2
// 5
// 2 1 5 3 4
// 5
// 2 5 1 3 4
// Sample Output

// 3
// Too chaotic
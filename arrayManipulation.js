function arrayManipulation(n, queries) {
    let frequencyCounterOne = new Map()
    let numbers = Array.from({ length: n }, (x, i) => i + 1);
    numbers.forEach((number) => {
        frequencyCounterOne[number] = 0
    })
    let ultimateArray = []
    queries.forEach((query) => {
        ultimateArray.push((numbers.filter(num => num >= query[0] && num <= query[1])))
    })
    ultimateArray = [].concat(...ultimateArray)
    let indexOfQuery = 0
    let index = 1
    let numberOfItemsToAddTo = 0
    ultimateArray.forEach((num) => {
        numberOfItemsToAddTo = queries[indexOfQuery][1] - queries[indexOfQuery][0] + 1
        frequencyCounterOne[num] = frequencyCounterOne[num] + queries[indexOfQuery][2]
        if (index === numberOfItemsToAddTo) {
            indexOfQuery++
            index = 0
        }
        index++
    })
    return Math.max(...Object.values(frequencyCounterOne))
}


console.log(arrayManipulation(10, [[2, 6, 8], [3, 5, 7], [1, 8, 1], [5, 9, 15]]))
// console.log(arrayManipulation(5, [[1, 2, 100], [2, 5, 100], [3, 4, 100]]))
// console.log(arrayManipulation(10, [[1, 5, 3], [4, 8, 7], [6, 9, 1]]))

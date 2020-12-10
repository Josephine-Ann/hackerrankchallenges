function arrayManipulation(n, queries) {
    function arrayManipulation(n, queries) {
        let queryIndex = 1
        let number;
        let frequencyCounterOne = {}
        while (queryIndex <= n) {
            frequencyCounterOne[queryIndex] = 0
            queryIndex++
        }
        let arrayInfo = {};
        let result;
        let index = 10
        let ultimateArray = []
        queries.forEach((query) => {
            number = query[2]
            ultimateArray.push(new Array((query[1] + 1) - query[0]).fill().map((d, i) => i + query[0]))
            index += 10
        })
        let indexOfArray = 0
        ultimateArray.forEach((item) => {
            item.push([queries[indexOfArray][2]])
            indexOfArray++
        })
        indexOfArray = 0
        ultimateArray = [].concat(...ultimateArray)
        let queryCount = 0
        let numbersToAdd = ultimateArray.filter(item => typeof item === 'object')
        numbersToAdd = [].concat(...numbersToAdd)
        let objectSumValues = {}
        let adding;
        ultimateArray.forEach((item) => {
            if (typeof item !== 'object' && !objectSumValues[item]) {
                objectSumValues[item] = 0
            }
            adding = numbersToAdd[queryCount]
            if (typeof ultimateArray[indexOfArray + 1] !== 'object' && typeof item !== 'object') {
                objectSumValues[item] = objectSumValues[item] + adding
            } else if (typeof ultimateArray[indexOfArray + 1] === 'object' && typeof item !== 'object') {
                objectSumValues[item] = objectSumValues[item] + adding
                queryCount++
            }
            indexOfArray++
        })
        let finalArray = Object.values(objectSumValues)
        return Math.max(...finalArray)
    }
}

console.log(arrayManipulation(10, [[2, 6, 8], [3, 5, 7], [1, 8, 1], [5, 9, 15]]))
// console.log(arrayManipulation(5, [[1, 2, 100], [2, 5, 100], [3, 4, 100]]))
// console.log(arrayManipulation(10, [[1, 5, 3], [4, 8, 7], [6, 9, 1]]))

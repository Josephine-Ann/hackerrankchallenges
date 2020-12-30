function minimumBribes(q) {
    q.reverse()
    const frequencyCounterOne = {}
    let chaotic = false
    let index = q.length
    let erroneousOne;
    let erroneousTwo;
    let erroneousThree;
    let bribes = 0
    q.forEach((element) => {
        frequencyCounterOne[index] = element
        index--
    });
    let keyName = q.length
    let otherIndex = 0
    q.forEach((item) => {
        if (item > keyName && (item - keyName >= 3)) {
            chaotic = true
        } else if (item > keyName) {
            if (item - keyName === 1) {
                erroneousOne = frequencyCounterOne[keyName]
                erroneousTwo = q[otherIndex - 1]
                erroneousThree = q[otherIndex - 2]
                q[otherIndex] = erroneousTwo
                q[otherIndex - 1] = erroneousOne
                bribes++
            }
            if (q[otherIndex - 1] < q[otherIndex - 2] && item - keyName === 2) {
                erroneousOne = frequencyCounterOne[keyName]
                erroneousTwo = q[otherIndex - 1]
                erroneousThree = q[otherIndex - 2]
                q[otherIndex] = erroneousTwo
                q[otherIndex - 1] = erroneousThree
                q[otherIndex - 2] = erroneousOne
                bribes += 2
            }
            if (q[otherIndex - 1] > q[otherIndex - 2] && item - keyName === 2) {
                bribes += 3
                erroneousOne = frequencyCounterOne[keyName]
                erroneousTwo = q[otherIndex - 1]
                erroneousThree = q[otherIndex - 2]
                q[otherIndex] = erroneousThree
                q[otherIndex - 1] = erroneousTwo
                q[otherIndex - 2] = erroneousOne
            }
        }
        keyName--
        otherIndex++
    })
    return chaotic ? console.log('Too chaotic') : console.log(bribes)
}

minimumBribes([1, 2, 5, 3, 4, 7, 8, 6])
// should be 2


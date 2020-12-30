function triplets(a, b, c) {
    let firstAndSecondTriplets = {}
    let secondAndThirdTriplets = {}
    const biggestB = Math.max(...b)
    let possibleFirst = a.filter(num => num === biggestB);
    let possibleSecond = c.filter(num => num === biggestB);
    a = a.filter(num => num < biggestB);
    a = [...new Set(a)]
    b = [...new Set(b)]
    c = [...new Set(c)]
    c = c.filter(num => num < biggestB);
    let bIndex = 0
    let aIndex = 0
    let cIndex = 0
    if (possibleFirst > 0) {
        possibleFirst.push(biggestB)
        firstAndSecondTriplets['=' + biggestB] = [possibleFirst]
    }
    for (let i = 0; i < (a.length * b.length); i++) {
        if (a[aIndex] > b[bIndex]) {
            firstAndSecondTriplets['>' + b[bIndex]] ? firstAndSecondTriplets['>' + b[bIndex]].push([a[aIndex], b[bIndex]]) : firstAndSecondTriplets['>' + b[bIndex]] = [[a[aIndex], b[bIndex]]]
        } else if (a[aIndex] < b[bIndex]) {
            firstAndSecondTriplets['<' + b[bIndex]] ? firstAndSecondTriplets['<' + b[bIndex]].push([a[aIndex], b[bIndex]]) : firstAndSecondTriplets['<' + b[bIndex]] = [[a[aIndex], b[bIndex]]]
        } else if (a[aIndex] === b[bIndex]) {
            firstAndSecondTriplets['=' + b[bIndex]] ? firstAndSecondTriplets['=' + b[bIndex]].push([a[aIndex], b[bIndex]]) : firstAndSecondTriplets['=' + b[bIndex]] = [[a[aIndex], b[bIndex]]]
        }
        if (bIndex === (b.length - 1)) {
            bIndex = 0
            aIndex++
        } else {
            bIndex++
        }
    }
    bIndex = 0
    if (possibleSecond > 0) {
        possibleSecond.push(biggestB)
        secondAndThirdTriplets['=' + biggestB] = [possibleSecond]
    }

    for (let j = 0; j < (b.length * c.length); j++) {
        if (c[cIndex] > b[bIndex]) {
            secondAndThirdTriplets['<' + b[bIndex]] ? secondAndThirdTriplets['<' + b[bIndex]].push([b[bIndex], c[cIndex]]) : secondAndThirdTriplets['<' + b[bIndex]] = [[b[bIndex], c[cIndex]]]
        } else if (c[cIndex] < b[bIndex]) {
            secondAndThirdTriplets['>' + b[bIndex]] ? secondAndThirdTriplets['>' + b[bIndex]].push([b[bIndex], c[cIndex]]) : secondAndThirdTriplets['>' + b[bIndex]] = [[b[bIndex], c[cIndex]]]
        } else if (c[cIndex] === b[bIndex]) {
            secondAndThirdTriplets['=' + b[bIndex]] ? secondAndThirdTriplets['=' + b[bIndex]].push([b[bIndex], c[cIndex]]) : secondAndThirdTriplets['=' + b[bIndex]] = [[b[bIndex], c[cIndex]]]
        }
        if (cIndex === (c.length - 1)) {
            cIndex = 0
            bIndex++
        } else {
            cIndex++
        }
    }
    let count = 0
    let lesser;
    let greater;
    let equal;
    for (const property in firstAndSecondTriplets) {
        secondAndThirdTriplets['<' + property.slice(1, property.length)] ? lesser = secondAndThirdTriplets['<' + property.slice(1, property.length)] : lesser = []
        secondAndThirdTriplets['>' + property.slice(1, property.length)] ? greater = secondAndThirdTriplets['>' + property.slice(1, property.length)] : greater = []
        secondAndThirdTriplets['=' + property.slice(1, property.length)] ? equal = secondAndThirdTriplets['=' + property.slice(1, property.length)] : equal = []
        if (property[0] === '<') {
            count += (firstAndSecondTriplets[property].length * equal.length)
            count += (firstAndSecondTriplets[property].length * greater.length)
        } else if (property[0] === '=') {
            count += (firstAndSecondTriplets[property].length * equal.length)
            count += (firstAndSecondTriplets[property].length * greater.length)
        }
    }
    return count
}

console.log(triplets([41705157, 97849134, 45597343, 16768845, 22004255, 8599189, 2105694, 89992290, 67225143, 89110311,
], [13272876, 84702911, 8455586, 8597056, 131603, 80740505, 44236720, 92144494, 57795598], [82044489, 35357393, 83576278, 87430244, 76673809, 10617871, 83652958, 21631708]))



// console.log(triplets([1, 3, 5], [2, 3], [1, 2, 3]))





let setFreq = 0
for (const property in freq) {
    freqOfFreq[freq[property]] ? freqOfFreq[freq[property]]++ : freqOfFreq[freq[property]] = 1
    if (freqOfFreq[freq[property]] > setFreq) {
        setFreq = freqOfFreq[property]
    }
}

// let currentFreq2Index = 0;
// let lastFreq2Index = 0;
// for (const property in freq1) {
//     if (freq2[property]) {
//         currentFreq2Index = freq2[property][0]
//     }
//     console.log(currentFreq2Index)
//     // && currentFreq2Index >= lastFreq2Index
//     if (freq2[property] && freq2[property] > freq1[property]) {
//         characterCount += freq1[property]
//     } else if (freq2[property] && freq2[property] < freq1[property]) {
//         characterCount += (freq1[property] - freq2[property][1])
//     } else if (freq2[property] === freq1[property]) {
//         characterCount += freq2[property][1]
//     }
//     if (freq2[property]) {
//         lastFreq2Index = freq2[property][0]
//     }
//     console.log(lastFreq2Index)
// }


let s2Copy = s2
let s1Copy = s1
let characterCount = 0;
let index = 0
s1.forEach(element => {
    freq1[element] ? freq1[element]++ : freq1[element] = 1
});
s2.forEach(element => {
    freq2[element] ? freq2[element]++ : freq2[element] = 1
});
s2.forEach(element => {
    if (!freq1[element]) {
        s2Copy.slice(index, 1)
    }
    index++
});
s1.forEach(element => {
    if (!freq2[element]) {
        s1Copy.slice(index, 1)
    }
    index++
});
freq1 = {};
s1.forEach(element => {
    freq1[element] ? freq1[element]++ : freq1[element] = 1
});
freq2 = {};
index = 0
s2.forEach(element => {
    freq2[element] ? freq2[element][1]++ : freq2[element] = [index, 1]
    index++
});





// indexes.forEach(element => {
//     if (concurrentString.length < 1) {
//         concurrentString.push(element)
//         incrementer++
//         sizes.push(incrementer)
//     } else if (previous > element && concurrentString.length > 1) {
//         concurrentString = []
//         sizes.push(incrementer)
//         incrementer = 0
//     } else if (previous > element) {
//         concurrentString = [element]
//         sizes.push(incrementer)
//         incrementer = 1
//     } else if (previous < element) {
//         concurrentString.push(element)
//         incrementer++
//         sizes.push(incrementer)
//     }
//     previous = element
//     // console.log(concurrentString)
//     // console.log(incrementer)
// })

// let indexes = []
// s1Copy.forEach(element => {
//     if (s2Copy.indexOf(element) !== -1) {
//         indexes.push(s2Copy.indexOf(element))
//     }
// })
// console.log(indexes)


if (index === (s2Copy.length)) {
    itemExamined = s2Copy[indexOfArray]
    itemExamined = Math.min(itemExamined)
    console.log('IE' + itemExamined)
    console.log('AE' + s2Copy[indexOfArray])
    concurrentString.push(itemExamined)
}
// numToAdd = s2Copy[index].find(element => element > concurrentString[0])
// if (numToAdd) {
//     concurrentString.push(numToAdd)
// }
index++
if (index === (s2Copy.length - 1)) {
    index = 0
    sizes.push(concurrentString)
    concurrentString = []
    indexOfArray++
}
console.log(concurrentString)


// for (let i = 1; i < loopLength; i++) {
//     if (index === 0) {
//         sizes.push(concurrentString.length)
//         itemExamined = s2Copy[indexOfArray]
//         itemExamined.length > 1 ? itemExamined = Math.min(...itemExamined) : itemExamined = itemExamined[0]
//         concurrentString = [itemExamined]
//         numToAdd = itemExamined
//     }
//     // if (concurrentString.length === 1) {
//     //     numToAdd = s2Copy[index].find(element => element > itemExamined)
//     // }
//     // console.log('numToAdd ' + numToAdd)
//     // if (numToAdd !== undefined) {
//     //     // console.log(`The item that's bigger than ${concurrentString[concurrentString.length - 1]} in the s2Copy[index] ${s2Copy[index]} is ${numToAdd}`)
//     //     concurrentString.push(numToAdd)
//     //     numToAdd = undefined
//     // }
//     if (index !== (biggestLength - 1)) {
//         index++
//     } else {
//         indexOfArray++
//         index = 0
//     }
//     if (index < indexOfArray) {
//         index = indexOfArray + 1
//     }
//     // console.log(s2Copy[indexOfArray])
//     console.log(s2Copy[indexOfArray])
// }
// console.log(sizes)
// if (sizes.length > 0) {
//     return Math.max(...sizes)
// } else {
//     return 0
// }

[
    [11, 13, 20, 27, 45, 49],
    [11, 13, 20, 27, 45, 49],
    [13, 20, 27, 45, 49],
    [11, 27, 45, 49],
    [27, 45, 49],
    [25, 26, 45, 48, 49],
    [4, 25, 48, 49],
    [25, 48, 49],
    [48, 49],
    [
        1, 3, 4, 6, 9,
        17, 21, 29, 47, 48
    ],
    [
        3, 4, 6, 9, 17,
        21, 29, 47, 48
    ],
    [
        4, 6, 9, 17,
        21, 29, 47, 48
    ],
    [
        3, 9, 17, 21,
        29, 47, 48
    ],
    [9, 17, 21, 29, 47, 48],
    [17, 21, 29, 47, 48],
    [16, 19, 47, 48],
    [13, 19, 47, 48],
    [19, 47, 48],
    [13, 18, 19, 31, 48],
    [5, 19, 31, 48],
    [19, 31, 48],
    [0, 13, 31, 48],
    [13, 31, 48],
    [31, 48],
    [11, 48],
    [48],
    [17, 35, 46, 47],
    [35, 46, 47],
    [35, 46, 47],
    [24, 47],
    [5, 37, 46],
    [2, 24, 31, 34, 35, 44],
    [24, 31, 34, 35, 44],
    [1, 13, 31, 34, 35, 44],
    [0, 13, 31, 34, 35, 44],
    [13, 31, 34, 35, 44]
]

[
    [11, 20], [13],
    [11, 20], [27, 36, 39],
    [25, 45], [4, 8, 14, 26, 28, 49],
    [25, 45], [48],
    [1], [3, 6],
    [4, 8, 14, 26, 28, 49], [3, 6],
    [9], [17, 23, 32, 33],
    [16, 21], [13],
    [19, 29, 42, 43], [13],
    [5, 18, 47], [19, 29, 42, 43],
    [0], [13],
    [31, 34, 38, 41], [11, 20],
    [48], [17, 23, 32, 33],
    [35], [35],
    [24, 46], [5, 18, 47],
    [2, 37], [24, 46],
    [1], [0],
    [13], [31, 34, 38, 41],
    [31, 34, 38, 41], [1],
    [22], [13],
    [35], [44],
    [15, 30], [15, 30],
    [7, 10]
]

let count = 0;
let smallest = Math.min(...A)
let indexSmallest = A.indexOf(smallest)
A.splice(indexSmallest, 1)
let secondSmallest = Math.min(...A)
let indexSecondSmallest = A.indexOf(secondSmallest)
A.splice(indexSecondSmallest, 1)
let newItem;
for (let i = 0; smallest < k && A.length > 1; i++) {
    newItem = smallest + (secondSmallest * 2)
    A.push(newItem)
    count++
    smallest = Math.min(...A)
    indexSmallest = A.indexOf(smallest)
    A.splice(indexSmallest, 1)
    secondSmallest = Math.min(...A)
    indexSecondSmallest = A.indexOf(secondSmallest)
    A.splice(indexSecondSmallest, 1)
}
return A.length > 1 ? count : -1


let currentX = startX
let currentY = startY
let biggest;
let count = 0;
let firstArrayWherePossible = 0
goalX > goalY ? biggest = goalY : biggest = goalY
biggest++
for (let i = 0; i < grid.length; i++) {
    // console.log(grid[firstArrayWherePossible])
    // console.log(grid[firstArrayWherePossible].slice(0, biggest))
    // console.log(`Array contains X: ${grid[firstArrayWherePossible].slice(0, biggest).includes('X')}`)
    if (!grid[firstArrayWherePossible].slice(0, biggest).includes('X') && firstArrayWherePossible > 0) {
        firstArrayWherePossible++
        i = grid.length
    } else if (!grid[firstArrayWherePossible].slice(0, biggest).includes('X')) {
        i = grid.length
    } else {
        firstArrayWherePossible++
    }
}
// return count



function minimumMoves(grid, startX, startY, goalX, goalY) {
    let listsX = []
    let listsY = []
    grid.forEach(element => {
        listsY.push(element.split(''))
    });
    let count = 0;
    let gridItem = 0
    let currentX = startX
    let currentY = startY
    let stringLength = grid[0].length
    for (let i = 0; i < (grid.length * grid[0].length); i++) {
        if (listsX[gridItem]) {
            listsX[gridItem].push(grid[grid[0].length - stringLength][gridItem])
        } else {
            listsX[gridItem] = [grid[grid[0].length - stringLength][gridItem]]
        }
        stringLength--
        if (stringLength === 0) {
            stringLength = grid[0].length
            gridItem++
        }
    }
    let found = undefined;
    let index = 0
    let endPotentialNewLevel = goalY + 1
    let i = 10
    // console.log(listsX)
    while (currentX !== goalX || currentY !== goalY && i > 0) {
        console.log('current X: ' + currentX + ', currentY: ' + currentY)
        found = undefined
        index = 0
        listsY.forEach(element => {
            if (!element.slice(currentY, (endPotentialNewLevel)).includes('X') && found === undefined && index === currentX) {
                found = element
                currentX = index
                currentY = endPotentialNewLevel - 1
                count += 1
            } else if (!element.slice(currentY, (endPotentialNewLevel)).includes('X') && found === undefined && index > currentX && !listsX[currentX].slice(currentY, (index + 1)).includes('X')) {
                found = element
                currentX = index
                currentY = endPotentialNewLevel - 1
                count += 2
            }
            index++
        })
        if (found = undefined) {
            endPotentialNewLevel--
        }
        if (currentX < goalX && !listsX[currentX].slice(currentX, (goalX + 1)).includes('X')) {
            count++
            currentX = goalX
        } else if (currentX > goalX && !listsX[currentX].slice(goalX, (currentX + 1)).includes('X')) {
            count++
            currentX = goalX
        }
        i--
    }
    return count
}

function minimumMoves(grid, startX, startY, goalX, goalY) {
    let listsX = []
    let listsY = []
    grid.forEach(element => {
        listsY.push(element.split(''))
    });
    let count = 0;
    let gridItem = 0
    let currentX = startX
    let currentY = startY
    let stringLength = grid[0].length
    for (let i = 0; i < (grid.length * grid[0].length); i++) {
        if (listsX[gridItem]) {
            listsX[gridItem].push(grid[grid[0].length - stringLength][gridItem])
        } else {
            listsX[gridItem] = [grid[grid[0].length - stringLength][gridItem]]
        }
        stringLength--
        if (stringLength === 0) {
            stringLength = grid[0].length
            gridItem++
        }
    }
    let found = undefined;
    let index = 0
    let endPotentialNewLevel = goalY + 1
    let j = currentY
    let f = 0
    console.log('y - across')
    // console.log(listsY)
    console.log('x - down')
    // console.log(listsX)
    // console.log(listsY[][j])
    let counter = 0
    let downward = false
    let quantityHorizontalX = 0
    // if (listsX[currentX].slice(currentX, goalX))
    // console.log(currentY + ' ' + goalY)
    // if (!listsX[currentX].slice(currentY, (goalY + 1)).includes('X')) {
    //     currentY = goalY
    //     count++
    // }
    // if (!listsY[currentY].slice(currentX, (goalX + 1)).includes('X')) {
    //     currentX = goalX
    //     count++
    // }
    // console.log(listsY[currentY])
    // console.log(listsX[currentX])
    while (counter < 20) {
        // while (currentX !== goalX || currentY !== goalY) {
        if (listsY[currentX][j] !== 'X' && goalY > startY && currentY !== goalY && currentX !== 0) {
            // console.log(`listsY[currentX][j]/${j}  is ${listsY[currentX][j]} a`)
            // console.log(`currentY is ${currentY}`)
            // console.log(`currentX is ${currentX}`)
            j++
            currentY = j
            count++
            // console.log(`listsY[currentX][j]/${j}  is ${listsY[currentX][j]} b`)
            // console.log(`currentY is ${currentY} b `)
            // console.log(`currentX is ${currentX} b `)
            // console.log(count)
            // console.log('b')
        } else if (listsY[currentX][j] !== 'X' && goalY > startY && currentY !== goalY) {
            // console.log(`listsY[currentX][j]/${j}  is ${listsY[currentX][j]} a`)
            // console.log(`currentY is ${currentY}`)
            // console.log(`currentX is ${currentX}`)
            j++
            // console.log(`listsY[currentX][j]/${j}  is ${listsY[currentX][j]} b`)
            // console.log(`currentY is ${currentY} b `)
            // console.log(`currentX is ${currentX} b `)
            // console.log(count)
            // console.log('eee')
        } else if (listsY[currentX][j] !== 'X' && goalY < startY && currentY !== goalY) {
            // console.log(`listsY[currentX][j]/${j}  is ${listsY[currentX][j]} c`)
            // console.log(`currentY is ${currentY} c `)
            // console.log(`currentX is ${currentX} c `)
            j--
            currentY = j
            // console.log('c')
            // console.log(count)
        } else if (listsY[currentX][j] === 'X' && currentX === 0) {
            // console.log(`listsY[currentX][j]/${j}  is ${listsY[currentX][j]} d`)
            // console.log(`currentY is ${currentY} d `)
            // console.log(`currentX is ${currentX} d `)
            currentX++
            downward = true
            // console.log('dddd')
        } else if (listsY[currentX][j] === 'X' && currentY !== goalY && currentX !== 0 && listsY[currentX][j + 1] === 'X' && downward === false) {
            // console.log(`listsY[currentX][j]/${j}  is ${listsY[currentX][j]} d`)
            // console.log(`currentY is ${currentY} d `)
            // console.log(`currentX is ${currentX} d `)
            currentX--
            // console.log('d')
            // console.log(count)
        } else if (listsY[currentX][j] === 'X' && currentY !== goalY && listsY[currentX][j + 1] !== 'X' && goalY > startY && downward === false && currentX === 0) {
            // console.log(`listsY[currentX][j]/${j} is ${listsY[currentX][j]} e `)
            // console.log(`listsY[currentX][j + 1]/${j + 1} is ${listsY[currentX][j + 1]} e `)
            // console.log(`currentY is ${currentY} e `)
            // console.log(`currentX is ${currentX} e `)
            // count += 2
            currentX++
            downward = true
            // console.log('e')
            // console.log(count)
        } else if (listsY[currentX][j] === 'X' && currentY !== goalY && currentX !== 0 && listsY[currentX][j + 1] !== 'X' && goalY > startY && downward === false && currentX !== 0) {
            // console.log(`listsY[currentX][j]/${j} is ${listsY[currentX][j]} f `)
            // console.log(`listsY[currentX][j + 1]/${j + 1} is ${listsY[currentX][j + 1]} f `)
            // console.log(`currentY is ${currentY} f `)
            // console.log(`currentX is ${currentX} f `)
            // count++
            currentX--
            // console.log(count)
            // console.log('f')
        } else if (listsY[currentX][j] === 'X' && currentY !== goalY && listsY[currentX][j + 1] !== 'X' && goalY > startY && downward === true) {
            // console.log(`listsY[currentX][j]/${j} is ${listsY[currentX][j]} f `)
            // console.log(`listsY[currentX][j + 1]/${j + 1} is ${listsY[currentX][j + 1]} f `)
            // console.log(`currentY is ${currentY} f `)
            // console.log(`currentX is ${currentX} f `)
            // count++
            currentX++
            count++
            // console.log('g')
            // console.log(count)
        } else if (listsY[currentX][j] === 'X' && currentY !== goalY && currentX !== 0 && listsY[currentX][j + 1] !== 'X' && goalY < startY) {
            // console.log(`listsY[currentX][j] is ${listsY[currentX][j]} g`)
            // console.log(`listsY[currentX][j + 1]/${j + 1} is ${listsY[currentX][j + 1]} g`)
            // console.log(`currentY is ${currentY} g `)
            // console.log(`currentX is ${currentX} g `)
            currentY--
            // console.log(count)
            // console.log('h')
        } else if (currentY === goalY && currentX < goalX) {
            // console.log(`listsY[currentX][j] is ${listsY[currentX][j]} h `)
            // console.log(`listsY[currentX][j + 1]/${j + 1} is ${listsY[currentX][j + 1]} h `)
            // console.log(`currentY is ${currentY} h `)
            // console.log(`currentX is ${currentX} h `)
            // count += 2
            currentX++
            // console.log('i')
            // console.log(count)
        } else if (currentY === goalY && currentX > goalX) {
            // console.log(`listsY[currentX][j] is ${listsY[currentX][j]} i`)
            // console.log(`listsY[currentX][j + 1]/${j + 1} is ${listsY[currentX][j + 1]} i `)
            // console.log(`currentY is ${currentY} i `)
            // console.log(`currentX is ${currentX} i `)
            currentX--
            // console.log('j')
        }
        // console.log(count)
        // console.log(`listsY[currentX][j]/${j}  is ${listsY[currentX][j]} END`)
        // console.log(`currentY is ${currentY} END`)
        // console.log(`currentX is ${currentX} END`)
        // console.log(listsY[currentX][j])
        counter++
    }
    console.log(`listsY[currentX][j]/${j}  is ${listsY[currentX][j]} END`)
    console.log(`currentY is ${currentY} END`)
    console.log(`currentX is ${currentX} END`)
    console.log(listsY[currentX][j])
    console.log(downward)
    count++
    return count
}

// console.log(minimumMoves(['.X.', '.X.', '...'], 0, 0, 0, 2))
// console.log(minimumMoves(['...', '.X.', '...'], 0, 0, 1, 2))
console.log(minimumMoves(['...', '.X.', '.X.'], 2, 0, 0, 2))
// console.log(minimumMoves(['.X..XX...X', 'X.........', '.X.......X', '..........', '........X.', '.X...XXX..', '.....X..XX', '.....X.X..', '..........', '.....X..XX'], 9, 1, 9, 6))
// console.log(minimumMoves(['...', '.X.', '.X.'], 2, 0, 2, 2))

// 0, 0, 0, 2
// .X.
// .X.
// ...

// console.log(reverseCount)
// console.log(count)
// console.log(`listsY[currentX][currentY]/${currentY}  is ${listsY[currentX][j]} END`)
// console.log(`currentX is ${currentX} END`)
// console.log(`currentY is ${currentY} END`)
// console.log(listsY[currentX][currentY])


function minimumMoves(grid, startX, startY, goalX, goalY) {
    let listsX = []
    let listsY = []
    grid.forEach(element => {
        listsY.push(element.split(''))
    });
    let count = 0;
    let gridItem = 0
    let currentX = startX
    let currentY = startY
    let stringLength = grid[0].length
    for (let i = 0; i < (grid.length * grid[0].length); i++) {
        if (listsX[gridItem]) {
            listsX[gridItem].push(grid[grid[0].length - stringLength][gridItem])
        } else {
            listsX[gridItem] = [grid[grid[0].length - stringLength][gridItem]]
        }
        stringLength--
        if (stringLength === 0) {
            stringLength = grid[0].length
            gridItem++
        }
    }
    let downward;
    let upward;
    if (startX === 0) {
        downward = true
    } else {
        upward = true
    }
    let reverse = false;
    let reversePosition = 0
    let reverseCount = 0
    let reversed = false
    let right;
    let left;
    if (goalY > startY) {
        right = true
    } else if (goalY < startY) {
        left = true
    }
    while (currentX !== goalX || currentY !== goalY) {
        console.log(reverseCount)
        console.log(count)
        console.log(`listsY[currentX][currentY]/${currentY}  is ${listsY[currentX][currentY]} END`)
        console.log(`currentX is ${currentX} END`)
        console.log(`currentY is ${currentY} END`)
        console.log(listsY[currentX][currentY])
        if (right && listsY[currentX][currentY] !== 'X' && currentY !== goalY) {
            currentY++
            console.log(count + ' a')
        } else if (left && listsY[currentX][currentY] !== 'X' && currentY !== goalY) {
            currentY--
            console.log(count + ' b')
        } else if (right && listsY[currentX][currentY] === 'X' && upward && currentY !== goalY && reverse) {
            currentY !== reversePosition ? reverseCount++ : reversePosition = currentY
            currentY--
            currentX--
            console.log(count + ' c')
        } else if (left && listsY[currentX][currentY] === 'X' && upward && currentY !== goalY && reverse) {
            currentY !== reversePosition ? reverseCount++ : reversePosition = currentY
            currentY++
            currentX--
            console.log(count + ' d')
        } else if (right && listsY[currentX][currentY] === 'X' && upward && currentY !== goalY && !reverse) {
            reverseCount = 1
            reverse = true
            reversePosition = currentY
            reversed = true
            currentY--
            currentX--
            console.log(count + ' e')
        } else if (left && listsY[currentX][currentY] === 'X' && upward && currentY !== goalY && !reverse) {
            reverseCount = 1
            reverse = true
            reversePosition = currentY
            reversed = true
            currentY++
            currentX--
            console.log(count + ' f')
        } else if (right && listsY[currentX][currentY] === 'X' && downward && currentY !== goalY && reverse) {
            currentY !== reversePosition ? reverseCount++ : reversePosition = currentY
            currentY--
            currentX++
            console.log(count + ' g')
        } else if (left && listsY[currentX][currentY] === 'X' && downward && currentY !== goalY && reverse) {
            currentY !== reversePosition ? reverseCount++ : reversePosition = currentY
            currentY++
            currentX++
            console.log(count + ' h')
        } else if (right && listsY[currentX][currentY] === 'X' && downward && currentY !== goalY && !reverse) {
            reverseCount = 1
            reverse = true
            reversePosition = currentY
            reversed = true
            currentY--
            currentX++
            console.log(count + ' i')
        } else if (left && listsY[currentX][currentY] === 'X' && downward && currentY !== goalY && !reverse) {
            reverseCount = 1
            reverse = true
            reversed = true
            reversePosition = currentY
            currentY++
            currentX++
            console.log(count + ' j')
        } else if (currentY === goalY && currentX < goalX && !reverse && !reversed) {
            currentX++
            count++
            console.log(count + ' k')
        } else if (currentY === goalY && currentX < goalX && !reverse && reversed) {
            currentX++
            console.log(count + ' k')
        } else if (currentY === goalY && currentX < goalX && reverse) {
            currentX++
            count += reverseCount
            reverseCount = 0
            reverse = false
            count++
            console.log(count + ' l')
        } else if (currentY === goalY && currentX > goalX && !reverse) {
            currentX--
            console.log(count + ' m')
        } else if (currentY === goalY && currentX > goalX && reverse) {
            currentX--
            count++
            count += reverseCount
            reverseCount = 0
            reverse = false
            console.log(count + ' n')
        }
    }
    count += reverseCount + 1
    return count
}

// console.log(minimumMoves(['.X.', '.X.', '...'], 0, 0, 0, 2))
// // works - 3
// console.log(minimumMoves(['...', '.X.', '...'], 0, 0, 1, 2))
// // works - 2
// console.log(minimumMoves(['...', '.X.', '.X.'], 2, 0, 0, 2))
// // works - 2
// console.log(minimumMoves(['.X..XX...X', 'X.........', '.X.......X', '..........', '........X.', '.X...XXX..', '.....X..XX', '.....X.X..', '..........', '.....X..XX'], 9, 1, 9, 6))
// // works - 3
console.log(minimumMoves(['...', '.X.', '.X.'], 2, 0, 2, 2))

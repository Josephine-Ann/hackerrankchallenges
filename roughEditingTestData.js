

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
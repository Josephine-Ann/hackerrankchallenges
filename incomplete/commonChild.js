function commonChild(s1, s2) {
    s1 = s1.split('')
    s2 = s2.split('')
    // Make sure that the strings are arrays
    let s1Copy = []
    let s2Copy = []
    // Make copies of arrays so that we can edit them,
    // but still use them
    let freq1 = {}
    let freq2 = {}
    // Make objects that will be counting the 
    // frequency of characters
    let index = 0
    s1.forEach(element => {
        freq1[element] ? freq1[element]++ : freq1[element] = 1
    });
    // Add the items to the frequency counters
    s2.forEach(element => {
        if (freq2[element]) {
            freq2[element][1]++
            freq2[element][0].push(index)
        } else {
            freq2[element] = [[index], 1]
        }
        index++
    });
    // Add the items to the frequency counters
    // Add the index to the frequency counters
    // [[indexes], [quantity]]
    s1.forEach(element => {
        if (freq2[element] && freq2[element][1] > 0) {
            s2Copy.push(freq2[element][0])
            freq1[element][1]--
        }
        index++
    });
    let lengths = 0
    index = 1
    // console.log(s2Copy)
    s2Copy.forEach(element => {
        lengths += s2Copy.length - index
        index++
    });
    index = 0
    let currentItem;
    // // The length of the string we build as we go
    let sizes = []
    // // The ultimate lengths of the strings
    // string we are building
    let numToAdd;
    let indexOfArray = 0
    index = 0
    let itemExamined = s2Copy[indexOfArray];
    itemExamined > 1 ? itemExamined = Math.max(...itemExamined) : itemExamined = itemExamined[0]
    // console.log(s2Copy)
    let concurrentString = []
    index = 0
    s2Copy.forEach(element => {
        s2Copy[index] = Math.min(...element)
        index++
    });
    console.log(s2Copy)
    // for (let i = 0; i < lengths; i++) {
    // }
    //     for (let i = 0; i < lengths; i++) {
    //         if (index === (s2Copy.length - 1)) {
    //             sizes.push(concurrentString)
    //             itemExamined = s2Copy[indexOfArray]
    //             itemExamined > 1 ? itemExamined = Math.max(...itemExamined) : itemExamined = itemExamined[0]
    //             concurrentString = concurrentString.filter(element => element < itemExamined)
    //             concurrentString.push(itemExamined)
    //             concurrentString = [itemExamined]
    //             index = indexOfArray + 1
    //             indexOfArray++
    //             atPlay = itemExamined
    //         } else {
    //             index++
    //         }
    //         numToAdd = s2Copy[index].find(element => element > atPlay)
    //         if (numToAdd && !concurrentString.includes(numToAdd)) {
    //             concurrentString.push(numToAdd)
    //             atPlay = numToAdd
    //             numToAdd = undefined
    //         }
    //         if (!numToAdd) {
    //             console.log('b')
    //             numToAdd = atPlay
    //         } else {
    //             console.log('c')
    //             concurrentString.push(numToAdd)
    //         }
    //         // console.log('final numToAdd ' + numToAdd)
    //         // console.log('numToAdd' + numToAdd)
    //         // console.log(s2Copy[index])
    //         // // console.log(numToAdd)
    //         // console.log('ie ' + itemExamined)
    //     }
    //     console.log(sizes)
}

console.log(commonChild('WEWOUCUIDGCGTRMEZEPXZFEJWISRSBBSYXAYDFEJJDLEBVHHKS', 'FDAGCXGKCTKWNECHMRXZWMLRYUCOCZHJRRJBOAJOQJZZVUYXIC'))
// console.log(commonChild('OUDFRMYMAW', 'AWHYFCCMQX'))
// console.log(commonChild('SHINCHAN', 'NOHARAAA'))
// console.log(commonChild('AA', 'BB'))
// console.log(commonChild('HARRY', 'SALLY'))

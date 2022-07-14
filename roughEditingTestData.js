

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

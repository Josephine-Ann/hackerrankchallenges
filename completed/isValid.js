function isValid(s) {
    s = s.split('')
    const freq = {}
    const freqOfFreq = {}
    let answer = true;
    let counterOfRemovals = 0
    s.forEach(element => {
        freq[element] ? freq[element]++ : freq[element] = 1
    });
    let setFreq = 0
    for (const property in freq) {
        freqOfFreq[freq[property]] ? freqOfFreq[freq[property]]++ : freqOfFreq[freq[property]] = 1
        if (freqOfFreq[freq[property]] > setFreq) {
            setFreq = freq[property]
        }
    }
    for (const property in freq) {
        if (freq[property] > setFreq && freq[property] > 1) {
            counterOfRemovals += (freq[property] - setFreq)
        } else if (freq[property] < setFreq && freq[property] > 1) {
            counterOfRemovals += (setFreq - freq[property])
        } else if (freq[property] !== setFreq) {
            counterOfRemovals += freq[property]
        }
    }
    if (counterOfRemovals > 1) {
        answer = false
    }
    if (!answer) {
        return 'NO'
    } else {
        return 'YES'
    }
}

// console.log(isValid('aabbcd'))
// console.log(isValid('aabbccddeefghi'))
// console.log(isValid('aabbcd'))
console.log(isValid('abcdefghhgfedecba'))




let setFreq = 0
for (const property in freq) {
    freqOfFreq[freq[property]] ? freqOfFreq[freq[property]]++ : freqOfFreq[freq[property]] = 1
    if (freqOfFreq[freq[property]] > setFreq) {
        setFreq = freqOfFreq[property]
    }
}
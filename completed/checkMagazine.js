function checkMagazine(magazine, note) {
    let answer = true;
    const frequencyCounterMag = {}
    const frequencyCounterNote = {}
    magazine.forEach((element) => {
        let key = element
        frequencyCounterMag[key] ? frequencyCounterMag[key]++ : frequencyCounterMag[key] = 1
    });
    note.forEach((element) => {
        let othKey = element
        frequencyCounterNote[othKey] ? frequencyCounterNote[othKey]++ : frequencyCounterNote[othKey] = 1
    });
    for (const property in frequencyCounterNote) {
        if (!frequencyCounterMag[property] || frequencyCounterMag[property] < frequencyCounterNote[property]) {
            answer = false
        }
    }
    if (answer === false) {
        return 'No'
    } else {
        return 'Yes'
    }
}

console.log(checkMagazine(['ive', 'got', 'a', 'lovely', 'bunch', 'of', 'coconuts'],
    ['ive', 'got', 'some', 'coconuts']))

console.log(checkMagazine(['two', 'times', 'three', 'is', 'not', 'four'],
    ['two', 'times', 'two', 'is', 'four']))

console.log(checkMagazine(['give', 'me', 'one', 'grand', 'today', 'night'],
    ['give', 'one', 'grand', 'today']))
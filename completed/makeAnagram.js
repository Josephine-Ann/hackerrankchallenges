function makeAnagram(a, b) {
    a = a.split('')
    b = b.split('')
    let aCounter = {}
    a.forEach(element => {
        aCounter[element] ? aCounter[element]++ : aCounter[element] = 1
    });
    let bCounter = {}
    b.forEach(element => {
        bCounter[element] ? bCounter[element]++ : bCounter[element] = 1
    });
    let finalValue = 0;
    for (const property in aCounter) {
        if (!bCounter[property]) {
            finalValue += (aCounter[property])
            bCounter[property] = aCounter[property]
        } else if (bCounter[property] < aCounter[property]) {
            finalValue += ((aCounter[property] - bCounter[property]))
            bCounter[property] = aCounter[property]
        } else {
            finalValue += ((bCounter[property] - aCounter[property]))
            bCounter[property] = aCounter[property]
        }
    }
    for (const property in bCounter) {
        if (!aCounter[property]) {
            finalValue += (bCounter[property])
        } else if (aCounter[property] < bCounter[property]) {
            finalValue += ((bCounter[property] - aCounter[property]))
        } else {
            finalValue += ((aCounter[property] - bCounter[property]))
        }
    }
    return finalValue
}
console.log(makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke'))

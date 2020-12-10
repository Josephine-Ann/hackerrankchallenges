function sherlockAndAnagrams(s) {
    let potentialAnagram;
    let countAnagrams = 0
    let otherS = s.split('')
    let repeated;
    let unrepeated = 0;
    for (let i = 1; i < otherS.length; i++) {
        repeated = otherS.filter(item => item === s[i - 1])
        potentialAnagram = s.slice(0, i)
        if (s.includes(potentialAnagram)) {
            console.log(potentialAnagram)
            countAnagrams++
        }
        if (repeated.length > 1) {
            countAnagrams += (repeated.length / 4)
        }
        if (repeated.length < 2) {
            unrepeated++
        }
    }
    unrepeated++
    if (unrepeated === s.length) {
        countAnagrams = 0
    }
    return countAnagrams
}
console.log(sherlockAndAnagrams('abcd'))


function alternatingCharacters(s) {
    s = s.split('')
    let last;
    let count = 0;
    s.forEach(element => {
        if (last && last === element) {
            count++
        } else {
            last = element
        }
    });
    return count
}

console.log(alternatingCharacters('ABBABBAA'))
//3
console.log(alternatingCharacters('AAABBBAABB'))
//6
console.log(alternatingCharacters('AABBAABB'))
//4
console.log(alternatingCharacters('ABABABAA'))
//1
console.log(alternatingCharacters('AAAA'))
//3
console.log(alternatingCharacters('BBBBB'))
//4
console.log(alternatingCharacters('ABABABAB'))
//0
console.log(alternatingCharacters('BABABA'))
//0
console.log(alternatingCharacters('AAABBB'))
//4

// Sample Input

// 5
// AAAA
// BBBBB
// ABABABAB
// BABABA
// AAABBB
// Sample Output

// 3
// 4
// 0
// 0
// 4

function twoStrings(s1, s2) {
    s1 = s1.split('')
    let result;
    s1.forEach((element) => {
        if (s2.includes(element)) {
            result = 'YES'
        }
    });
    if (!result) {
        result = 'NO'
    }
    return result
}

console.log(twoStrings('hello', 'zzz'))


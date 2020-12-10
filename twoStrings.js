function twoStrings(s1, s2) {
    // let index = 1
    // let mapS1 = new Map([])
    // let mapS2 = new Map([])
    // let items = []
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
    // s1.forEach(element => {
    //     mapS1.set(index, element)
    //     index++
    // });
    // s2.forEach(element => {
    //     mapS2.set(index, element)
    //     index++
    // });
    // mapS1.forEach((item) => {
    //     if (s2.includes(item) && !items.includes(item)) {
    //         items.push(item)
    //     }
    // })
    // mapS2.forEach((item) => {
    //     if (s1.includes(item) && !items.includes(item)) {
    //         items.push(item)
    //     }
    // })
    // if (items.length > 0) {
    //     return 'YES'
    // } else {
    //     return 'NO'
    // }
}

console.log(twoStrings('hello', 'zzz'))


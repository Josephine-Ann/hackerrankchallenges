function reverseArray(a) {
    let i = a.length - 1
    let newArr = new Array(a.length)
    a.forEach(element => {
        newArr[i] = element
        i--
    })
    return newArr
}
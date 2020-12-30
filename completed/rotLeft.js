function rotLeft(a, d) {
    const startToAddToEnd = a.slice(0, d)
    a = a.concat(startToAddToEnd)
    return a.slice(d, (a.length - 1))
}

console.log(rotLeft([1, 2, 3, 4, 5], 4))
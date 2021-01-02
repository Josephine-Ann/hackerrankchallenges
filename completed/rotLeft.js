function rotLeft(a, d) {
    let i = 0
    let dA = d
    while (d >= 1) {
        a.push(a[i])
        d--
        i++
    }
    return a.slice(dA)
}

console.log(rotLeft([1, 2, 3, 4, 5], 4))
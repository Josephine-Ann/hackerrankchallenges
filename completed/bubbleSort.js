function countSwaps(a) {
    let current = 0
    let next = 0
    let index = 0
    let swaps = 0
    for (let i = 0; i < a.length; i++) {
        if (a[index] > a[index + 1]) {
            current = a[index]
            next = a[index + 1]
            a[index] = next
            a[index + 1] = current
            i--
            index++
            swaps++
        } else if (a[index] < a[index + 1]) {
            index++
        } else if (index === a.length - 1) {
            index = 0
            i = 0
        }
    }
    console.log(`Array is sorted in ${swaps} swaps.`)
    console.log(`First Element: ${a[0]}`)
    console.log(`Last Element: ${a[a.length - 1]}`)
}

console.log(countSwaps([3, 2, 1]))
console.log(countSwaps([4, 2, 3, 1]))

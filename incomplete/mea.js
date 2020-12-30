function meanderingArray(unsorted) {
    // Write your code here
    let sorted = []
    let desiredLength;
    unsorted = unsorted.sort((a, b) => a - b);
    desiredLength = unsorted.length
    while (unsorted.length > 0) {
        sorted.push(unsorted[unsorted.length - 1])
        unsorted.pop()
        if (unsorted.length > 0) {
            sorted.push(unsorted[0])
            unsorted.shift()
        }
    }
    return sorted
}
console.log(meanderingArray([4, 2, 5, 1, 3]))



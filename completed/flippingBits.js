function flippingBits(N) {
    let binaryReal = Array(32).fill(0)
    let binaryReverse = Array(32).fill(1)
    let toStart = 1
    let reps = 0
    let index = 0
    let total = 0
    let totalFlipped = 0
    while (reps <= 32) {
        binaryReal[32 - reps] = toStart
        toStart = (toStart * 2)
        reps++
    }
    binaryReal.forEach(element => {
        if ((element + total) <= N) {
            total += element
            binaryReverse[index - 1] = 0
        }
        index++
    });
    index = 0
    binaryReverse.forEach(element => {
        if (element === 1) {
            totalFlipped += binaryReal[index + 1]
        }
        index++
    });
    return totalFlipped
}

console.log(flippingBits(4))


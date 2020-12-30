function fibonacci(n) {
    let indexIntegers = 2
    let indexFibonacci = 3
    let indexAddition = [1, 1]
    while (indexFibonacci <= n) {
        indexIntegers = 0
        indexIntegers += (indexAddition[0] + indexAddition[1])
        indexAddition[1] = indexAddition[0]
        indexAddition[0] = indexIntegers
        indexFibonacci++
    }
    return indexIntegers
}
console.log(fibonacci(5))

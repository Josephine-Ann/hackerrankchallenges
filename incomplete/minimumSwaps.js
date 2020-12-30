function minimumSwaps(arr) {
    let countSwaps = 0;
    let leftArray = []
    let rightArray = []
    let finalArrayUltimateLength = arr.length
    let indexSplit = 0
    let rightOneIndex = 1
    let rightTwoIndex = 2
    let leftZeroIndex = 0
    let leftOneIndex = 1
    let swopOne;
    let swopTwo;
    let stopSplitting = false;
    let realStop = 0
    while (stopSplitting === false) {
        if (arr[arr.length - rightOneIndex] > arr[arr.length - rightTwoIndex] && stopSplitting !== true) {
            indexSplit = arr.indexOf(arr[arr.length - rightTwoIndex])
            rightOneIndex++
            rightTwoIndex++
        } else {
            leftArray = arr.slice(0, indexSplit)
            rightArray = arr.slice(indexSplit, arr.length)
            stopSplitting = true
        }
    }
    let index = 1
    let indexesIntruders = []
    let intruders = []
    let differences = 0
    let missingNumbers = []
    leftArray.forEach(element => {
        if (element > indexSplit) {
            indexesIntruders.push(index)
            intruders.push(element)
            // differences += (element - index)
            countSwaps++
        }
        index++
    });
    countSwaps += (differences / leftArray.length)
    console.log(countSwaps)
    console.log(intruders)
    let a = indexesIntruders.length
    let counter = 0
    // intruders.forEach((intruder) => {
    //     counter += rightArray.filter((item) => item < intruder).length / a
    // })
    countSwaps += counter
    return countSwaps
}

console.log(minimumSwaps([4, 3, 1, 2]))
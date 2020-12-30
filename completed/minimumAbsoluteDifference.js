function minimumAbsoluteDifference(arr) {
    arr = arr.sort((a, b) => a - b);
    let difference;
    let index = 0
    let value
    arr.forEach(element => {
        if (element - arr[index + 1] < 0) {
            value = -(element - arr[index + 1])
        } else {
            value = element - arr[index + 1]
        }
        if (!difference) {
            difference = value
        }
        if (value < difference || value === 0) {
            difference = value
        }
        index++
    });
    return difference
}

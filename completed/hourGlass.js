function hourglassSum(arr) {
    arr = [].concat.apply([], arr);
    let sums = []
    let index = 0
    arr.forEach((item) => {
        if (index !== 4 && index !== 5 && index !== 10 && index !== 11 && index !== 16 && index !== 17 && index !== 22 && index !== 23) {
            sums.push(arr[index] + arr[index + 1] + arr[index + 2] + arr[index + 7] + arr[index + 12] + arr[index + 13] + arr[index + 14])
        }
        index++
    })
    sums = sums.slice(0, 16)
    return Math.max(...sums)
}

console.log(hourglassSum([[3, 7, -3, 0, 1, 8],
[1, -4, -7, -8, -6, 5],
[-8, 1, 3, 3, 5, 7],
[-2, 4, 3, 1, 2, 7],
[2, 4, -5, 1, 8, 4],
[5, -7, 6, 5, 2, 8]]))
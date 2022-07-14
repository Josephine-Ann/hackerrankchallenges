function cookies(k, A) {
    A = A.sort((a, b) => a - b);
    let count = 0
    if (A[0] > k) {
        return 0
    }
    let i;
    let replacing1;
    let replacing2;
    for (i = 0; A[0] <= k && i < A.length - 1; i++) {
        replacing1 = A[i + 2]
        replacing2 = A[i] + (A[i + 1] * 2)
        A[i + 1] = replacing2
        A[i] = replacing1
        A.splice((i + 2), 1)
        if (A[i + 1] > A[i + 2]) {
            A = A.sort((a, b) => a - b);
        }
        i--
        count++
    }
    if (A[A.length - 1] < k) {
        return -1
    }
    return count
}

console.log(cookies(7, [1, 2, 3, 9, 10, 12]))
console.log(cookies(10, [1, 1, 1]))
console.log(cookies(3581, [6214, 8543, 9266, 1150, 7498, 7209, 9398, 1529, 1032, 7384, 6784, 34, 1449, 7598, 8795, 756, 7803, 4112, 298, 4967, 1261, 1724, 4272, 1100, 9373]))
console.log(cookies(90, [13, 47, 74, 12, 89, 74, 18, 38]))
console.log(cookies(10, [52, 96, 13, 37]))




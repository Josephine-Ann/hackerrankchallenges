function whatFlavors(cost, money) {
    let finalPair = []
    let pairs = {}
    cost.forEach(element => {
        if (!pairs[element]) {
            pairs[element] = [money - element, 1]
        } else {
            pairs[element][1]++
        }
    });
    let index = 1
    let key;
    let value;
    for (let i = 0; i < cost.length; i++) {
        key = cost[i]
        cost[i]
        value = pairs[key][0]
        if (pairs[value] && key !== value) {
            finalPair.push(index)
        } else if (pairs[value] && pairs[value][1] > 1) {
            finalPair.push(index)
        }
        index++
    }
    console.log(finalPair.join(' '))
}

whatFlavors([4, 3, 2, 5, 7], 8)
whatFlavors([7, 2, 5, 4, 11], 12)
whatFlavors([2, 2, 4, 3], 4)




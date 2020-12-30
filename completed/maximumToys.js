function maximumToys(prices, k) {
    prices.sort((a, b) => a - b);
    let quantity = 0;
    let total = 0;
    prices.forEach(price => {
        if ((total + price) < k) {
            total += price
            quantity++
        }
    });
    return quantity
}
console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50))



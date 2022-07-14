function activityNotifications(expenditure, d) {
    if (expenditure.length < d) return null;
function sortedIndex(array, value) {
    var low = 0,
        high = array.length;
    while (low < high) {
        var mid = (low + high) >>> 1;
        if (array[mid] < value) low = mid + 1;
        else high = mid;
    }
    return low;
}
let currentSubstringUnsorted = [];
for (let i = 0; i < d; i++) {
    currentSubstringUnsorted.push(expenditure[i]);
}
let currentSubstringSorted = [...currentSubstringUnsorted].sort(function(a, b) {
    return a - b;
  });
let median = undefined;
const startMedian = (d - 2) / 2
const endMedian = startMedian + 1
const even = d % 2 === 0
even ? median = (currentSubstringSorted[startMedian] + currentSubstringSorted[endMedian]) / 2 : median = currentSubstringSorted[(d - 1) / 2]
let notifications = 0;
for (let i = d; i < expenditure.length; i++) {
    if (expenditure[i] >= (median * 2)) notifications++
    currentSubstringSorted.splice((currentSubstringSorted.findIndex(num => {
        return num === currentSubstringUnsorted[0];
      })), 1)
    currentSubstringSorted.splice((sortedIndex(currentSubstringSorted, expenditure[i])), 0, expenditure[i])
    currentSubstringUnsorted.shift()
    currentSubstringUnsorted.push(expenditure[i])
    even ? median = (currentSubstringSorted[startMedian] + currentSubstringSorted[endMedian]) / 2 : median = currentSubstringSorted[(d - 1) / 2]
}
return notifications
}

var items = Array.from(Array(10000).keys())
const shuffledArray = items.sort((a, b) => 0.5 - Math.random());
// const shuffledArray =  [2, 3, 4, 2, 3, 6, 8, 4, 5]
console.log(activityNotifications(shuffledArray, 300))





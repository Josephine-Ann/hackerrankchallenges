function minimumMoves(grid, startX, startY, goalX, goalY) {
    let listsX = []
    let listsY = []
    grid.forEach(element => {
        listsY.push(element.split(''))
    });
    let count = 0;
    let gridItem = 0
    let currentX = startX
    let currentY = startY
    let stringLength = grid[0].length
    for (let i = 0; i < (grid.length * grid[0].length); i++) {
        if (listsX[gridItem]) {
            listsX[gridItem].push(grid[grid[0].length - stringLength][gridItem])
        } else {
            listsX[gridItem] = [grid[grid[0].length - stringLength][gridItem]]
        }
        stringLength--
        if (stringLength === 0) {
            stringLength = grid[0].length
            gridItem++
        }
    }
    let downward;
    let upward;
    if (startX === 0) {
        downward = true
    } else {
        upward = true
    }
    let reverse = false;
    let reversePosition = 0
    let reverseCount = 0
    let reversed = false
    let right;
    let left;
    if (goalY > startY) {
        right = true
    } else if (goalY < startY) {
        left = true
    }
    while (currentX !== goalX || currentY !== goalY) {
        if (right && listsY[currentX][currentY] !== 'X' && currentY !== goalY) {
            currentY++
        } else if (left && listsY[currentX][currentY] !== 'X' && currentY !== goalY) {
            currentY--
        } else if (right && listsY[currentX][currentY] === 'X' && upward && currentY !== goalY && reverse) {
            currentY !== reversePosition ? reverseCount++ : reversePosition = currentY
            currentY--
            currentX--
        } else if (left && listsY[currentX][currentY] === 'X' && upward && currentY !== goalY && reverse) {
            currentY !== reversePosition ? reverseCount++ : reversePosition = currentY
            currentY++
            currentX--
        } else if (right && listsY[currentX][currentY] === 'X' && upward && currentY !== goalY && !reverse) {
            reverseCount = 1
            reverse = true
            reversePosition = currentY
            reversed = true
            currentY--
            currentX--
        } else if (left && listsY[currentX][currentY] === 'X' && upward && currentY !== goalY && !reverse) {
            reverseCount = 1
            reverse = true
            reversePosition = currentY
            reversed = true
            currentY++
            currentX--
        } else if (right && listsY[currentX][currentY] === 'X' && downward && currentY !== goalY && reverse) {
            currentY !== reversePosition ? reverseCount++ : reversePosition = currentY
            currentY--
            currentX++
        } else if (left && listsY[currentX][currentY] === 'X' && downward && currentY !== goalY && reverse) {
            currentY !== reversePosition ? reverseCount++ : reversePosition = currentY
            currentY++
            currentX++
        } else if (right && listsY[currentX][currentY] === 'X' && downward && currentY !== goalY && !reverse) {
            reverseCount = 1
            reverse = true
            reversePosition = currentY
            reversed = true
            currentY--
            currentX++
        } else if (left && listsY[currentX][currentY] === 'X' && downward && currentY !== goalY && !reverse) {
            reverseCount = 1
            reverse = true
            reversed = true
            reversePosition = currentY
            currentY++
            currentX++
        } else if (currentY === goalY && currentX < goalX && !reverse && !reversed) {
            currentX++
            count++
        } else if (currentY === goalY && currentX < goalX && !reverse && reversed) {
            currentX++
        } else if (currentY === goalY && currentX < goalX && reverse) {
            currentX++
            count += reverseCount
            reverseCount = 0
            reverse = false
            count++
        } else if (currentY === goalY && currentX > goalX && !reverse) {
            currentX--
        } else if (currentY === goalY && currentX > goalX && reverse) {
            currentX--
            count++
            count += reverseCount
            reverseCount = 0
            reverse = false
        }
    }
    count += reverseCount + 1
    return count
}

console.log(minimumMoves(['.X.', '.X.', '...'], 0, 0, 0, 2))
// works - 3
console.log(minimumMoves(['...', '.X.', '...'], 0, 0, 1, 2))
// works - 2
console.log(minimumMoves(['...', '.X.', '.X.'], 2, 0, 0, 2))
// works - 2
console.log(minimumMoves(['.X..XX...X', 'X.........', '.X.......X', '..........', '........X.', '.X...XXX..', '.....X..XX', '.....X.X..', '..........', '.....X..XX'], 9, 1, 9, 6))
// works - 3
console.log(minimumMoves(['...', '.X.', '.X.'], 2, 0, 2, 2))
// works - 3
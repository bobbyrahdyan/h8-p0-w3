function targetTerdekat(arr) {
    let arrX = [];
    let tempO = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'x') {
            arrX.push(i)
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'o') {
            tempO += i
        }
    }

    let result = [];
    for (let j = 0; j < arrX.length; j++) {
        result.push(Math.abs(arrX[j] - tempO))
    }

    for (let i = 0; i < result.length; i++) {
        for (let j = i + 1; j < result.length; j++) {
            if (result[i] > result[j]) {
                let temp = result[i]
                result[i] = result[j]
                result[j] = temp
            }
        }
    }
    if (result.length === 0) {
        return 0
    }
    return result[0]
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
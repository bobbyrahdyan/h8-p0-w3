function pasanganTerbesar(num) {
    let strNumber = String(num);
    let newArr = [];
    for (let i = 0; i < strNumber.length; i++) {
        if (i == strNumber.length - 1) {
            break;
        } else {
            newArr.push(strNumber[i] + strNumber[i + 1])
        }
    }
    
    for (let i = 0; i < newArr.length; i++) {
        for (let j = i + 1; j < newArr.length; j++) {
            if (newArr[i] > newArr[j]) {
                let temp = newArr[i]
                newArr[i] = newArr[j]
                newArr[j] = temp
            }
        }
    }
    return Number(newArr[newArr.length - 1])
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
function hitungJumlahKata(kalimat) {
    let str = '';
    let arr = [];
    for (let i = 0; i < kalimat.length; i++) {
        if (kalimat[i] !== ' ') {
            str += kalimat[i]
        } else if (kalimat[i] === ' ') {
            arr.push(str);
            str = '';
        }
    }
    arr.push(str)
    return arr.length
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5
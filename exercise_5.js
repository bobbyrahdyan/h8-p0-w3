function palindrome(kata) {
    let str = '';
    for (let i = kata.length - 1; i >= 0; i--) {
        str += kata[i]
    }
    return (kata === str) ? true : false
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
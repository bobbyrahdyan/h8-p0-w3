function angkaPalindrome(num) {
  let flag = false;

  while (flag === false) {
    num++;
    strNumber = '' + num;
    reversedNumber = '';

    for (let i = strNumber.length - 1; i >= 0; i--) {
      reversedNumber += strNumber[i];
    }

    if (strNumber === reversedNumber) {
      flag = true;
    }

  }
  return num;
}
 
// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
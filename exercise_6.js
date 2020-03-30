function angkaPalindrome(num) {
    let num1 = num + 1;   
    let reverse = '';   
    while(true){
    let i = String(num1);
    reverse = i.split('').reverse().join('');
    if(num1 === Number(reverse)){
        return num1
    }
    num1++
  } 
}
 
// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
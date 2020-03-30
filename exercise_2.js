let reverseWord = "Hello World!";
let newArr = [];

for (let i = reverseWord.length-1 ; i >= 0 ; i--){
    newArr += reverseWord[i]
}
console.log(newArr)
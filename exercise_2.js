function balikString(string) {
    stringBalik = '';
    for (let i = string.length-1; i >= 0; i--) {
      stringBalik += string[i];
    }
    return stringBalik;
}
  
console.log(balikString('Hello World!'))
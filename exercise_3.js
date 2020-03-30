let input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
  ]

function dataHandling(input){
    let data = '';
    for (let i = 0; i < input.length; i++ ) {
      data +=   'Nomor ID: ' + input[i][0] + '\n' + 
                'Nama Lengkap: ' + input[i][1] + '\n' + 
                'TTL: ' + input[i].slice(2,4).join(' ') + '\n' + 
                'Hobi: ' + input[i][4]+ '\n' + '\n';
    }
    return data;
  }
  
console.log(dataHandling(input));
var input = ['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca']

function dataHandling2(input) {
    input.splice(1, 2, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung');
    input.splice(4, 1, 'Pria', 'SMA Internasional Metro');
    console.log(`['${input[0]}', '${input[1]}', '${input[2]}', '${input[3]}', '${input[4]}', '${input[5]}']`);
    
    let splitDate = input[3].split('/');
    let splitDateToSort = input[3].split('/');
    let month = splitDate[1];

    let monthBulan = Number(month);
    let mountHuruf = '';

    switch (monthBulan) {
        case 01:
            mountHuruf = 'Januari';
            break;
        case 02:
            mountHuruf = 'Februari';
            break;
        case 03:
            mountHuruf = 'Maret';
            break;
        case 04:
            mountHuruf = 'April';
            break;
        case 05:
            mountHuruf = 'Mei';
            break;
        case 06:
            mountHuruf = 'Juni';
            break;
        case 07:
            mountHuruf = 'Juli';
            break;
        case 08:
            mountHuruf = 'Agustus';
            break;
        case 09:
            mountHuruf = 'September';
            break;
        case 10:
            mountHuruf = 'Oktober';
            break;
        case 11:
            mountHuruf = 'November';
            break;
        case 12:
            mountHuruf = 'Desember';
            break;
        default:
            mountHuruf = 'input month false';
            break;
    }
    console.log(mountHuruf);
    
    let sortedNumDescendDate = splitDateToSort.sort(function (a, b) {
        return b - a
    });
    console.log(sortedNumDescendDate);

    let newJoinDate = splitDate.join("-");
    console.log(newJoinDate);

    let name = input[1];
    let slicedName = name.slice(0, 15);
    console.log(slicedName);
}

dataHandling2(input);
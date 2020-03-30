let input = ['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca']

function dataHandling2(input) {
    input.splice(1, 2, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung');
    input.splice(4, 1, 'Pria', 'SMA Internasional Metro');
    console.log(`['${input[0]}', '${input[1]}', '${input[2]}', '${input[3]}', '${input[4]}', '${input[5]}']`);
    
    let splitDateToSort = input[3].split('/');
    let month = splitDateToSort[1];

    let monthBulan = Number(month);
    let monthString = '';

    switch (monthBulan) {
        case 01:
            monthString = 'Januari';
            break;
        case 02:
            monthString = 'Februari';
            break;
        case 03:
            monthString = 'Maret';
            break;
        case 04:
            monthString = 'April';
            break;
        case 05:
            monthString = 'Mei';
            break;
        case 06:
            monthString = 'Juni';
            break;
        case 07:
            monthString = 'Juli';
            break;
        case 08:
            monthString = 'Agustus';
            break;
        case 09:
            monthString = 'September';
            break;
        case 10:
            monthString = 'Oktober';
            break;
        case 11:
            monthString = 'November';
            break;
        case 12:
            monthString = 'Desember';
            break;
        default:
            monthString = 'input month false';
            break;
    }

    console.log(monthString);

    let sortedNumDescendDate = splitDateToSort.sort(function (a, b) {
        return b - a
    });

    console.log(sortedNumDescendDate);

    let newJoinDate = splitDateToSort.join("-");
    console.log(newJoinDate);

    let nama = input[1];
    let slicedName = nama.slice(0, 14);

    console.log(slicedName);
}

dataHandling2(input);
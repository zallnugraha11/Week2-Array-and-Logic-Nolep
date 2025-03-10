//pada soal yg kedua, kalian harus belajar method `splice`, `slice`, `join`, 'split', dan lainnya

let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
let tanggalArray = input[3].split("/");
let formatdate = [tanggalArray[2], tanggalArray[0], tanggalArray[1]]
    let formatdate1 = `${tanggalArray[0]}-${tanggalArray[1]}-${tanggalArray[2]}`
    let limitedName = input[1].substring(0, 15);

;
function dataHandling(input) {

    input.splice(1, 1, "Roman Alamsyah Elsharawy"), 
    input.splice(2, 1, "Provinsi" + input[2]),
    input.splice(4, 1, "Pria", "SMA International Metro");
    console.log(input)

}
dataHandling(input);

    if (tanggalArray[1] == "05" ){

        console.log("Mei")
    }


console.log(formatdate)
console.log(formatdate1)
console.log(limitedName)


/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */
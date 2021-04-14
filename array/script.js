var hari = [];

hari = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum\'at', 'Sabtu', 'Minggu'];

// console.log(hari.length); // tampil 7 (jumlah element)
console.log(hari.length);


// Elemen pada array boleh beda tipe
// array multidimensi / bersarang
var myFunc = function () {
    alert('Hello World');
}
var myArr = [
    'teks', 2, false, myFunc, [4, 5, 'tiga']
];

console.log(myArr[4][1]); // tampil 5
// Manupulasi Array

/*
* 1. Menambah isi array
*/
// var arr = [];

// arr[0] = "Abdullah";
// arr[1] = "Zain";

// console.log(arr);

/*
* 2. Menghapus isi array
*/
// var arr = ['Zainudin', 'Abdullah', 'Zain'];

// arr[1] = undefined;

// console.log(arr);

/*
* 3. Menampilkan isi Array
*/
// var arr = ['Zainudin', 'Abdullah', 'Zain', 'Yumika'];

// for (let i = 0; i < arr.length; i++) {
//     console.log('Mahasiswa ke-' + (i+1) + ': ' + arr[i]);
// }

/*
* 4. Method pada Array
*/
// 4.1 Join
var arr = ['Zain', 'Abdullah', 'Yumika'];

// console.log(arr.join()); // hasil: Zain,Abdullah,Yumika
// console.log(arr.join('-')); // hasil: Zain-Abdullah-Yumika
// console.log(arr.join(', ')); // hasil: Zain, Abdullah, Yumika

// 4.2 Push = menambah elemen array di akhir array nya
// arr.push('Doddy', 'Mika');
// console.log(arr.join(' - ')); // hasil: Zain - Abdullah - Yumika - Doddy - Mika

// 4.3 Pop = menghilangkan elemen terakhir
// arr.pop();
// console.log(arr.join(' - ')); // hasil: Zain - Abdullah

// 4.4 unshift & shift
// unshift = menambahkan elemen baru di awal array
// arr.unshift('Doddy');
// console.log(arr.join(' - ')); // hasil: Doddy - Zain - Abdullah - Yumika

// shift = menghilangkan elemen pertama
// arr.shift();
// console.log(arr.join(' - ')); // hasil: Abdullah - Yumika

// 5. Splice = menggabungkan
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, elemenBaruN, ...);
// arr.splice(1, 1);
// console.log(arr.join(' - ')); // hasil: Zain - Yumika
// arr.splice(1, 1, 'Mika', 'Tes');
// console.log(arr.join(' - ')); // hasil: Zain - Mika - Tes - Yumika

// 6. Slice = potong
// slice(awal, akhir);
var arr1 = ['Zain', 'Abdullah', 'Yumika', 'Doddy', 'Fitri'];
var arr2 = arr1.slice(1, 4);
console.log(arr2.join(' - ')); // hasil: Abdullah - Yumika - Doddy
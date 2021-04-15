// Manupulasi Array
/*
* 7. Foreach
*/
// var angka = [1, 2, 3, 4, 5, 6, 8];
// var nama = ['Zain', 'Abd', 'Mika'];
// for (let i = 0; i < angka.length; i++) {
//     console.log(angka[i]);
    
// }

// --> bisa juga dengan forEach :
// angka.forEach(function (e) {
//     console.log(e);
// });

// --> atau sama dengan : 
// var cetak = function (e) {
//     console.log(e);
// }
// angka.forEach(cetak);

// --> jika ingin mengambil index
// nama.forEach(function (e, i) {
//     // i akan mengaju ke index nya
//     // e akan mengaju ke element nya
//     console.log('Mahasiswa ke-' + (i+1) + ' adalah : ' + e);
// });

/*
* 8. Map
* Map mengembalikan array sdgkn foreach nggak
*/
// var angka = [1, 2, 5, 3, 6, 8, 4];
// var angka2 = angka.map(function (e) {
    //     // seluruh elemen di kalikan 2, lalu disimpan di variable angka2
    //     return e * 2;
    // })
// console.log(angka2.join(' - ')); // hasil: 2 - 4 - 10 - 6 - 12 - 16 - 8

/*
* 9. Sort
* Mengurutkan angka
*/
var angka = [1, 2, 5, 3, 6, 8, 4];
console.log(angka.join(', ')); // hasil: 1, 2, 5, 3, 6, 8, 4

angka.sort()
console.log(angka.join(', ')); // hasil: 1, 2, 3, 4, 5, 6, 8

var angka2 = [1, 2, 10, 5, 3, 20, 6, 8, 60, 4];
angka2.sort()
console.log(angka2.join(' - ')); // hasil: 1 - 10 - 2 - 20 - 3 - 4 - 5 - 6 - 60 - 8


angka2.sort(function (a, b) {
    // a - b itu ascending, jika b-a maka descending
    return a - b;
})
console.log(angka2.join(' - ')); // hasil: 1 - 2 - 3 - 4 - 5 - 6 - 8 - 10 - 20
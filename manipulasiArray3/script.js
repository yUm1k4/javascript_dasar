// Manupulasi Array
/*
* 10. Sort
* dapat mencari lebih dari satu dan method ini menghasilkan array
*/
var angka = [1, 2, 10, 5, 3, 20, 6, 8, 60, 4];
// // --> mencari angka 5 
// var angka2 = angka.filter(function (x) {
//     return x == 5;
// })
// console.log(angka2); // 5

// // --> mencari angka yang lebih besar dari 5 
// var angka2 = angka.filter(function (x) {
//     return x > 5;
// })

// console.log(angka2.join(', ')); // hasil: 10, 20, 6, 8, 60

/*
* 11. Find
* Hanya bisa mencari 1, dan tidak menhasilkan array
*/
// --> mencari angka yang lebih besar dari 5 
var angka2 = angka.find(function (x) {
    return x > 5;
})
console.log(angka2); // hasil: 10

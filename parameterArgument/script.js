/*
* No. 1
*/
// a dan b adalah parameter
// function tambah(a, b) {
//     return a + b;
// }
// a dan b adalah argument
// parseInt() utk memaksa string menjadi integer
// var a = parseInt(prompt('masukkan nilai pertama: '));
// var b = parseInt(prompt('masukkan nilai kedua: '));
// dan juga bisa menyimpan argument di dalam function
// hasil = tambah(a*2, b*2);



/*
* No. 2
*/
// function kali(a, b) {
//     return a * b;
// }
// var hasil = kali(tambah(1, 2), tambah(3, 4));


/*
* No. 3
*/
// sudo variable arguments
function tambah() {
    var hasil = 0;
    for (let i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    return hasil;
}
var coba = tambah(1,2,3,4);

console.log(coba);
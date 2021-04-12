// var ulang = true;

// while (ulang) {
//     console.log('hello world');
//     ulang = confirm('lagi?');
// }

/*
* akan mengulang hello world sebanyak 5x
* while ada 3 nilai: nilai awal, kondisi terminasi dan increment/decrement
*/
var nilaiAwal = 1;
while (nilaiAwal <= 5) {
    console.log('hello world ' + nilaiAwal + 'x');
    nilaiAwal++;
}
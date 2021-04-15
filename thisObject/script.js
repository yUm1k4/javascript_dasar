// this
// adalah keyword keyword spesial yg didefinisikan pada setiap function
// var a = 10;
// console.log(this.a);

// /*
// * Cara 1
//     Function declaration
// */
// function halo() {
//     console.log(this);
//     console.log('halo');
// }
// this.halo();
// // this mengembalikan object global

// /*
// * Cara 2
//     Function literal
// */
// var obj = {a: 10, nama: 'Zain'};
// obj.halo = function () {
//     console.log(this);
//     console.log('halo');
// }
// obj.halo();
// // this mengembalikan object yg bersangkutan

/*
* Cara 3
    Constructor
*/
function Halo() {
    console.log(this);
    console.log('halo');
}
var obj1 = new Halo();
var obj2 = new Halo();
// this mengembalikan object yang baru dibuat
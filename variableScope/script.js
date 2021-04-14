// global scope / window scope
var a = 1;

function tes() {
    var b = 2;
    console.log(a);
}

tes();
console.log(b);

// var a bisa dijalankan karena di dalam function bisa mengambil dari luar function, sedangkan
// var b tidak bisa dijalankan karena tidak bisa mengambil yang di dalam function
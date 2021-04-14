// diambil dari folder membuatFunction
// Yang Lama
function jmlVolumeDuaKubus(a, b) {
    var total;
    var volumeA;
    var volumeB;

    volumeA = a * a * a;
    volumeB = b * b * b;
    
    total = volumeA + volumeB;

    return total;
}

console.log(jmlVolumeDuaKubus(8, 3));

/*
* --------------------------------------------
*/

// Yang Baru menggunakan Refactoring
function jmlVolumeDuaKubus(a, b) {

    return a * a * a + b * b * b;
}

console.log(jmlVolumeDuaKubus(8, 3));
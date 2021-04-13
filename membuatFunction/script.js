// var a = 8;
// var b = 3;
// var volumeA;
// var volumeB;
// var total;

// volumeA = a * a * a;
// volumeB = b * b * b;

// total = volumeA + volumeB;

// lebih mudah menggunakan function akan jadi seperti ini:
function jmlVolumeDuaKubus(a, b) {
    var total;
    var volumeA;
    var volumeB;

    volumeA = a * a * a;
    volumeB = b * b * b;
    
    total = volumeA + volumeB;

    return total;
}

// bisa digunakan berulang kali
console.log(jmlVolumeDuaKubus(8, 3));
console.log(jmlVolumeDuaKubus(10, 15));
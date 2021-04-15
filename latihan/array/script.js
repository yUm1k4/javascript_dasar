var penumpang = [];

// function expression yg menerima 2 parameter
var tambahPenumpang = function (namaPenumpang, penumpang) {
    // jika angkot kosong
    if (penumpang.length == 0) {
        // tambah penumpang di awal array
        penumpang.push(namaPenumpang);
        // kembalikan isi array & keluar dari function
        return penumpang;
    } else { // else
        // telusuri seluruh kursi dari awal
        for (var i = 0; i < penumpang.length; i++) {
            // jika ada kursi kosong
            if (penumpang[i] == undefined) {
                // tambah penumpang di kursi tersebut
                penumpang[i] = namaPenumpang;
                // kembalikan isi array dan keluar dari function
                return penumpang;
            }
            // jika sudah ada nama yang sama
            else if (penumpang[i] == namaPenumpang) {
                // tampilkan pesan kesalahannya
                console.log(namaPenumpang + ' sudah ada di dalam angkot');
                // kembalikan isi array dan keluar dari function
                return penumpang;
            }
            // jika seluruh kursi terisi
            else if(i == penumpang.length - 1) {
                // tambah penumpang di akhir array
                penumpang.push(namaPenumpang);
                // kembalikan isi array dan keluar dari function
                return penumpang;
            }
        }
    }
}

var hapusPenumpang = function (namaPenumpang, penumpang) {
    // jika angkot kosong
    if (penumpang.length == 0) {
        // tampilkan pesan bahwa angkot kosong, dan
        // tidak mungkin ada penumpang turun
        console.log('Angkot masih kosong');
        // kembalikan isi array & keluar dari function
        return penumpang;
    } else {
        // telusuri seluruh kursi dari awal
        for (var i = 0; i < penumpang.length; i++) {
            // jika nama penumpang sesuai
            if (penumpang[i] == namaPenumpang) {
                // pesan penumpang telah turun
                console.log(namaPenumpang + ' telah turun');
                // penumpang turun dan ganti isi menjadi undefined
                penumpang[i] = undefined;
                return penumpang;
            }
            // jika penumpang tidak ada dengan nama tersebut
            else if (i == penumpang.length - 1) {
                console.log(namaPenumpang + ' tidak ada di dalam angkot');
                return penumpang;
            }
        }
    }
}
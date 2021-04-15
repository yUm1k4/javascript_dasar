// membuat object Angkot

// dengan constructor
function Angkot(sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    // kekola ketika penumpang naik
    this.penumpangNaik = function (namaPenumpang) {
        // memasukkan nama penumpang dari parameter Angkot()
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    // kekola ketika penumpang turun
    this.penumpangTurun = function (namaPenumpang, bayar) {
        // jika tidak ada penumpang
        if (this.penumpang.length == 0) {
            alert('Angkot masih kosong');
            return false;
        }
        
        // menelusuri penumpang
        for (let i = 0; i < this.penumpang.length; i++) {
            // jika ada nama penumpang di angkot
            if (this.penumpang[i] == namaPenumpang) {
                // maka turunkan lalu set jadi undefined
                console.log(namaPenumpang + ' turun dari angkot');
                this.penumpang[i] = undefined;
                // lalu kas nya bertambah dari yg dibayar penumpang
                this.kas += bayar;
                return this.penumpang;
            }
        }
    }
}

var angkot1 = new Angkot('Zain', ['Cicaheum', 'Cibiru'], [], 0);
var angkot2 = new Angkot('Abdullah', ['Antapani', 'Ciroyom'], [], 0);
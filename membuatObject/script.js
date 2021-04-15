// Membuat object
// --> menggunakan object literal
var mhs1 = {
    // nama adalah key, dan "Zainudin" adalah value
    nama: "Zainudin",
    nrp: "1921681019",
    email: "Zainudin@gmail.com",
    jurusan: "RPL"
}

var mhs2 = {
    nama: "Abdullah",
    nrp: "1921681020",
    email: "abdullah@gmail.com",
    jurusan: "TKJ"
}

// --> menggunakan function declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;

    return mhs;
}
var mhs3 = buatObjectMahasiswa('Mika', 123456789, 'zaiabdullah@gmail.com', 'RPL')

// --> menggunakan constructor
// biasanya custroctur nama function diawali dgn huruf besar
function Mahasiswa(nama, nrp, jurusan) {
    this.nama = nama;
    this.nrp = nrp;
    this.jurusan = jurusan;
}
// cara manggil harus menggunakan new
var mhs4 = new Mahasiswa('Zain', 12312321312, 'RPL')
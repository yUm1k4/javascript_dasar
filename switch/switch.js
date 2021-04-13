// var angka = prompt('Masukkan angka: ');

// switch (angka) {
//     case '1':
//         alert('anda memasukkan angka 1');
//         break;
    
//     case '2':
//         alert('anda memasukkan angka 2');
//         break;
    
//     case '3':
//         alert('anda memasukkan angka 3');
//         break;

//     default:
//         alert('angka yang anda masukkan salah');
//         break;
// }

var item = prompt('Masukkan nama makanan atau minuman: \n (cth: nasi, daging, susu, humberger, softdrink)');

switch (item) {
    case 'nasi':
    case 'daging':
    case 'susu':
        alert('Makanan/minuman Sehat!');
        break;
    
    case 'humberger':
    case 'softdrink':
        alert('Makanan/minuman Tidak Sehat!');
        break;
        
    default:
        alert('Makanan/minuman tidak terdaftar');
        break;
}
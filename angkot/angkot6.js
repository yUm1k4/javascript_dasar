// Latihan Juragan Angkot dengan pengkondisian

noAngkot = 1;
angkotBeroperasi = 6;
jmlAngkot = 10;

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot == 5 || noAngkot == 8 || noAngkot == 10) {
        console.log('Angkot No. ' + noAngkot + ' sedang lembur.');
    } else if (noAngkot <= angkotBeroperasi) {
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
    } else {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak dapat beroperasi.');
    }
}
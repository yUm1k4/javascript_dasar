// Latihan Juragan Angkot dengan While dan For

noAngkot = 1;
angkotBeroperasi = 6;
jmlAngkot = 10;

while (noAngkot <= angkotBeroperasi) {
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
    noAngkot++;
}

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
    console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
}
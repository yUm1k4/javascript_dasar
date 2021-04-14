// function tampilAngka(n) {
//     // base case sebagai tanda akhir berhenti
//     if (n === 0) return;

//     console.log(n);
//     tampilAngka(n - 1);
// }

// tampilAngka(10);

// contoh rekrusif dengan faktorial
// 5! = 5*4*3*2*1 = 120
function faktorial(n) {
    if (n == 0) return 1;
    return n * faktorial(n - 1);
}

console.log(faktorial(5));
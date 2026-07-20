const nilai = [80, 95, 70, 88, 100, 65];

let nilaiTertinggi = nilai[0];
let nilaiTerendah = nilai[0];

for (let i = 0; i < nilai.length; i++) {
    if (nilai[i] > nilaiTertinggi) {
        nilaiTertinggi = nilai [i];
    } 

    if (nilai[i] < nilaiTerendah) {
        nilaiTerendah = nilai [i];
    }
}

console.log("Nilai tertinggi : " + nilaiTertinggi);
console.log("Nilai terendah : " + nilaiTerendah);


const nama = "Budi";
const umur = "20";

const hargaBarang = [12000, 15000, 8000, 5000];

let totalBelanja = 0;

for (let i = 0; i < hargaBarang.length; i++) {
    totalBelanja += hargaBarang[i];
}

if (totalBelanja > 30000) {
    console.log ("Selamat! Anda mendapatkan diskon.");
    status = "Mendapat Diskon"
} else {
    console.log("Belanja lagi agar mendapat diskon.");
    status = "Tidak Mendapat Diskon"
}

console.log("=== STRUK PEMBELIAN ===");
console.log("Nama:", nama);
console.log("Umur:", umur);
console.log("totalBelanja:", totalBelanja);
console.log("Status:", status);


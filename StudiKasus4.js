const stok = [12, 0, 5, 8, 0, 20];

let barangHabis = 0;
let barangTersedia = 0;

for (let i = 0; i < stok.length; i++) {
    if (stok[i] == 0) {
        console.log("Barang ke-" + (i + 1) + " : " + stok[i] + " -> Barang Habis");
        barangHabis++;
    } else {
        console.log ("Barang ke-" + (i + 1) + " : " + stok[i] + " -> Stok Tersedia");
        barangTersedia++;
    }
}

console.log("Jumlah barang habis : " + barangHabis);
console.log("Jumlah barang tersedia : " + barangTersedia);
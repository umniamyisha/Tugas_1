const produk = [
"Laptop",
"Mouse",
"Keyboard",
"Monitor",
"Flashdisk"
];

const harga = [
7000000,
150000,
350000,
1800000,
120000
];

for (let i = 0; i < harga.length; i++) {
    if (harga[i] > 1000000) {
        console.log(produk[i] + " - Rp" + harga[i] + " -> Produk Mahal");
    } else {
        console.log(produk[i] + " - Rp" + harga[i] + " -> Produk Murah");
    }
}
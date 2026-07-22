const nilai = [90, 75, 60, 45, 88]

let lulus = 0;
let tidakLulus = 0;

for (let i = 0; i < nilai.length; i++) {
    if (nilai[i] >= 75) {
        console.log("Siswa ke-" + (i + 1) + ":" + nilai[i] + " Lulus");
        lulus++;
    } else {
        console.log("Siswa ke-" + (i + 1) + ":" + nilai[i] + "Tidak Lulus");
        tidakLulus++;
    }
}

console.log("jumlah yang lulus : " + lulus);
console.log("jumlah yang tidak lulus : " + tidakLulus);

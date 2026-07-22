const umur = [8, 13, 17, 20, 25, 11];

for (let i = 0; i < umur.length; i++) {
    if (umur[i] >= 17) {
        console.log("Pengunjung ke-" + (i + 1) + ":" + umur[i] + "Boleh Masuk");
    } else {
        console.log("Pengunjung ke-" + (i + 1) + ":" + umur[i] + "Tidak Boleh Masuk");

    }
}
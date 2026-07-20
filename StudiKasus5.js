const hadir = [
true,
false,
true,
true,
false,
true
];

let jumlahHadir = 0;
let jumlahTidakHadir = 0;

for (let i = 0; i < hadir.length; i++) {
    if (hadir[i] === true) {
        console.log("Siswa ke-" + (i + 1) + " : Hadir");
        jumlahHadir++;
    } else { 
        console.log("Siswa ke-" + (i + 1) + " : Tidak Hadir");
        jumlahTidakHadir++;
    }
}

console.log("Jumlah siswa hadir : " + jumlahHadir);
console.log("Jumlah siswa tidak hadir : " + jumlahTidakHadir);

let input = " riyanda_azis, ARIFIAN_SAPUTRA , hasan_harahap ";

input = input.trim();
let arrNama = input.split(",");
let namaBersih = arrNama.map((nama) => nama.trim().toLowerCase());
let hasil = namaBersih.join(" | ");

console.log(hasil);

// nyoba pake nama sendiri
let input2 = "  NABIL_akbar, Budi_SANTOSO , siti_aminah ";

input2 = input2.trim();
let arrNama2 = input2.split(",");
let namaBersih2 = arrNama2.map((nama) => nama.trim().toLowerCase());
let hasil2 = namaBersih2.join(" | ");

console.log(hasil2);

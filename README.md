# Tugas JS

Kumpulan tugas javascript.

## Isi file
- `user-data-cleaner.js` -> case 1, bersihin data user
- `product-filter.js` -> case 2, filter produk e-commerce

## Case 1
Inputnya string kotor dari form, terus dibersihin:
1. trim buat hapus spasi depan belakang
2. split(",") buat jadi array
3. map + trim + toLowerCase buat rapiin tiap nama
4. join(" | ") buat gabung lagi

Hasilnya:
```
riyanda_azis | arifian_saputra | hasan_harahap
```

## Case 2
Dari array products, olah pake filter, map, reduce:
1. filter yang active true aja
2. map buat ambil namanya terus kapital semua
3. reduce buat total harganya

Hasilnya:
```
[ 'LAPTOP', 'KEYBOARD' ]
1050
```

## Cara jalanin
```
node user-data-cleaner.js
node product-filter.js
```

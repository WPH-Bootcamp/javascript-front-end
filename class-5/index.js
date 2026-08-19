// JAVASCRIPT FUNDAMENTAL

// STRICT MODE

"use strict";

// console.log("=== STRICT MODE ===");

// try {
//   // Variabel belum dideklarasikan
//   // totalBelanja = 250_000; akan errorn karena belum di deklarasikan
//   let totalBelanja = 250_000;
//   console.log(totalBelanja);
// } catch (error) {
//   console.log("Terjadi error:", error.message);
// }

// // Cara yang benar

// const namaPelanggan = "Andi";
// let jumlahPesanan = 3;

// console.log("Pelanggan:", namaPelanggan);

// console.log("Jumlah pesanan:", jumlahPesanan);

// // this pada strict mode

// function cekContext() {
//   console.log("Nilai this:", this);
// }

// cekContext();

// VARIABLES — const, let, var

// console.log("\n=== VARIABLES ===");

// // const

// const namaToko = "IT Store";
// const alamatToko = {
//   kota: "Jakarta",
//   kodePos: "12345",
// };

// // Isi object masih boleh diubah

// alamatToko.kota = "Bekasi";

// console.log("Toko:", namaToko);

// console.log("Kota:", alamatToko.kota);

// // let

// let jumlahProduk = 10;

// jumlahProduk += 5;
// jumlahProduk -= 2;

// console.log("Jumlah produk:", jumlahProduk);

// // var

// for (var nomor = 1; nomor <= 3; nomor++) {
//   console.log("Loop:", nomor);
// }

// console.log("Nilai var setelah loop:", nomor);

// // let memiliki block scope

// for (let index = 0; index < 3; index++) {
//   console.log("Index:", index);
// }

// console.log(index);
// ReferenceError

// DATA TYPES

// console.log("\n=== DATA TYPES ===");

// // String
// const username = "vincent123";

// // Number
// const saldo = 1_500_000.5;

// // Boolean
// const akunAktif = true;

// // Null
// const alamatPengiriman = null;

// // Undefined
// let nomorTelepon;

// // Symbol
// const userId = Symbol("USER_ID");

// // BigInt
// const jumlahPendudukDunia = 8_000_000_000n;

// console.log(typeof username);
// console.log(typeof saldo);
// console.log(typeof akunAktif);
// console.log(typeof alamatPengiriman);
// console.log(typeof nomorTelepon);
// console.log(typeof userId);
// console.log(typeof jumlahPendudukDunia);

// // Object

// const pelanggan = {
//   nama: "Rina",
//   umur: 25,
// };
// console.log(typeof pelanggan);

// // Array

// const warna = ["merah", "biru", "hijau"];

// console.log(Array.isArray(warna));

// // NaN
// const hasilPembagian = Number("abc");

// console.log("Hasil:", hasilPembagian);
// console.log(Number.isNaN(hasilPembagian));

// // Template Literal
// const nama = "Rina";
// const umur = 25;

// console.log(`Nama saya ${nama} dan umur saya ${umur} tahun.`);

// 5. TYPE CONVERSION

// console.log("\n=== TYPE CONVERSION ===");

// const umurInput = "28";

// const umurAngka = Number(umurInput);
// const umurText = String(umurAngka);
// const umurBoolean = Boolean(umurAngka);

// console.log(umurAngka, typeof umurAngka);
// console.log(umurText, typeof umurText);
// console.log(umurBoolean, typeof umurBoolean);

// console.log(parseInt("250px"));
// console.log(parseFloat("12.75kg"));

// console.log(Boolean(0));
// console.log(Boolean(1));
// console.log(Boolean(""));
// console.log(Boolean("hello"));
// console.log(Boolean(null));
// console.log(Boolean(undefined));

// console.log("20" + 5);
// console.log("20" - 5);
// console.log("20" * "2");
// console.log(true + 5);

// 6. BASIC MATH OPERATORS

// console.log("\n=== MATH OPERATORS ===");

// const x = 12;
// const y = 5;

// console.log("Tambah:", x + y);
// console.log("Kurang:", x - y);
// console.log("Kali:", x * y);
// console.log("Bagi:", x / y);
// console.log("Modulo:", x % y);
// console.log("Pangkat:", x ** y);

// let poin = 50;

// poin += 10;
// poin -= 5;
// poin *= 2;
// poin /= 5;

// console.log("Poin:", poin);

// let nomor = 10;

// console.log("Prefix:", ++nomor);
// console.log("Postfix:", nomor++);
// console.log("Setelah:", nomor);

// console.log(Math.round(5.7));
// console.log(Math.floor(5.7));
// console.log(Math.ceil(5.2));
// console.log(Math.sqrt(64));
// console.log(Math.abs(-100));
// console.log(Math.max(5, 20, 15));
// console.log(Math.min(5, 20, 15));

// const random = Math.floor(Math.random() * 100) + 1;

// console.log("Random:", random);

// 7. COMPARISON

// console.log("\n=== COMPARISON ===");

// const valueA = 10;
// const valueB = "10";

// console.log("=== :", valueA === valueB);
// console.log("==  :", valueA == valueB);

// console.log(10 > 5);
// console.log(10 < 5);
// console.log(10 >= 10);
// console.log(8 <= 10);
// console.log(10 !== 20);

// console.log(0 == false);
// console.log("" == false);
// console.log(null == undefined);

// console.log(NaN === NaN);
// console.log(Number.isNaN(NaN));

// 8. IF / ELSE

// console.log("\n=== IF ELSE ===");

// const umurPembeli = 21;

// if (umurPembeli >= 18) {
//   console.log("Boleh membeli.");
// } else {
//   console.log("Belum memenuhi umur.");
// }

// function tentukanKategori(nilai) {
//   if (nilai >= 90) {
//     return "A";
//   } else if (nilai >= 80) {
//     return "B";
//   } else if (nilai >= 70) {
//     return "C";
//   } else if (nilai >= 60) {
//     return "D";
//   } else {
//     return "E";
//   }
// }

// console.log("Grade:", tentukanKategori(86));

// const nilaiUjian = 75;
// const statusUjian = nilaiUjian >= 70 ? "Lulus" : "Tidak Lulus";

// console.log(statusUjian);

// 9. LOGICAL OPERATORS

// console.log("\n=== LOGICAL OPERATORS ===");

// const umur = 25;
// const punyaTiket = true;

// if (umur >= 18 && punyaTiket) {
//   console.log("Silakan masuk.");
// }

// const metode = "cash";

// if (metode === "cash" || metode === "debit") {
//   console.log("Metode pembayaran valid.");
// }

// const logout = false;

// console.log(!logout);

// console.log("hello" && 123);
// console.log("" && 123);
// console.log(null && "data");

// console.log(null || "Default");
// console.log("User" || "Default");
// console.log(0 || "" || "Fallback");

// const sudahLogin = true;

// sudahLogin && console.log("Dashboard ditampilkan.");

// const usernameInput = "";

// const usernameDisplay = usernameInput || "Guest";

// console.log(usernameDisplay);

// console.log(!!"JavaScript");
// console.log(!!0);
// console.log(!![]);
// console.log(!!null);

// 10. NULLISH COALESCING & OPTIONAL CHAINING

// console.log("\n=== ?? DAN ?. ===");

// const jumlahPesanan = 0;

// console.log(jumlahPesanan ?? "Tidak tersedia");

// console.log(jumlahPesanan || "Tidak tersedia");

// const pelanggan = {
//   nama: "Citra",
//   alamat: {
//     kota: "Bogor",
//   },
// };

// console.log(pelanggan?.nama);
// console.log(pelanggan?.alamat?.kota);

// const pelangganBaru = null;

// console.log(pelangganBaru?.nama);

// const kota = pelangganBaru?.alamat?.kota ?? "Belum diketahui";

// console.log(kota);

// 11. LOOPS

// console.log("\n=== LOOPS ===");

// const harga = [10000, 25000, 30000, 45000];

// let total = 0;

// for (let i = 0; i < harga.length; i++) {
//   total += harga[i];
// }

// console.log("Total:", total);

// const buah = ["Apel", "Mangga", "Jeruk", "Pisang"];

// for (const item of buah) {
//   console.log("Buah:", item);
// }

// let percobaan = 1;

// while (percobaan <= 3) {
//   console.log("Percobaan:", percobaan);
//   percobaan++;
// }

// for (let angka = 1; angka <= 10; angka++) {
//   if (angka === 7) {
//     break;
//   }

//   console.log(angka);
// }

// for (let angka = 1; angka <= 10; angka++) {
//   if (angka % 2 === 0) {
//     continue;
//   }

//   console.log("Ganjil:", angka);
// }

// let hitung = 1;

// do {
//   console.log("Do while:", hitung);
//   hitung++;
// } while (hitung <= 3);

// 12. SWITCH

// console.log("\n=== SWITCH ===");

// const status = "paid";

// switch (status) {
//   case "pending":
//     console.log("Menunggu pembayaran.");
//     break;

//   case "paid":
//     console.log("Pembayaran berhasil.");
//     break;

//   case "cancelled":
//     console.log("Pesanan dibatalkan.");
//     break;

//   default:
//     console.log("Status tidak dikenal.");
// }

// const hariIni = "Sabtu";

// switch (hariIni) {
//   case "Senin":
//   case "Selasa":
//   case "Rabu":
//   case "Kamis":
//   case "Jumat":
//     console.log("Hari kerja.");
//     break;

//   case "Sabtu":
//   case "Minggu":
//     console.log("Hari libur.");
//     break;

//   default:
//     console.log("Hari tidak valid.");
// }

// 13. FUNCTION DECLARATION

// console.log("\n=== FUNCTION ===");

// function hitungLuas(panjang, lebar) {
//   return panjang * lebar;
// }

// console.log(hitungLuas(10, 8));

// function sapa(nama = "Guest") {
//   return `Halo ${nama}`;
// }

// console.log(sapa());
// console.log(sapa("Vincent"));

// function totalHarga(...hargaBarang) {
//   let total = 0;

//   for (const harga of hargaBarang) {
//     total += harga;
//   }

//   return total;
// }

// console.log(totalHarga(10000, 20000, 30000));

// 14. FUNCTION EXPRESSION
// CALLBACK & HIGHER-ORDER FUNCTION

// console.log("\n=== FUNCTION EXPRESSION ===");

// const hitungDiskon = function (harga, persen) {
//   return (harga * persen) / 100;
// };

// console.log(hitungDiskon(500000, 10));

// function jalankanOperasi(angka, operasi) {
//   return operasi(angka);
// }

// const tambahSepuluh = function (angka) {
//   return angka + 10;
// };

// const kuadratkan = function (angka) {
//   return angka ** 2;
// };

// console.log(jalankanOperasi(20, tambahSepuluh));

// console.log(jalankanOperasi(5, kuadratkan));

// const namaProdukList = ["Laptop", "Mouse", "Keyboard", "Monitor"];

// const produkPanjang = namaProdukList.filter(function (produk) {
//   return produk.length > 5;
// });

// console.log(produkPanjang);

// const sistem = (function () {
//   const versi = "1.0.0";
//   const environment = "development";

//   return {
//     getVersi() {
//       return versi;
//     },
//     getEnvironment() {
//       return environment;
//     },
//   };
// })();

// console.log(sistem.getVersi());
// console.log(sistem.getEnvironment());

// 15. ARROW FUNCTION

console.log("\n=== ARROW FUNCTION ===");

const tambah = (a, b) => {
  return a + b;
};

const kurang = (a, b) => a - b;

const kali = (angka) => angka * 2;

const buatData = (nama) => ({
  nama: nama,
  aktif: true,
});

console.log(tambah(10, 20));

console.log(kurang(20, 5));

console.log(kali(10));

console.log(buatData("Andi"));

const angkaList = [5, 10, 15, 20, 25];

const angkaDiatas10 = angkaList.filter((angka) => angka > 10);

console.log(angkaDiatas10);

const angkaKaliDua = angkaList.map((angka) => angka * 2);

console.log(angkaKaliDua);

// 16. OBJECT

console.log("\n=== OBJECT ===");

const pegawai = {
  nama: "Sinta",
  jabatan: "UI Designer",
  umur: 27,
  gaji: 9000000,

  perkenalan() {
    return `Saya ${this.nama}, bekerja sebagai ${this.jabatan}.`;
  },

  get kategoriGaji() {
    if (this.gaji >= 15000000) {
      return "Senior";
    }

    if (this.gaji >= 8000000) {
      return "Middle";
    }

    return "Junior";
  },
};

console.log(pegawai.nama);
console.log(pegawai["jabatan"]);

console.log(pegawai.perkenalan());

console.log(pegawai.kategoriGaji);

pegawai.email = "sinta@email.com";

pegawai.gaji = 12000000;

delete pegawai.email;

console.log(Object.keys(pegawai));

console.log(Object.values(pegawai));

console.log(Object.entries(pegawai));

console.log("nama" in pegawai);

console.log(pegawai.hasOwnProperty("gaji"));

// ==================================================
// BEST PRACTICE
// ==================================================

/*
1. Gunakan const sebagai default.
2. Gunakan let jika nilai berubah.
3. Hindari var.
4. Gunakan === dan !==.
5. Gunakan if/else untuk kondisi.
6. Gunakan switch untuk pilihan diskrit.
7. Gunakan function untuk kode reusable.
8. Gunakan callback untuk mengirim function.
9. Gunakan arrow function untuk function singkat.
10. Gunakan ?? untuk null/undefined.
11. Gunakan ?. untuk akses object yang aman.
12. Gunakan for...of untuk membaca nilai iterable.
13. Gunakan break untuk menghentikan loop.
14. Gunakan continue untuk melewati iterasi.
15. Gunakan object untuk menyimpan data key-value.
*/

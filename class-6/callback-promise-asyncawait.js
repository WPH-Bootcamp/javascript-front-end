// Callback Promise Async/Await

// Callback adalah function yang diberikan sebagai argument kepada function lain, kemudian dipanggil ketika suatu proses selesai.

"use strict";

// FUNCTION AMBIL DATA USER

// function ambilUser(callback) {
//   console.log("Mengambil data user...");

//   setTimeout(function () {
//     const user = {
//       id: 1,
//       nama: "Vincent",
//       email: "vincent@example.com",
//     };

//     console.log("Data user berhasil diambil.");

//     // Kirim data ke callback
//     callback(user);
//   }, 2000);
// }

// // MENJALANKAN FUNCTION

// console.log("1. Program dimulai");

// ambilUser(function (user) {
//   console.log("3. Data diterima:");
//   console.log(user);
// });

// console.log("2. Program lanjut berjalan");

/**
1. Program dimulai
Mengambil data user...
2. Program lanjut berjalan

// 2 detik kemudian

Data user berhasil diambil.
3. Data diterima:
{
  id: 1,
  nama: "Vincent",
  email: "vincent@example.com"
}
 */

// Callback bisa digunakan.

// Tapi kalau proses asynchronous mulai banyak dan saling bergantung, callback bisa menjadi terlalu dalam.

// Contoh callback:

ambilUser(function (user) {
  ambilOrders(user.id, function (orders) {
    ambilDetail(orders[0].id, function (detail) {
      console.log(detail);
    });
  });
});

// Ini yang disebut callback pyramid / callback hell

// Konsep Promise

// Promise adalah object yang mewakili hasil dari proses asynchronous.

// Promise mempunyai tiga keadaan:

// pending
//    ↓
// fulfilled

// atau

// pending
//    ↓
// rejected

// FUNCTION AMBIL DATA USER

// function ambilUser() {
//   return new Promise(function (resolve, reject) {
//     console.log("Mengambil data user...");

//     setTimeout(function () {
//       const berhasil = true;

//       if (berhasil) {
//         const user = {
//           id: 1,
//           nama: "Vincent",
//           email: "vincent@example.com",
//         };

//         console.log("Data user berhasil diambil.");

//         // Promise berhasil
//         resolve(user);
//       } else {
//         // Promise gagal
//         reject(new Error("Gagal mengambil user."));
//       }
//     }, 2000);
//   });
// }

// MENJALANKAN PROMISE

// console.log("1. Program dimulai");

// ambilUser()
//   .then(function (user) {
//     console.log("3. Data diterima:");
//     console.log(user);
//   })

//   .catch(function (error) {
//     console.error("Terjadi error:", error.message);
//   });

// console.log("2. Program lanjut berjalan");

/*
1. Program dimulai
Mengambil data user...
2. Program lanjut berjalan

// 2 detik kemudian

Data user berhasil diambil.
3. Data diterima:
{
  id: 1,
  nama: "Vincent",
  email: "vincent@example.com"
}
*/

// Promise Chain

// ambilUser()
//   .then(function (user) {
//     return ambilOrders(user.id);
//   })

//   .then(function (orders) {
//     return ambilDetail(orders[0].id);
//   })

//   .then(function (detail) {
//     console.log(detail);
//   })

//   .catch(function (error) {
//     console.error(error);
//   });

// Async/Await

// Promise sudah membuat kode lebih rapi.

// FUNCTION AMBIL DATA USER

function ambilUser() {
  return new Promise(function (resolve, reject) {
    console.log("Mengambil data user...");

    setTimeout(function () {
      const berhasil = true;
      if (berhasil) {
        const user = {
          id: 1,
          nama: "Vincent",
          email: "vincent@example.com",
        };

        console.log("Data user berhasil diambil.");

        resolve(user);
      } else {
        reject(new Error("Gagal mengambil user."));
      }
    }, 2000);
  });
}

// ASYNC FUNCTION

async function jalankan() {
  console.log("1. Program dimulai");

  try {
    const user = await ambilUser();
    console.log("3. Data diterima:");
    console.log(user);
  } catch (error) {
    console.error("Terjadi error:", error.message);
  }
  console.log("4. Function selesai");
}

// JALANKAN PROGRAM

jalankan();

console.log("2. Program utama tetap berjalan");

/*
1. Program dimulai
Mengambil data user...
2. Program utama tetap berjalan

// 2 detik kemudian

Data user berhasil diambil.
3. Data diterima:
{
  id: 1,
  nama: "Vincent",
  email: "vincent@example.com"
}

4. Function selesai */

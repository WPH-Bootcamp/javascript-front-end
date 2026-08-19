// Object VS Class

// Class: class adalah sintaks modern untuk membuat object menggunakan constructor.

// Object ada 2: Object Literal dan Object Class

// Object Literal
// const user = {
//   name: "Vincent",
//   score: 100,
//   greet: function () {
//     console.log("Hello World!!");
//   },
// };

// user.greet();
// console.log("user", user);

class User {
  constructor(name, score, hobbies) {
    this.name = name || "";
    this.score = score || 0;
    this.hobbies = hobbies || [];
  }
  greet() {
    console.log("Hello World!!");
  }
  mentionName() {
    if (this.name === "") {
      console.log(`I don't have name.`);
    } else {
      console.log(`My name is ${this.name}.`);
    }
  }
}
console.log("User", User);

// Instanciation : proses membuat instansi atau instanceOf
const user1 = new User("Vincent", 100);
const user2 = new User("Ncent", 90);
const user3 = new User("Andi", 95);
const user4 = new User("Budi");
const user5 = new User();

// Object Class
console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);
console.log(user5);

user1.mentionName();
user2.mentionName();
user3.mentionName();
user4.mentionName();
user5.mentionName();

// =========================================
// Object-Oriented Programming (OOP)
// =========================================

// 4 Pilar Utama OOP

// 1. Inheritance
// Pewarisan.
// Class atau object dapat mewarisi property dan method dari class lain,
// sehingga kode dapat digunakan kembali (reusable).

// 2. Encapsulation
// Pembungkusan data.
// Menyembunyikan data atau implementasi internal dan hanya memberikan
// akses melalui method atau property yang diperlukan.

// 3. Abstraction
// Penyederhanaan.
// Menampilkan fitur yang penting saja kepada pengguna,
// sementara detail implementasinya disembunyikan.

// 4. Polymorphism
// Banyak bentuk.
// Method yang sama dapat memiliki perilaku yang berbeda
// tergantung object atau class yang menggunakannya.

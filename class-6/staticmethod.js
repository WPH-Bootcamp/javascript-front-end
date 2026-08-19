// STATIC METHOD

// TANPA STATIC METHOD
// class Person {
//   speak() {
//     console.log("Hello World!!");
//   }
// }

// // Harus instanciation dulu
// const person = new Person();

// person.speak();

// DENGAN STATIC METHOD
class Person {
  static speak() {
    console.log("Hello World!!");
  }
  static greet() {
    console.log("Good Evening!!");
  }
  static work() {
    console.log("Go To Work!!");
  }
}

Person.speak();
Person.greet();
Person.work();

/*
    ## 📝 Soal - Static Method

    Buatlah sebuah class **MathHelper** yang memiliki beberapa **static method** berikut.

    ### Static Method
    - `add(a, b)`
    - Mengembalikan hasil penjumlahan.

    - `subtract(a, b)`
    - Mengembalikan hasil pengurangan.

    - `multiply(a, b)`
    - Mengembalikan hasil perkalian.

    - `divide(a, b)`
    - Mengembalikan hasil pembagian.

    - `modules(a, b)`
    - Mengembalikan hasil sisa bagi.


    ### Instruksi
    1. Jangan membuat object menggunakan `new`.
    2. Panggil semua method langsung dari class `MathHelper`.
    3. Tampilkan hasilnya ke console.

    ### Expected Output

    ```text
    10 + 5 = 15
    10 - 5 = 5
    10 × 5 = 50
    10 / 5 = 2
    10 % 5 = 0
``` */

class MathHelper {
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }

  static multiply(a, b) {
    return a * b;
  }

  static divide(a, b) {
    return a / b;
  }

  static modulus(a, b) {
    return a % b;
  }
}

console.log(`10 + 5 = ${MathHelper.add(10, 5)}`);
console.log(`10 - 5 = ${MathHelper.subtract(10, 5)}`);
console.log(`10 × 5 = ${MathHelper.multiply(10, 5)}`);
console.log(`10 ÷ 5 = ${MathHelper.divide(10, 5)}`);
console.log(`10 % 3 = ${MathHelper.modulus(10, 3)}`);

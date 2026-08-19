// ENCAPSULATION

// Encapsulation adalah konsep OOP untuk menyembunyikan data
// agar tidak dapat diakses atau diubah secara langsung dari luar class.
//
// Tujuannya:
// 1. Melindungi data.
// 2. Mengontrol perubahan data.
// 3. Membuat kode lebih aman dan mudah dikelola.
//
// JavaScript menggunakan tanda '#' untuk membuat
// property atau method menjadi private.

// TANPA ENCAPSULATION

// Property dapat diakses dan diubah langsung dari luar class.

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }
}

const account1 = new BankAccount("Vincent", 1000);

account1.balance = -500;

console.log(account1.balance);

// Output
// -500

// Tidak aman karena balance dapat diubah sembarangan.

// DENGAN ENCAPSULATION

// Gunakan '#' agar property menjadi private.

class BankAccount2 {
  #balance = 0;

  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }

  showBalance() {
    console.log(`Balance : $${this.#balance}`);
  }
}

const account2 = new BankAccount2("Vincent", 1000);

account2.showBalance();

// Output
// Balance : $1000

// PRIVATE PROPERTY

// Property dengan '#' hanya bisa diakses
// dari dalam class.

class User {
  #password = "12345";

  showPassword() {
    console.log(this.#password);
  }
}

const user = new User();

user.showPassword();

// Output
// 12345

// Error
// console.log(user.#password);

// GETTER METHOD

// Getter digunakan untuk mengambil nilai
// dari private property.

class Student {
  #score = 90;

  getScore() {
    return this.#score;
  }
}

const student = new Student();

console.log(student.getScore());

// Output
// 90

// SETTER METHOD

// Setter digunakan untuk mengubah nilai
// private property dengan validasi.

class Student2 {
  #score = 0;

  setScore(score) {
    if (score < 0 || score > 100) {
      console.log("Invalid Score");
      return;
    }

    this.#score = score;
  }

  getScore() {
    return this.#score;
  }
}

const student2 = new Student2();

student2.setScore(95);

console.log(student2.getScore());

// Output
// 95

// VALIDATION

// Encapsulation memungkinkan kita
// melakukan validasi sebelum data diubah.

class BankAccount3 {
  #balance = 0;

  deposit(amount) {
    if (amount <= 0) {
      console.log("Invalid Amount");
      return;
    }

    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account3 = new BankAccount3();

account3.deposit(500);

console.log(account3.getBalance());

// Output
// 500

// KESIMPULAN

// ✔ Gunakan '#' untuk membuat property private.
// ✔ Data private tidak bisa diakses dari luar class.
// ✔ Gunakan Getter untuk mengambil data.
// ✔ Gunakan Setter atau method lain untuk mengubah data.
// ✔ Encapsulation membantu menjaga data tetap aman dan valid.

/*
    ## 📝 Soal - Encapsulation

    Buatlah sebuah class **Smartphone** dengan ketentuan berikut.

    ### Property
    - `brand` (public)
    - `#battery` (private)

    ### Method
    - `setBattery(battery)`
    - Menyimpan nilai ke `#battery`.
    - `getBattery()`
    - Mengembalikan nilai `#battery`.

    ### Instruksi
    1. Buat object `phone` dengan brand `"Samsung"`.
    2. Set battery menjadi `80`.
    3. Tampilkan brand.
    4. Tampilkan battery menggunakan `getBattery()`.

    ### Expected Output

    ```text
    Brand : Samsung
    Battery : 80%
    ```

*/

class Smartphone {
  #battery;

  constructor(brand) {
    this.brand = brand;
  }

  setBattery(battery) {
    this.#battery = battery;
  }

  getBattery() {
    return this.#battery;
  }
}

const phone = new Smartphone("Samsung");

phone.setBattery(80);

console.log(`Brand : ${phone.brand}`);
console.log(`Battery : ${phone.getBattery()}%`);

/**
    ## 📝 Soal - Inheritance & Encapsulation

    Buatlah sebuah class **Vehicle** sebagai parent class, kemudian buat class **Car** yang mewarisi `Vehicle`.

    ### Vehicle
    #### Property
    - `brand` (public)
    - `#speed` (private)

    #### Method
    - `setSpeed(speed)`
    - Menyimpan nilai ke `#speed`.
    - `getSpeed()`
    - Mengembalikan nilai `#speed`.

    ---

    ### Car
    Class `Car` mewarisi (`extends`) class `Vehicle`.

    Tambahkan method:
    - `drive()`
    - Menampilkan:
        ```
        <brand> is driving at <speed> km/h.
        ```

    > Gunakan method `getSpeed()` untuk mengambil nilai `#speed`.

    ---

    ### Instruksi
    1. Buat object `car` dari class `Car`.
    2. Isi brand dengan `"Toyota"`.
    3. Set speed menjadi `120`.
    4. Tampilkan brand.
    5. Tampilkan speed menggunakan `getSpeed()`.
    6. Panggil method `drive()`.

    ### Expected Output

    ```text
    Brand : Toyota
    Speed : 120 km/h
    Toyota is driving at 120 km/h.
    ```

 */

class Vehicle {
  #speed = 0;

  constructor(brand) {
    this.brand = brand;
  }

  setSpeed(speed) {
    this.#speed = speed;
  }

  getSpeed() {
    return this.#speed;
  }
}

class Car extends Vehicle {
  drive() {
    console.log(`${this.brand} is driving at ${this.getSpeed()} km/h.`);
  }
}

const car = new Car("Toyota");

car.setSpeed(120);

console.log(`Brand : ${car.brand}`);
console.log(`Speed : ${car.getSpeed()} km/h`);

car.drive();

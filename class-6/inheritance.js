// INHERITANCE

class User {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }
}

class Member extends User {
  constructor(fullname, email, password, role, level) {
    super(fullname, email, password);
    this.role = role;
    this.level = level;
  }
}

class Guest extends User {
  constructor(fullname, email, password, role) {
    super(fullname, email, password);
    this.role = role;
  }
}

class Admin extends User {
  constructor(fullname, email, password, role) {
    super(fullname, email, password);
    this.role = role;
  }
}

/*
## 📝 Soal 1 - Employee (Class Inheritance)

Buatlah sebuah class **Employee** dengan ketentuan berikut:

### Employee
- Memiliki property:
  - `name`
- Memiliki method:
  - `work()` → menampilkan:
    ```
    Vincent is working.
    ```

### Manager
Buat class **Manager** yang mewarisi (`extends`) class **Employee**.

Tambahkan method:
- `manage()` → menampilkan:
  ```
  Vincent is managing the team.
  ```

### Instruksi
1. Buat object `manager` dari class `Manager`.
2. Isi nama dengan `"Vincent"`.
3. Panggil method `work()`.
4. Panggil method `manage()`.

### Expected Output

```text
Vincent is working.
Vincent is managing the team.
``` */

class Employee {
  constructor(name) {
    this.name = name;
  }
  work() {
    console.log(`${this.name} is working.`);
  }
}

class Manager extends Employee {
  constructor(name) {
    super(name);
  }
  manage() {
    console.log(`${this.name} is managing the team.`);
  }
}

const manager = new Manager("Vincent");

// manager.work();
// manager.manage();

/*
## 📝 Soal 2 - Class Inheritance

    Buatlah sebuah class **Animal** sebagai parent class, kemudian buat **3 class turunan** yang mewarisi `Animal`.

    ### Animal
    - Property:
    - `name`
    - Method:
    - `eat()` → menampilkan:
        ```
        <name> is eating.
        ```

    ### Dog
    - Inherit dari `Animal`
    - Tambahkan method:
    - `bark()` → menampilkan:
        ```
        <name> says Woof!
        ```

    ### Cat
    - Inherit dari `Animal`
    - Tambahkan method:
    - `meow()` → menampilkan:
        ```
        <name> says Meow!
        ```

    ### Bird
    - Inherit dari `Animal`
    - Tambahkan method:
    - `fly()` → menampilkan:
        ```
        <name> is flying.
        ```

    ### Instruksi
    1. Buat object:
    - `dog` dengan nama `"Buddy"`
    - `cat` dengan nama `"Kitty"`
    - `bird` dengan nama `"Rio"`
    2. Panggil method `eat()` pada masing-masing object.
    3. Panggil method khusus sesuai class masing-masing.

    ### Expected Output

    ```text
    Buddy is eating.
    Buddy says Woof!

    Kitty is eating.
    Kitty says Meow!

    Rio is eating.
    Rio is flying.
```
 */

class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(`${this.name} is eating.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} says Woof!`);
  }
}

class Cat extends Animal {
  meow() {
    console.log(`${this.name} says Meow!`);
  }
}

class Bird extends Animal {
  fly() {
    console.log(`${this.name} is flying.`);
  }
}

const dog = new Dog("Buddy");
const cat = new Cat("Kitty");
const bird = new Bird("Rio");

dog.eat();
dog.bark();
console.log();
cat.eat();
cat.meow();
console.log();
bird.eat();
bird.fly();

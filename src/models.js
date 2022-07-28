// Classes
class User {
  // Constructor
  constructor(name, password, age) {
    this.name = name;
    this.password = password;
    this.age = age;
  }
  // Class Methods
  introduce() {
    console.log("Hello my name is " + this.name + " and I am " + this.age);
  }
}

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log("Hello my name is " + this.name + " and I am " + this.age);
  }
}

// Exporting Variables
module.exports = { User, Animal };

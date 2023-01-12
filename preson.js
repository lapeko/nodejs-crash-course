class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`Hello. My name is ${this.name}, my age is ${this.age}`)
  }
}

module.exports = Person;
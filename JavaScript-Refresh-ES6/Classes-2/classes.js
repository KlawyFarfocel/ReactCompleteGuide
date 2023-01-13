class Human {
  constructor(gender) {
    this.gender = gender;
  }
  PrintGender = () => this.gender;
}
class Person extends Human {
  constructor(name, age, gender) {
    super(gender);
    this.name = name;
    this.age = age;
  }
  printPerson() {
    console.log("Imię: " + this.name);
    console.log("Wiek: " + this.age);
    console.log("Płeć: " + this.PrintGender());
  }
}
const person = new Person("Maciej", 21, "Mężczyzna");
person.printPerson();

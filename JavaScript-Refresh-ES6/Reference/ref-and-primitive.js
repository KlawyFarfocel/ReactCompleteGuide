console.log("-----------------------------------------Reference-----------------------------------------");
const Person = {
  name: "Maciek",
};
const newPerson=Person;
const neverChangePerson={...Person};
Person.name="Włodzimierz";
console.log(newPerson.name);
console.log(neverChangePerson.name);

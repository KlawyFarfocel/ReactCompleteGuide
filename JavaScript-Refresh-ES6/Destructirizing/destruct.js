const Fruits = ["Apple", "Banana", "Pineapple"];
let [Fruit1, ,Fruit2] = Fruits;
console.log(Fruit1);
console.log(Fruit2);

console.log("------------------------Object destructurizing------------------------")
const Person = {
    name: "Maciej",
    age: 27,
  };

let {name,age} = Person;
console.log(name);
console.log(age);



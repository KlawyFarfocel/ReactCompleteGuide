const sortArgs = (...args) => //rest operator
  args.sort(function (a, b) {
    return a - b;
  });
//  -----------------------------------------Spread operator-----------------------------------------
let Args = sortArgs(1, 2, 69, 4, 98, 6, 2134);

const newArray = { ...Args, newProp: 69 }; //spread operator
const newestArray = [...Args, 2137];
console.log(newArray);
console.log(newestArray);
const Person = {
  name: "Maciej",
};
const newPerson = {
  ...Person,
  age: 21,
};
console.log(newPerson);
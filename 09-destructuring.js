const person = {
   firstName: "Tom",
   lastName: "Cruise",
   actor: true,
   age: 54 //made up
};

const { firstName: name, age } = person;
//with array
const a = [1,2,3,4,5]
[first, second, , , fifth] = a
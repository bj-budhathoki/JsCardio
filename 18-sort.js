const inventors = [
   { first: "bijay", last: "budhathoki", year: 1995, passed: 2000 },
   { first: "sara", last: "nepal", year: 1497, passed: 1501 },
   { first: "ryu", last: "nepal", year: 1476, passed: 1500 },
   { first: "ben", last: "nepal", year: 1480, passed: 1500 },
   { first: "sapana", last: "malla", year: 2000, passed: 2006 },
   { first: "john", last: "Doe", year: 1995, passed: 1998 },
   { first: "jane", last: "Doe", year: 1967, passed: 1980 }
];
//sort the inventors by birthday,youngest to oldest;
const order = inventors.sort((young, old) => (young.year < old.year ? 1 : -1));
console.table(order);
console.log("HELLO");

const inventors = [
   { first: "bijay", last: "budhathoki", year: 1995, passed: 2000 },
   { first: "sara", last: "nepal", year: 1497, passed: 1501 },
   { first: "ryu", last: "nepal", year: 1476, passed: 1500 },
   { first: "ben", last: "nepal", year: 1480, passed: 1500 },
   { first: "sapana", last: "malla", year: 2000, passed: 2006 },
   { first: "john", last: "Doe", year: 1995, passed: 1998 },
   { first: "jane", last: "Doe", year: 1967, passed: 1980 }
];
//finde the inventors who born in the 1400's
const fourteen = inventors.filter(
   inventor => inventor.year >= 1400 && inventor.year <= 1500
);
console.log(fourteen);

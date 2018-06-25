const inventors = [
   { first: "bijay", last: "budhathoki", year: 1995, passed: 2000 },
   { first: "himal ", last: "nepal", year: 1497, passed: 1547 },
   { first: "sapana", last: "malla", year: 2000, passed: 2006 },
   { first: "john", last: "Doe", year: 1995, passed: 1998 },
   { first: "jane", last: "Doe", year: 1967, passed: 1980 }
];
//find fullname of inventors
const fullname = inventors.map(
   inventor => `${inventor.first}  ${inventor.last}`
);
console.log(fullname);

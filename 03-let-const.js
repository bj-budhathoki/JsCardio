// let is a new variable decleration which is block scope
// example
for (let i = 0; i < 5; i++) {
   console.log(i);
}
console.log(i); //this will throw the error

// using var keyword
for (var i = 0; i < 5; i++) {
   // console.log(i)
}
console.log(i); //does not throw the error.here var i is hoisted

// const is just like let, but immutable.

// classic  example
function hello() {
   //code goes here...
   console.log("classic example");
}
hello();

//using arrow function with no parameter
const helloArrow = () => {
   //code goes here
   console.log("arrow function example");
};

//with one parameter
const helloArrow = a => {
   console.log("arrow function example");
};
//with more the one parameter
const helloArrow = (a, b) => {
   console.log("arrow function example");
};
//one only return statement
const helloArrow = () => console.log("arrow function example");
helloArrow();

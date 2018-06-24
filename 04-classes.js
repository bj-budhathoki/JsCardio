class Person {
   constructor(name) {
      this.name = name;
   }

   hello() {
      return "Hello, I am " + this.name + ".";
   }
}
class Footballer extends Person {
   hello() {
      return super.hello() + " I am an footballer.";
   }
}
var messi = new Actor("leo messi");
messi.hello();

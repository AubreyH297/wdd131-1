console.log("28.26");
console.log("1256");

// Declare a variable //
let age = 25;

// Like print in Python
console.log(age);

age = 26;

console.log(age);

// A constant variable
const name = "Brother Warner";

// This shouldn't work...
// name = "Dr Java";

// Scope = where you can reference a variable by name.

if(age == 22) {
    let message = "Hello.";
    console.log(message);
}

document.querySelector("h1").style.color = "blue";

const PI = 3.14;
let radius = 3;

const one = 1;
const two = '2';

let course = "CSE131"; //global scope
if (true) {
    let student = "John";
    console.log(course);  //works just fine, course is global
    console.log(student); //works just fine, it's being accessed within the block
}
console.log(course); //works fine, course is global
console.log(student); //does not work, can't access a block variable outside the block
                    

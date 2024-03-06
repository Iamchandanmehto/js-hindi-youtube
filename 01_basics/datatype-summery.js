// Primitive

// 7 types : Stirng, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100 
const scoreValue = 100.3

const isLoggeedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 536765176537615763n

//Refrence(Non primitive)

// Array, Objects, Functions

const heros = ["ironman", "shaktiman", "oggy"]
 let myObj = {
name: "chandan",
age: 20,

}

const myFunction = function(){
    console.log(typeof heros);
}

// ********************************************************************************************************************/

//Stack(primitive), Heap (NOn-Primitive)

let myYoutubename = "chandan@.com"

let anothername = myYoutubename

anothername = "codedesk"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"

}

let userTwo = userOne

userTwo.email = "chandan@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);









// Primitve

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.4

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);

const bigNumber = 782378782342347673167n

//Refrence (Non primitive)

// Array, Objects, Functions


const heros = [ "shaktiman", "nagraj", "doga"]  // array
{
    name: "chandan"
    age:20
} // jo curly braces ke andr jitni bhi value hai bo objects hai

const myFunction = function() {
    console.log("hello world");
}
//console.log( typeof heros);

//******************************************************* */

// Stack (Primitive), Heap ( Non- Primitive)

let myYoutube = "iamchandan"
let anothername = "chandan"

console.log(myYoutube);
console.log(anothername);

let userOne = {
    email:"user@google.com"

}


let usertwo = userOne

usertwo.email = "chandan@google.com"

console.log(userOne.email);
console.log(usertwo.email);
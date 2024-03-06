const name = "chandan"
const repoCount = 59

//console.log(name + repoCount + " value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName =  new String('chandan-mm')

// console.log(gameName[0]);
// console.log(gameName.__proto__);



console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 5)
console.log(newString);

const anotherString = gameName.slice(-5, 4)
console.log(anotherString);

const newStringOne = "  chandan  "
console.log(newStringOne.trim());

const url = "https://abhinav.com%30mehto"

console.log(url.replace('%30', '-'))

console.log(url.includes('chandann'));

console.log(gameName.split('-'));
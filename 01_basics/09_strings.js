const name = "chandan"
const repoCount = 2
console.log(`hello my name is ${name} and my repo count is ${repoCount} `);


const gameName = new String('chandan-cm')

console.log(gameName[4]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString );
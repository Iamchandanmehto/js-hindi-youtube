// let myName = "Chandan    "
// let myChannel = "Chai        "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.chandan = function () {
    console.log(`Chandan is present in all objects`);
}

Array.prototype.heyChandan = function () {
    console.log(`Chandan says Hello`);
}

// myHeros.chandan()
// myHeros.heyChandan()
//inheritance


const User = {
    name: "Coffee",
    gmail: "chai@gmail.com"
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true
    //  __Proto__: teachingSupport
}
teacher.__proto__ = User

//modern syntax
Object.setPrototypeOf(teachingSupport, teacher)




let anotherUsername = "chaiAurCode        "


String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}

anotherUsername.trueLength()
"chandan".trueLength()
"IceTea".trueLength()

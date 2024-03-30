// singleton
// Object.create

// object literals

const mysym = Symbol("key1")

const JsUser = {
    name:"chandan",
    [mysym]: "mykey1",
    age:18,
    location: "delhi",
    email:"chandan@google.com",
    isLoggednIn: false,
    lastLoginDays:["Monday", "saturday"]

}

// console.log(JsUser[mysym]);

// console.log(JsUser);

// Object.freeze(JsUser)
JsUser.age = 19
JsUser.email = "mehtochandan@chatgpt.com"

// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS user");
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
 console.log(JsUser.greetingTwo());



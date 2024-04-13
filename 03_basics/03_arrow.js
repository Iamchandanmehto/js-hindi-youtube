const user = {
    username: "chandan", 
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }


}

// user.welcomeMessage()
// user.username = "downey"
// user.welcomeMessage()

// console.log(this);

// function coffee(){
//     let username = "chandan"
//     console.log(this.username);
// }

// coffee()

// const chai = function () {
//     let username = "chandan"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "chandan"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) => ({username:"chandan"})


console.log(addTwo(3, 4))
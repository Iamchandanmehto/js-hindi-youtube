function sayMyName() {
    console.log("C");
    console.log("H");
    console.log("A");
    console.log("N");
    console.log("D");
    console.log("A");
    console.log("N");

    
}
    
// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);

// }

function addTwoNumbers(number1, number2) {
    
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)
// console.log("Result:", result);


function loginUserMessage(username = "sam") {
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username}  just logged in `
}

// console.log(loginUserMessage("chandan"))
// console.log(loginUserMessage());

function CalculateCartPrice( val1, val2, ...num1){
 return num1
}

// console.log(CalculateCartPrice(200, 400, 500, 3000));


const user = {
    username:"chandan",
    prices: 99
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user)

handleObject({
    username:"abhinav",
    price:999
})


const myNewArray = [ 200, 400, 600, 100]

function returnsecondValue(getArray) {
    return getArray[3]
}
// console.log(returnsecondValue(myNewArray));
console.log(returnsecondValue([200, 400, 600, 100]));
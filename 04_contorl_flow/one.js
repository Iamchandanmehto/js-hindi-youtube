// if
 
const isUserLoggedIn = true

// if (2 === "2"){
//     console.log("theNumbersAreEqual");
// }

// const balance = 1000;

// if (balance < 500){
//     console.log("less than 500");
// } else if (balance < 700 ) {
//     console.log("less then 700");

// } else if (balance < 1200) {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard ) {
    console.log("Now user can create payment");
    
}
if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in");
    
}
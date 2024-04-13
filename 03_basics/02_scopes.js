//var c = 300
let a = 300
if (true) {
let a = 10
const b = 20
var c = 30
// console.log("INNER:", a);
}

//  console.log(a);
// console.log(b);
// console.log(c);




function one(){
    const username = "chandan"

    function two(){
        const website = "github"
        console.log(username);
    }

    // console.log(website);
    
//   two()
    
}

// one()

if (true) {
    const username = "chandan"
    if (username === "chandan") {
        const website = " github"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// +++++++++++++++ interesting +++++++++++++++++

console.log(addone(4))
function addone(num){
    return num + 1
}




console.log(addTwo(5))
const addTwo = function(num){
    return num + 2
}


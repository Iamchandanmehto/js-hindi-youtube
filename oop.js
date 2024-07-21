const user = {
    username: "chandan",
    loginCount: 9,
    signedIn: true,
    getuserDetails: function () {
        // console.log("Got user details from database");
        // console.log(`username:${this.username}`);
        // console.log(this);


    }
}

// console.log(user.username);

// console.log(user.getuserDetails());



function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
console.log(`Welcome ${this.username}`);
}
    return this
}


const userOne =  new User("Chandan", 12, false)

const usertwo =  new User("Iam the number one  programmer", 1, true)
console.log(userOne);

;
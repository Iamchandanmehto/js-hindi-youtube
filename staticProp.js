class User{
    constructor(username){
        this.username = username

    }

    logMe(){
        console.log(`Usernam : ${this.username}`);

    }
     static createId(){
        return`123`
    }
}

const chandan = new User("chandan")

// console.log(chandan.createId())


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}


const iphone = new Teacher("Iphone", "android")
console.log(iphone.username1 ());


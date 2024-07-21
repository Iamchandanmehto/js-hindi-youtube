class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }
get email(){
    return this._email.toUpperCase()

}
set email(value){
    this._email = value
}


    get password() {
        return `${this._password}Chandan`
    }
    set password(value) {
        this._password = value
    }
}


const chandan = new User("chandan.gmail@com", "utrn")
console.log(chandan.email);
const User = {
    _email:'iamchandan@gmail.com',
    _password:"123123",
    get email(){
        return this._email.toUpperCase()

    },

    set email(value){
        this._email = value

    }
}

const tea = Object.create(User)
console.log(tea.email);


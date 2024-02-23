const accountId = 124234
let accountEmail = "chandan@.com"
var accountPassword = "1212"
accountCity = "delhi"
let accountState;

// accountId = 2 // not allowed
console.log(accountId);


accountEmail = "ahdjh@.com"
accountPassword = "23322344"
accountCity = "bengaluru"
console.table([ accountEmail, accountPassword, accountCity, accountId, accountState])

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/
const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = ""

console.log("Welcome to the password validator tool")

rl.question("Enter a password to be validated: ", function(string){
    input = string
    if (input.length >= 10){
        console.log("Good password")
        console.log("     /\n    /\n  \\/\n")
    }
    else{
        console.log("Bad password")
        console.log("\\  /\n \\/\n /\\\n/  \\")
    }
rl.close()
})


#! /usr/bin/env node
import inquirer from "inquirer";
let myBal = 10000
let myPin = 1234
let pin= await inquirer.prompt([{
    name: "a",
    type: "number",
    message: "Enter your pin (Hint:1234) \n"
}])
if(pin.a==myPin){
    console.log("Welcome to ATM \n")
    let select = await inquirer.prompt([{
        name: "a",
        type: "list",
        message: "Select your option \n",
        choices: ["Balance Inquiry", "Withdraw","Deposit", "Exit"]
    }])
    switch (select.a) {
        case "Balance Inquiry":
            console.log(`Your balance is ${myBal}`)
            break;
        case "Withdraw":
            let withdraw = await inquirer.prompt([{
                name: "a",
                type: "number",
                message: "Enter amount to withdraw \n"
            }])
            if(withdraw.a>myBal){
                console.log("Insufficient balance")
            }
            else{
                myBal=myBal-withdraw.a
                console.log(`Your Remaining balance is ${myBal}`)
            }
            break;
        case "Deposit":
            let deposit = await inquirer.prompt([{
                name: "a",
                type: "number",
                message: "Enter amount to deposit \n"
            }])
            console.log('Now your balacne is',deposit.a+myBal)
}
}
else {
    console.log('You  entered incorrect PIN')
}
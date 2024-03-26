#! /usr/bin/env node
import inquirer from "inquirer";
let myBal = 10000;
let myPin = 1234;
let pin = await inquirer.prompt([{
        name: "a",
        type: "number",
        message: "Enter your pin (Hint:1234) \n"
    }]);
if (pin.a == myPin) {
    console.log("Welcome to ATM \n");
    let select = await inquirer.prompt([{
            name: "a",
            type: "list",
            message: "Select your option \n",
            choices: ["Balance Inquiry", "Withdraw", "Fast_Cash", "Exit"]
        }]);
    switch (select.a) {
        case "Balance Inquiry":
            console.log(`Your balance is ${myBal}`);
            break;
        case "Withdraw":
            let withdraw = await inquirer.prompt([{
                    name: "a",
                    type: "number",
                    message: "Enter amount to withdraw \n"
                }]);
            if (withdraw.a > myBal) {
                console.log("Insufficient balance");
            }
            else {
                myBal = myBal - withdraw.a;
                console.log(`Your Remaining balance is ${myBal}`);
            }
            break;
        case "Fast_Cash":
            let fastCash = await inquirer.prompt([{
                    name: "a",
                    type: "list",
                    message: "Select amount to widraw \n",
                    choices: [1000, 2000, 5000, 10000]
                }]);
            if (fastCash.a > myBal) {
                console.log("Insufficient balance");
            }
            else if (fastCash.a === 1000) {
                myBal = myBal - fastCash.a;
                console.log(`Your Remaining balance is ${myBal}`);
            }
            else if (fastCash.a === 2000) {
                myBal = myBal - fastCash.a;
                console.log(`Your Remaining balance is ${myBal}`);
            }
            else if (fastCash.a === 5000) {
                myBal = myBal - fastCash.a;
                console.log(`Your Remaining balance is ${myBal}`);
            }
            else if (fastCash.a === 10000) {
                myBal = myBal - fastCash.a;
                console.log(`Your Remaining balance is ${myBal}`);
            }
    }
}
else {
    console.log('You  entered incorrect PIN');
}

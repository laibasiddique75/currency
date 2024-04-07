#! /usr/bin/env node
import inquirer from "inquirer"

const currency:any ={
    USD:1,
    EUR:0.91,   //base currency
GBP:0.76,
INR:74.57,
PKR:280,
};

let user_answer = await inquirer.prompt(
    [
        {
name:"from",
message:"Enter From Currency",
type:"list",
choices:["USD","EUR","GBP","INR","PKR"]
},

{
    name:"to",
    message:"Enter To Currency",
    type:"list",
    choices:["USD","EUR","GBP","INR","PKR"]
    },
    {
        name:"amount",
        message:"Enter Your Amount",
        type:"number"
        }
]
);


let userFromCurrency = user_answer.from
let userToCurrency = user_answer.to
let fromAmount = currency [userFromCurrency]   // exchange rate
let toAmount = currency [userToCurrency]      // exchange rate
let Amount = user_answer.amount
let baseAmount = Amount / fromAmount      // USD base currency
let convertedAmount = baseAmount * toAmount

console.log(convertedAmount);
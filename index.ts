#! /usr/bin/env node
import inquirer from "inquirer";

let yourPin : number = 2222 ;
let yourAmount : number = 20000 ;
console.log('Welcome to B&A ATM');
// console.log(yourPin);
 let atm = await inquirer.prompt([
    {
        name: 'pin',
        type: 'number',
        message: 'Enter your pin Code',

    }
 ]);

 if(yourPin === atm.pin){
   let operationsMedhod = await inquirer.prompt([
    {
        name: 'operations',
        type: 'list',
        message: 'Select your Operation method',
        choices: ['Withdraw' , 'Check Balance'],
    }
   ]);


   if(operationsMedhod.operations ==='Withdraw'){
    let withdrawMedhod = await inquirer.prompt([
        {
            name: 'amountWthdraw',
            type: 'list',
            message: 'Select your Withdraw method',
            choices: ['Enter Amount' , ' Fast Cash'],
        }
       ]);

     if(withdrawMedhod.amountWthdraw === 'Enter Amount'){
        let withdrawBalance = await inquirer.prompt([
            {
                name: 'balance',
                type: 'number',
                message: 'enter Balance',
            }
           ]);
           if(withdrawBalance.balance <= yourAmount){
            console.log('Collect your Amount ', `now your current balance is ${yourAmount- withdrawBalance.balance}` )
           } else{
            console.log('insufficiant balance');
           };
     }
     else{
        let fastCashMedhod = await inquirer.prompt([
            {
                name: 'fastCash',
                type: 'list',
                message: 'Select amount',
                choices: ['1000' , '3000', '5000'],
            }
           ])
               if(fastCashMedhod.fastCash <= yourAmount){
                console.log('Collect your Amount ', `now your current balance is ${yourAmount- fastCashMedhod.fastCash}` )
               } else{
                console.log('insufficiant balance');
               }
         };

   } else{
    console.log(`Your Current Amount ${yourAmount}`);
   };
 }
 else{
    console.log("Incorrect Pin")
 };
 
 

//  console.log(atm);
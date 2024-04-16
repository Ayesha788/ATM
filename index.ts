#! usr/bin/env node
import inquirer from "inquirer"; //node package manager
let myBalance = 50000; //dollars
let myPin = 82417;
let pinAnswer = await inquirer.prompt({
  message: "Enter your pin mumber",
  name: "pin",
  type: "number",
});
if (pinAnswer.pin === myPin) {
  console.log("Correct pin code!!!!");

  let operationAns = await inquirer.prompt({
    name: "operation",
    message: "Please select option",
    type: "list",
    choices: ["withdraw", "checkBalance", "fastCash"],
  });
  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter your amount",
        type: "number",
      },
    ]);
    if (amountAns.amount <= myBalance) {
      myBalance -= amountAns.amount;
      console.log(`Your remaining amount is ${myBalance}`);
    } else {
      console.log(
        `Your current Balance amount is less than the withdrawal amount you entered. Kindly enter your withdrawal amount within ${myBalance}`
      );
    }
  }
  if (operationAns.operation === "checkBalance") {
    console.log(`your current balance is ${myBalance}`);
  }
  if (operationAns.operation === "fastCash") {
    let fastCashAns = await inquirer.prompt([
      {
        name: "fastCash",
        message: "Choose the amount you want to withdraw",
        type: "list",
        choices: ["1000", "5000", "10000", "25000", "50000", "100000"],
      },
    ]);
    if (fastCashAns.fastCash <= myBalance) {
      myBalance -= fastCashAns.fastCash;
      console.log(`Your remaining amount is ${myBalance}`);
    } else {
      console.log(
        `Your current Balance amount is less than the withdrawal amount you choosed. Kindly choose your withdrawal amount within ${myBalance}`
      );
    }
  }
} else {
  console.log("incorrect pin code");
}

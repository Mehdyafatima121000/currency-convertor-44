import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgBlueBright.bold("\n Wellcome to 'Code with Mehdya' - Currency Convertor\n"));
//Define the list of Currencies and their exchange rates
let exchange_rate = {
    "USD": 1,
    "JYP": 0.9,
    "EUR": 113,
    "AUD": 1.3,
    "CAD": 1.65,
    "PKR": 280,
};
//Promt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency to convert from:",
        choices: ["USD", "JYP", "EUR", "AUD", "CAD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert INTO:",
        choices: ["USD", "JYP", "EUR", "AUD", "CAD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert"
    }
]);
//perform currency conversion by cusing formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
//formula of conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
//display the converted amount
console.log(`Converted Amount = ${converted_amount}`);

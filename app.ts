#! /usr/bin/env node

// Word count
// Import the "Inquirer" module which is a command line interfacefor
import inquirer from "inquirer"

//Declare a constant answer and assign it to the result of inquirer.prompt function

const answers: {
    sentence: string
} = await inquirer.prompt([
{
    name: "sentence",
    type: "input",
    message: "Enter your sentence to count the word"
}
])
const words = answers.sentence.trim().split(" ")
console.log(words)
console.log(`your sentence word count is ${words.length}`)
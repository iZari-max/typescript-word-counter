#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"

async function welcome() {
    console.log(chalk.greenBright(`\tWord Counter\t\n`))
}

async function wordCounter(){
    await welcome()
    var count = 1
    const answer = await inquirer
    .prompt([{
        type: "string",
        name: "para",
        message: chalk.blueBright(`Enter the text to Count\n`)
    }])
    const final : string[] = [...answer.para]
    for(let i=0; i<final.length; i++){
        if(final[i]==" "){
            count++
        }
    }
    console.log(chalk.greenBright(`\nTotal Words in the Text: ${count}`))

}
wordCounter()
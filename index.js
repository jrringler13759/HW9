const fs = require("fs");
const axios = require("axios");
const dotenv = require("dotenv");
const inquirer = require("inquirer");

const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
    inquirer.prompt([
        {   type: "input",
            name: "username",
            message: "What is your GitHub username?"
        },
        {   type: "input",
            name: "project",
            message: "What is your project's name?"
        },
        {   type: "input",
            name: "description",
            message: "Wat kind of license should your project have?",
            choices: ["A", "B", "C"]
        },
        {   type: "input",
            name: "npm",
            message: "What command should be run to install dependencies? "
        },
        {   type: "input",
            name: "test",
            message: "What command should be run to run tests? "
        },
        {   type: "input",
            name: "know",
            message: "What does the user need to know about using the repo? "
        },
        {   type: "input",
            name: "bring",
            message: "What does the user need to contribute to the repo? "
        },
        
        
    ]).then(function(data){
        const 
    })
];


function writeToFile(fileName, data) {
    //will I be using template literals to write the base of the document then fill in the variables where needed?
    writeFileAsync("", ?, ?)
}

function init() {

}

init();

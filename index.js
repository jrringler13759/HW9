const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
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
            message: "please write a short description of your project."
           
        },
        {   type: "input",
            name: "license",
            message: "What kind of license should your project have?",
            choices: ["GPL 3.0", "MIT", "AFL 3.0"]
        },
        {   type: "input",
            name: "install",
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
        }
    ]);
};




promptUser()
.then(function(answers){
    const readMe = generateMarkdown(answers);
    writeFileAsync("README.md", readMe);
})
//is this the right way to handle the error?
.catch(function(err) {
    console.log(err);
})





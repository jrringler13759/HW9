const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const api = require("./utils/api");
const util = require("util");

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
        {   type: "list",
            name: "license",
            message: "What kind of license should your project have?",
            choices: ["GPL_3.0", "MIT", "AFL_3.0", "none"]
        },
        {   type: "input",
            name: "install",
            default: "npm install",
            message: "What command should be run to install dependencies?"
        },
        {   type: "input",
            name: "test",
            default: "npm run test",
            message: "What command should be run to run tests?"
        },
        {   type: "input",
            name: "know",
            message: "What does the user need to know about using the repo?"
        },
        {   type: "input",
            name: "bring",
            message: "What does the user need to contribute to the repo?"
        },
        {   type: "input",
            name: "email",
            message: "What is your email address?"
        },
        {   type: "input",
            name: "name",
            message: "What is your first and last name? "
        }
    ]);
};

promptUser()
.then(function(answers){
    api.getUser(answers.username)
    .then(function(gitRes){
        answers.gitHubPic = gitRes.data.avatar_url;
        const readMe = generateMarkdown(answers);
        writeFileAsync("README.md", readMe);
    })
})
.catch(function(err) {
    console.log(err);
})





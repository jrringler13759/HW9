const fs = require("fs");
const axios = require("axios");
const dotenv = require("dotenv");
const inquirer = require("inquirer");

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


function generateReadMe (answers) {
`
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

##Title
${answers.project}

##Description
${answers.description}

##Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)

##Installation
To install necessary dependencies, run the following command:

*I need to quite the code here but not sure about the backticks

```${answers.install}```


##Usage
${answers.know}

##License
This project is licensed under the ${answers.license} license.

##Contributing
${answers.bring}

`
}


promptUser()
.then(function(answers){
    const readMe = generateReadMe(answers);
    return writeFileAsync("README.md", readMe);
})
//is this the right way to handle the error?
.catch(function(err) {
    console.log(err);
})





function generateMarkdown (answers) {
 return `
  [![License: MIT](https://img.shields.io/badge/License-${answers.license}-blueviolet.svg)](https://opensource.org/licenses/${answers.license})
  
  ## Title
  ${answers.project}
  
  ## Description
  ${answers.description}
  
  ## Table of Contents
      *[Installation](#installation)
      *[Usage](#usage)
      *[License](#license)
      *[Contributing](#contributing)
      *[Tests](#tests)
      *[Questions](#questions)
  
  ## Installation
  To install necessary dependencies, run the following command:
  
  \`\`\`${answers.install}\`\`\`
  
  
  ## Usage
  ${answers.know}
  
  ## License
  This project is licensed under the ${answers.license} license.
  
  ## Contributing
  ${answers.bring}
  
  ## Questions
  If you have any question please contact ${answers.name} at ${answers.email} 
  
  <img src="${answers.gitHubPic}.png" alt="drawing" width="50"/>
 
  `
}
  

module.exports = generateMarkdown;
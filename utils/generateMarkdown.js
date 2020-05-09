function generateMarkdown (answers) {
 return `
 
  [![License: MIT](https://img.shields.io/badge/License-${answers.license}-blueviolet.svg)](https://opensource.org/licenses/${answers.license})
  
  ## Title
  ${answers.project}
  

  
  ## Description
  ${answers.description}


  
  ## Table of Contents
  
  *[Installation](#installation)

  *[Tests](#tests)

  *[Usage](#usage)

  *[License](#license)

  *[Contributing](#contributing)

  *[Questions](#questions)
  
  

  ## Installation
  To install necessary dependencies, run the following command:
  
  \`\`\`${answers.install}\`\`\`

  

  ## Tests
  To run tests, run the following command:

  \`\`\`${answers.test}\`\`\`



  ## Usage
  ${answers.know}
  


  ## License
  This project is licensed under the ${answers.license} license.
  


  ## Contributing
  ${answers.bring}
  


  ## Questions
  <img src="${answers.gitHubPic}.png" alt="profile pic" width="50"/>
  If you have any question please contact ${answers.name} at <a href="mailto:${answers.email}">${answers.email}</a> 
`
}
  

module.exports = generateMarkdown;
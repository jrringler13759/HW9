function generateMarkdown (answers) {
 return `
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
  
  \`\`\`${answers.install}\`\`\`
  
  
  ##Usage
  ${answers.know}
  
  ##License
  This project is licensed under the ${answers.license} license.
  
  ##Contributing
  ${answers.bring}
  
  `
  }
  

  module.exports = generateMarkdown;
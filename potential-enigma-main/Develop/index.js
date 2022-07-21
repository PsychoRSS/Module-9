// const inquirer = require("inquirer");

// // TODO: Include packages needed for this application
// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({ Project, why, what, learn, installation, usage, screeshot1, screenshot2, collaborators, thirdparty, license, test, badges, github, email,}) =>
  `🏆##Procject title: ${Project}

  ## Description

  
  - ${why}
  - ${what}
  - ${learn}
  
  ## Table of Contents 
  
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Badges](#badges)
  - [Questions](#questions)
  
  ## Installation
  
  ${installation}
  
  ## Usage
  
    ${usage}
  
   ${screeshot1}
  
   
  
  ## Credits
  
  List of collaborators:
  ${collaborators}
  
  Third-party assets
  ${thirdparty}  
 
  
  ## License
  
  ${license}
  
  ---

  ## Badges
  Check out the badges hosted by [shields.io](https://shields.io/).

  ${badges}

  ## Test
  
  ${test}
  
  ## Questions
  
  ${github} 
  
  ${email} `;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'Project',
      message: 'What is your Project name?',
    },
    {
      type: 'input',
      name: 'why',
      message: 'Why did you build this project?',
    },
    {
      type: 'input',
      name: 'what',
      message: 'What problem does it solve?',
    },
    {
      type: 'input',
      name: 'learn',
      message: 'What did you learn?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use. Include screenshots as needed.',
    },
    {
        type: 'input',
        name: 'screeshot1',
        message: 'To add a screenshot, create an assets/screenshots folder. Then follow this syntax  ![alt text](assets/images/screenshot.png)'
    },
    {
        type: 'input',
        name: 'collaborators',
        message: 'List your collaborators, if any, with links to their GitHub profiles.'
    },
    {
        type: 'input',
        name: 'thirdparty',
        message: 'If you used any third-party assets that require attribution please list them here.'
    },
    {
        type: 'input',
        name: 'license',
        message: 'If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).'
    },
    {
      type: 'input',
      name: 'badges',
      message: 'If you have any badges assign them here.'
  },
  // {
  //     type: 'input',
  //     name: 'test',
  //     message: 'Instructions on how to test it'
  // },
  {
      type: 'input',
      name: 'github',
      message: 'Please Enter your Github username for any questions someone may have.'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your Email for any questions someone may have'
},
  ])
  .then((answers) => {
    const htmlPageContent = generateREADME(answers);

    fs.writeFile('README.md', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md')
    );
  });

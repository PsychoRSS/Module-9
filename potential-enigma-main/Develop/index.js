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

const generateHTML = ({ Project, why, what, learn, installation, usage, screeshot1, screenshot2, collaborators, thirdparty, license}) =>
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
  
  ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
  
  Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
  
  ## Features
  
  If your project has a lot of features, list them here.
  
  ## How to Contribute
  
  If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
  
  ## Tests
  
  Go the extra mile and write tests for your application. Then provide examples on how to run them here.`;

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
        message: ' If you used any third-party assets that require attribution please list them here.'
    },{
        type: 'input',
        name: 'license',
        message: 'If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).'
    },
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('README.md', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md')
    );
  });

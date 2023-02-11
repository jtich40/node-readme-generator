// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your application?'
    },

    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your application?'
    },
    
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm i'
    },
    
    {
        type: 'input',
        name: 'usage',
        message: 'What is necessary to know in order to use the application?'
    },
    
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to use in the application?',
        choices: ["MIT", "Apache 2.0", "Boost Software", "Eclipse Public", "None" ]
    },
    
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to test the application?',
        default: 'npm test'
    },
    
    {
        type: 'input',
        name: 'contributing',
        message: 'What should be known about contributing to the application?'
    },
    
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
    
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions => {
        fs.writeFileSync("README.md", generateMarkdown(questions))
    })
}


// Function call to initialize app
init();

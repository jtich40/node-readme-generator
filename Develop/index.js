// packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// array of questions for user input
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
        choices: ["MIT", "Apache", "GPL", "BSL", "None" ]
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


// function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(responses => {    
        fs.writeFileSync("README.md", generateMarkdown(responses))
        console.log("Your README has been created!")
    })
}

    
// Function call to initialize app
init();

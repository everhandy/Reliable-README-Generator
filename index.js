// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is your GitHub UserName?',
    name: 'username',
},
{
    type: 'input',
    message: 'What is your project title?',
    name: 'title',
},
{
    type: 'input',
    message: 'Write a Description for your project:',
    name: 'description',
},
{
    type: 'input',
    message: 'Write any Installation Instructions for your project:',
    name: 'install',
},
{
    type: 'input',
    message: 'Write any Usage Information for your project:',
    name: 'usage',
},
{
    type: 'list',
    message: "What license would you like to use?",
    name: 'license',
    choices: ['MIT', 'Apache License v2', 'GNU General Public License v3', 'None' ]
},
{
    type: 'input',
    message: 'Write any Contribution Guidelines for your project:',
    name: 'contribute',
},
{
    type: 'input',
    message: 'Write any Test Instructions for your project:',
    name: 'test',
},
{
    type: 'input',
    message: 'What is your email for further questions?:',
    name: 'email',
}
];

// // TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then ((response) =>{

    // // TODO: Create a function to write README file
    generateMarkdown.generateREADME(response);
       
});
}

// // Function call to initialize app
init();
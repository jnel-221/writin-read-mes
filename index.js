// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
} = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a brief description of your project.",
  },
  {
    type: "input",
    name: "install",
    message:
      "What steps are required to install your project/get it up and running?",
  },
  {
    type: "input",
    name: "usage",
    message:
      "Please enter any instructions and/or examples for use. Include screenshots as needed using the following format: ![alt text](assets/images/screenshot.png)",
  },
  {
    type: "input",
    name: "credits",
    message:
      "Please list your collaborators (if any) with links to their GitHub profiles formatted as: [collaborator name](github profile link).  If there were no collaborators, feel free to include resources used in the creation of your project",
  },
  {
    type: "input",
    name: "tests",
    message:
      "Do you have tests for your project?  If so, please add them.  If not, write 'No tests at this time'.",
  },
  {
    type: "list",
    name: "license",
    message: "Please select a license: ",
    choices: [
      "MIT",
      "GNU GPLv3",
      "The Unlicense",
      "Mozilla Public 2.0",
      "Apache 2.0",
      "none",
    ],
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email address.",
  },
  {
    type: "input",
    name: "gitHub",
    message: "Please enter your GitHub user name.",
  },
];

inquirer.prompt(questions).then((data) => {
  console.log(data);
  const fileName = `${data.title}.md`;
  const license = data.license;
  generateMarkdown(data); //move this to writeToFile when generateMarkdown.js is done
  renderLicenseBadge(license);
  renderLicenseLink(license);
  renderLicenseSection(license);
});
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

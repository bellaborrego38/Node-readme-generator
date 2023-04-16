const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./generateMarkdown");


const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of this project?",
    },
    {
        type: "input",
        name: "description",
        message: "Give a brief description of project:",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Select a license applicable to this project",
        choices: ["MIT", "Boost1.0", "BSD2", "APACHE2.0", "BSD3", "N/A"],
    },
    {
        type: "input",
        name: "require",
        message: "Any dependencies?",
    },
    {
        type: "input",
        name: "usage",
        message:
          "What languages and/or technologies are associated with this project?",
      },
      {
        type: "input",
        name: "creator",
        message: "Your GitHub username:",
      },

      {
        type: "input",
        name: "contributors",
        message: "Any contributors? List GitHub usernames:",
        default:""
      },
     
     
      
    
];


function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt()
}

function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("created README file");
        writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
    });
}

init();
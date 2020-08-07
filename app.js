const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

// first function to start, same as componentDidMount()?

const teamMembers = [];

generateHTML = () => {
    fs.writeFileSync(outputPath, render(teamMembers));
}

const createIntern = () => {
    inquirer.prompt(
        [
            {
                type: "input",
                message: "what is your intern's name?",
                name: "internName"
            },
            {
                type: "input",
                message: "what is your interns's id?",
                name: "internId"
            },
            {
                type: "input",
                message: "what is your intern's email?",
                name: "internEmail"
            },
            {
                type: "input",
                message: "what is your intern's school",
                name: "internSchool"
            },
        ]
    ).then( ( { internName, internId, internEmail, internSchool} )   => {

        // create manager object  

        // going to deconstruct this object by adding it into the object above 
        // const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNumber);
        const intern = new Intern(internName, internId, internEmail, internSchool);
        


        // push our manager to array we initialized before 
        teamMembers.push(intern);

        createTeam();
    }) 
}

const createEngineer = () => {
    inquirer.prompt(
        [
            {
                type: "input",
                message: "what is your engineer's name?",
                name: "engineerName"
            },
            {
                type: "input",
                message: "what is your engineer's id?",
                name: "engineerId"
            },
            {
                type: "input",
                message: "what is your engineer's email?",
                name: "engineerEmail"
            },
            {
                type: "input",
                message: "what is your engineer's GitHub",
                name: "engineerGithub"
            },
        ]
    ).then( ( { engineerName, engineerId, engineerEmail, engineerGithub} )   => {

        // create manager object  

        // going to deconstruct this object by adding it into the object above 
        // const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNumber);
        const engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);
        


        // push our manager to array we initialized before 
        teamMembers.push(engineer);

        createTeam();
    }) 
}

const createTeam = () => {
    inquirer.prompt(
        [
            {
                type: "list",
                choices: ["Engineer", "Intern", "Done"],
                message: "Which team member would you like to add?",
                name: "userChoice"
            }
        ]
    ).then( ( {userChoice} ) => {
        
        switch(userChoice) {
            case "Engineer": 
                createEngineer();
                break;
            case "Intern":
                createIntern();
                break;
            default:
                generateHTML();
        }
    })
}

const createManager = () => {
    inquirer.prompt(
        [
            {
                type: "input",
                message: "what is your manager's name?",
                name: "managerName"
            },
            {
                type: "input",
                message: "what is your manager's id?",
                name: "managerId"
            },
            {
                type: "input",
                message: "what is your manager's email?",
                name: "managerEmail"
            },
            {
                type: "input",
                message: "what is your manager's office number?",
                name: "managerOfficeNumber"
            },
        ]
    ).then( ( {managerName, managerId, managerEmail, managerOfficeNumber} )   => {

        // create manager object  

        // going to deconstruct this object by adding it into the object above 
        // const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNumber);
        const manager = new Manager(managerName, managerId, managerEmail, managerOfficeNumber);
        


        // push our manager to array we initialized before 
        teamMembers.push(manager);

        createTeam();

        
    }) 
}

const doInit = () => {
    createManager();

}

doInit();
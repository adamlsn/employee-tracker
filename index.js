const mysql = require("mysql2");
const inquirer = require("inquirer");
const cTable = require("console.table");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "employee_tracker"
});

connection.connect(err => {
    if(err) throw err;
    console.log("=== DUNDER MIFFLIN PAPER COMPANY ===");
    root();
})

function root() {
    lineBreak();
    inquirer.prompt({
        message: "Select a Function:",
        name: "root",
        type: "list",
        choices: [
            "View All Departments",
            "View All Roles",
            "View All Employess",
            "Add New Department",
            "Add New Role",
            "Add New Employee",
            "Update Employee Role",
            "EXIT"
        ]
    })
    .then(response => {
        switch(response.root){
            case "View All Departments":
                viewDept();
                break;
            case "View All Roles":
                viewRoles();
                break;
            case "View All Employess":
                viewEmp();
                break;
            case "Add New Department":
                addDept();
                break;
            case "Add New Role":
                addRole();
                break;
            case "Add New Employee":
                addEmp();
                break;
            case "Update Employee Role":
                updateEmp();
                break;
            case "EXIT":
                exit();
                break;
            default:
                exit();
        };
    });
};

function cont() {
    lineBreak();
    inquirer.prompt({
        message: "Would you like to return to the root menu?",
        name: "option",
        type: "list",
        choices: [
            "Yes, return to root menu",
            "No, close application"
        ]
    })
    .then(response => {
        switch(response.option){
            case "Yes, return to root menu":
                root();
                break;
            case "No, close application":
                exit();
                break;
            default:
                exit();
        }
    });
};

function lineBreak() {
    console.log("\n");
}

function viewDept() {
    cont();
}

function viewRoles() {
    cont();
}

function viewEmp() {
    cont();
}

function addDept() {
    cont();
}

function addRole() {
    cont();
}

function addEmp() {
    cont();
}

function updateEmp() {
    cont();
};

function exit() {
    console.log(`
    Thank You for Using Dunder Mifflin Employee Tracker
    Closing Application, Goodbye.
    `)
    connection.end();
};
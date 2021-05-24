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
            "View All Employees",
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
            case "View All Employees":
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
};

function viewDept() {
    const sql = `SELECT * FROM department`
    connection.query(sql, (err, res) => {
        if(err) throw err;
        console.table(res);
        cont();
    });
};

const viewRoles = () =>  {
    const sql = `SELECT role.id, role.title, role.salary, department.name
    FROM role
    LEFT JOIN department ON role.department_id = department.id`;
  
    connection.query(sql, (err, res) => {
      if(err) throw err;
      console.table(res)
      cont();
    });
  };

function viewEmp() {
    const sql = `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name As department, role.salary, CONCAT(emp.first_name, ' ' ,emp.last_name) AS manager 
    FROM employee
    LEFT JOIN role ON employee.role_id = role.id
    LEFT JOIN department ON role.department_id = department.id
    LEFT JOIN employee emp ON employee.manager_id = emp.id;`;
    connection.query(sql, (err, res) => {
        if(err) throw err;
        console.table(res);
        cont();
    })
};

function addDept() {
    cont();
};

function addRole() {
    cont();
};

function addEmp() {
    cont();
};

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
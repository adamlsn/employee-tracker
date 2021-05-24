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
    console.log("Dunder Mifflin Employee Tracker");
    init();
})

function init() {
    console.log("function started")
}
INSERT INTO department (name)
VALUES
    ("Sales"),
    ("Finance"),
    ("Administration"),
    ("Human Resources");

INSERT INTO role(title, salary, department_id)
VALUES
    ("CEO", 90000, 3),
    ("Regional Manager", 50000, 3),
    ("Receptionist", 30000, 3),
    ("Sales Person", 36000, 1),
    ("Accountant", 45000, 2),
    ("Human Relations", 45000, 4),
    ("Customer Service", 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ("Jan", "Levinsen", 1, NULL),
    ("Michael", "Scott", 2, 1),
    ("Pam", "Beesley", 3, 2),
    ("Jim", "Halpert", 4, 2),
    ("Dwight", "Schrute", 4, 2),
    ("Angela", "Martin", 5, 2),
    ("Kevin", "Malone", 5, 2),
    ("Toby", "Flenderson", 6, NULL),
    ("Kelly", "Kapoor", 7, 8);
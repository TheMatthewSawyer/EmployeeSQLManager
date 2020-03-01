-- ===========
-- DEPARTMENTS
-- ===========

INSERT INTO department (department_name, department_id) VALUES ('Command', 300);
INSERT INTO department (department_name, department_id) VALUES ('Management', 100);
INSERT INTO department (department_name, department_id) VALUES ('Accounting', 2200);

-- ===========
--    JOBS
-- ===========

INSERT INTO jobs (title, salary, department_id) VALUES ('Mission Commander', 100, 300);
INSERT INTO jobs (title, salary, department_id) VALUES ('Second Commander', 80, 300);
INSERT INTO jobs (title, salary, department_id) VALUES ('Artificial Intelligence', 0, 100);
INSERT INTO jobs (title, salary, department_id) VALUES ('Accountant', 60, 2200);

-- ===========
--  EMPLOYEES
-- ===========

INSERT INTO  employee (first_name, last_name, job_id) VALUES ('Dave', 'Bowman', 1);
INSERT INTO  employee (first_name, last_name, job_id) VALUES ('Francis ', 'Poole', 2);
INSERT INTO  employee (first_name, last_name, job_id) VALUES ('HAL ', '9000', 3);
INSERT INTO  employee (first_name, last_name, job_id, manager_id) VALUES ('Wheatly', 'Core', 3, 3);
INSERT INTO  employee (first_name, last_name, job_id, manager_id) VALUES ('Billy', 'Bob', 4, 2);

-- ===========
-- SHOW TABLE
-- ===========

SELECT * FROM department;
SELECT * FROM jobs;
SELECT * FROM employee;
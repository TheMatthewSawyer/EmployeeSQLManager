DROP DATABASE IF EXISTS employee_tracker;
CREATE database employee_tracker;

USE employee_tracker;

CREATE TABLE department(
	department_name varchar(30) NOT NULL,
	department_id int NOT NULL,
    KEY (department_id)
);

CREATE TABLE jobs (
  id int NOT NULL AUTO_INCREMENT,
  title varchar(30),
  salary decimal,
  department_id int NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (department_id) REFERENCES department(department_id)
);

CREATE TABLE employee (
  id int NOT NULL AUTO_INCREMENT,
  first_name varchar(30) NOT NULL,
  last_name varchar(30) NOT NULL,
  job_id int NOT NULL,
  manager_id int,
  FOREIGN KEY (job_id)
  REFERENCES jobs(id),
  FOREIGN KEY (manager_id)
  REFERENCES jobs(id),
  PRIMARY KEY(id)
);
const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');
const chalk = require('chalk');

function logo (color) {

    return chalk.bgRgb(55, 0, 69)[color](
    `
▇ -▇ -▇ -▇ -▇ -▇ -▇ -▇ -▇ -▇ -▇ -▇ -▇ -▇ -▇ -▇ -▇ -▇ -▇ -▇ -▇ -▇ 
▇                                                              ▇ 
▇  db   db  .d8b.  db      .d888b.  .d88b.   .d88b.   .d88b.   ▇ 
▇  88   88 d8' '8b 88      88' '8D .8P  88. .8P  88. .8P  88.  ▇ 
▇  88ooo88 88ooo88 88      'V8o88' 88  d'88 88  d'88 88  d'88  ▇ 
▇  88'''88 88'''88 88         d8'  '8 d' 8' '8 d' 8' '8 d' 8'  ▇ 
▇  YP   YP YP   YP Y888P    d8'     'Y88P'   'Y88P'   'Y88P'   ▇ 
▇                                                              ▇ 
▇            -=[ Hireling Alteration Logger 9000 ]=-           ▇ 
▇ -▇ -▇ -▇ -▇ -▇ -▇ -▇ -▇ -▇ -▇ -▇ -▇ -▇ -▇ -▇ -▇ -▇ -▇ -▇ -▇ -▇ 
`);
}

const logoFancy = [
`                       ,,                       ,,     ,,                       `,
`      '7MMF'  '7MMF'   db                     '7MM     db                       `,
`        MM      MM                              MM                              `,
`        MM      MM   '7MM   '7Mb,od8  .gP"Ya    MM   '7MM   '7MMpMMMb.   .P"Ybmmm `,
`        MMmmmmmmMM     MM     MM' "' ,M'   Yb   MM     MM     MM    MM  :MI  I8   `,
`        MM      MM     MM     MM     8M""""""   MM     MM     MM    MM   WmmmP"   `,
`        MM      MM     MM     MM     YM.    ,   MM     MM     MM    MM  8M        `,
`      .JMML.  .JMML. .JMML. .JMML.    'Mbmmd' .JMML. .JMML. .JMML  JMML. YMMMMMb  `,
`                                                                         6'     dP `,
`                                                                          Ybmmmd'   `,
`                ,,                                             ,,                     `,
`      db      "7MM    mm                               mm      db                     `,
`     ;MM:       MM    MM                               MM                            `,
`    ,V^MM.      MM  mmMMmm  .gP"Ya  "7Mb,od8  ,6"Yb. mmMMmm  '7MM   ,pW"Wq. '7MMpMMMb. `, 
`   ,M  "MM      MM    MM   ,M'   Yb   MM' "' 8)   MM   MM      MM  6W'   'Wb  MM    MM  `,
`   AbmmmqMA     MM    MM   8M""""""   MM      ,pm9MM   MM      MM  8M     M8  MM    MM  `,
`  A'     VML    MM    MM   YM.    ,   MM     8M   MM   MM      MM  YA.   ,A9  MM    MM  `,
`.AMA.   .AMMA. .JMML. "Mbmo "Mbmmd' .JMML.   'Moo9^Yo. 'Mbmo .JMML. 'Ybmd9' .JMML  JMML.`,
``,``,
`              '7MMF'                                                    `,
`                MM                                                      `,
`                MM         ,pW"Wq.   .P"Ybmmm  .P"Ybmmm .gP"Ya '7Mb,od8 `,
`                MM        6W'   'Wb :MI  I8   :MI  I8  ,M'   Yb  MM' "' `,
`                MM      , 8M     M8  WmmmP"    WmmmP"  8M""""""  MM     `,
`                MM     ,M YA.   ,A9 8M        8M       YM.    ,  MM     `,
`              .JMMmmmmMMM  'Ybmd9'   YMMMMMb   YMMMMMb  'Mbmmd'.JMML.   `,
`                                     6'     dP 6'     dP                 `,
`                                      Ybmmmd'   Ybmmmd'                   `,
``,``,
`                      .d*"*bg.   ,pP""Yq.   ,pP""Yq.   ,pP""Yq. `,
`                      6MP    Mb 6W'    'Wb 6W'    'Wb 6W'    'Wb `,
`                      YMb    MM 8M      M8 8M      M8 8M      M8 `,
`                       'MbmmdM9 8M      M8 8M      M8 8M      M8 `,
`                            .M' 8M      M8 8M      M8 8M      M8 `,
`                          .d9   YA.    ,A9 YA.    ,A9 YA.    ,A9 `,
`                        m"'      'Ybmmd9'   'Ybmmd9'   'Ybmmd9' `,``,``,``,``,``,``,``,``,``,``,``,``,``,``,``,``,``,``,``,``,``
];

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "admin",
    database: "employee_tracker"
});

const colors = [ chalk.red, chalk.yellow, chalk.green, chalk.cyan, chalk.blue, chalk.magenta, chalk.white ];

connection.connect();
console.log(connection);
require('events').EventEmitter.defaultMaxListeners = 0;
start();

function start() {
    var i = 0;
    var y = 0;
    var interval = setInterval( () => {
        console.log(colors[y](logoFancy[i]));
        i++;
        y++;
        if(y === 7){ y = 0; }
        if (i >= logoFancy.length) {
            clearInterval(interval);
            mainMenu();
            return;
        }
      }, 60);
}

function mainMenu() {
    process.stdout.write('\n\n\n\n\n\n\n\n\n\n');
    console.log(logo('blue'));
    inquirer
        .prompt([
            {
                name : "menuChoice",
                type : 'list',
                message : "Would you like to...",
                choices : [
                    new inquirer.Separator(chalk.bold.bgYellow.black('   <O> VIEW      ')),
                        "<O> a department?",
                        "<O> a job?",
                        "<O> an employee?",
                    new inquirer.Separator(chalk.bold.bgGreen('    +  ADD       ')),
                        "+ a department?",
                        "+ a job?",
                        "+ an employee?",
                    new inquirer.Separator(chalk.bold.bgRed('    -  EDIT      ')),
                        "- a department?",
                        "- a job?",
                        "- an employee?",
                    new inquirer.Separator(chalk.bold.black.bgWhite('    ?  EXIT      ')),
                        "[[X]-EXIT- -]]"
                ]
            }
        ])
        .then( answer => {
            switch (answer.menuChoice) {
                
                case "+ a department?":
                    addDepartment();
                    break;
                case "+ a job?":
                    addJob();
                    break;
                case "+ an employee?":
                    addEmployee();
                    break;

                case "<O> a department?":
                    view("department");
                    break;
                case "<O> a job?":
                    view("jobs");
                    break;
                case "<O> an employee?":
                    view("employee");
                    break;

                case "- a department?":
                    edit('department');
                    break;
                case "- a job?":
                    console.log('Not yet made');
                    enterToContinue();
                    break;

                case "- an employee?":
                    console.log('Not yet made');
                    enterToContinue();
                    break;
                
                case "[[X]-EXIT- -]]":
                    process.exit(1);
            }
        });
}

function view(choice) {
    process.stdout.write('\n\n\n\n\n\n\n\n\n\n');
    console.log(logo('yellow'));
    let queryString = "SELECT * FROM ";
    connection.query(queryString + choice, (err, res) => {
        if (err) throw err;
        console.log(cTable.getTable(res));
        enterToContinue();
    });
}

function addDepartment() {
    process.stdout.write('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n');
    console.log(logo('green'));
    inquirer
        .prompt([
            {
                name : "departmentName",
                type : 'input',
                message : "Please enter a name for your new department:",
            },
            {
                name : "departmentID",
                type : 'input',
                message : "Please enter an ID for your new department:",
            }
        ]).then(answer => {
            let queryString = `INSERT INTO department (department_name, department_id) VALUES ('${answer.departmentName}', ${answer.departmentID});`;
            connection.query(queryString, (err, res) => {
                if (err) throw err;
                console.log(`Added department ${answer.departmentID}: ${answer.departmentName}`);
                enterToContinue();
            });
        });
    
}

function addJob() {
    process.stdout.write('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n');
    console.log(logo('green'));
    inquirer
        .prompt([
            {
                name : "jobName",
                type : 'input',
                message : "Please enter a title for your new job:",
            },
            {
                name : "jobSalary",
                type : 'input',
                message : "Please enter the salary for that job:",
            },
            {
                name : "jobID",
                type : 'input',
                message : "Please enter the job's department ID:",
            },
        ]).then(answer => {
            let queryString = `INSERT INTO jobs (title, salary, department_id) VALUES ('${answer.jobName}', ${answer.jobSalary}, ${answer.jobID});`;
            connection.query(queryString, (err, res) => {
                if (err) {console.log(`${chalk.red('ERROR: ')}Ensure the Job's department ID exits and is accurate then try again. You entered ${answer.jobID}`); enterToContinue(); return; }
                console.log(`Added job ${answer.jobID}: ${answer.jobName} with a salary of ${answer.jobSalary}`);
                enterToContinue();
            });
        });
    
}

function addEmployee() {
    process.stdout.write('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n');
    console.log(logo('green'));
    inquirer
        .prompt([
            {
                name : "firstName",
                type : 'input',
                message : "Please enter new employee's first name:",
            },
            {
                name : "lastName",
                type : 'input',
                message : "Please enter new employee's last name:",
            },
            {
                name : "jobID",
                type : 'input',
                message : "Please enter new employee's job ID:",
            },
            {
                name : "managerID",
                type : 'input',
                message : "If employee has a manager, enter manager ID here. Else, enter 'null':",
            }
        ]).then(answer => {
            var queryString = `INSERT INTO employee (first_name, last_name, job_id, manager_id) VALUES ('${answer.firstName}', '${answer.lastName}', ${answer.jobID}, ${answer.managerID});`;
            connection.query(queryString, (err, res) => {
                if (err) {console.log(`${chalk.red('ERROR: ')}Ensure the employee's job ID / manager ID exists and is accurate then try again. You entered ${answer.jobID} ${answer.managerID}`); enterToContinue(); return; }
                console.log(`Added employee ${answer.lastName}, ${answer.firstName} with the job ${answer.jobID}`);
                enterToContinue();
            });
        });
}

function enterToContinue() {
    inquirer
        .prompt([
            {
                name : "pressEnter",
                type : 'list',
                message : "Press Enter to Continue...",
                choices : ['']
            }
        ]).then(answer => {
                mainMenu();
        });
}

function edit(choice) {
    var choiceName = choice + '_name';
    var choiceID = choice + '_id';
    let queryString = `SELECT ${choiceName} FROM ${choice};`;
    var usrDepartChoices = [];
    var usrItemChoices = [];
    connection.query(queryString, (err, res) => {
        if (err) throw err;
        res.forEach(element => {
            usrDepartChoices.push(element[`${choiceName}`]);
        });
        let questionProper = [{
            name : "chosenAns",
            type : 'list',
            message : `Please select the ${choice} you wish to edit`,
            choices : usrDepartChoices
        }];
        inquirer.prompt(questionProper).then(answer => {
            
            let queryString = `SELECT * FROM ${choice} WHERE ${choiceName} = '${answer.chosenAns}';`;
            connection.query(queryString, (err, res) => { 
                if (err) throw err;
                res.forEach(element => {
                    usrItemChoices.push(element[`${choiceName}`]);
                    usrItemChoices.push(element[`${choiceID}`]);
                });

                let questionProper = [{
                    name : "chosenEdit",
                    type : 'list',
                    message : `Please select value you'd like to change`,
                    choices : usrItemChoices
                }];

                inquirer.prompt(questionProper).then(answer => {
                    console.log(answer);
                    enterToContinue();
                });

            });
        });
    });
}
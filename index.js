const sql = require('mysql');
const inquirer = require('inquirer');
const table = require('console.table');
const chalk = require('chalk');

function logo (color) {

    return chalk[color](
    `
    .-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=.
    |                                                                        |
    !  ██╗  ██╗  █████╗  ██╗          █████╗   ██████╗   ██████╗   ██████╗   !
    :  ██║  ██║ ██╔══██╗ ██║         ██╔══██╗ ██╔═████╗ ██╔═████╗ ██╔═████╗  :
    .  ███████║ ███████║ ██║         ╚██████║ ██║██╔██║ ██║██╔██║ ██║██╔██║  .
    .  ██╔══██║ ██╔══██║ ██║          ╚═══██║ ████╔╝██║ ████╔╝██║ ████╔╝██║  .
    :  ██║  ██║ ██║  ██║ ███████╗     █████╔╝ ╚██████╔╝ ╚██████╔╝ ╚██████╔╝  :
    !  ╚═╝  ╚═╝ ╚═╝  ╚═╝ ╚══════╝     ╚════╝   ╚═════╝   ╚═════╝   ╚═════╝   !
    |                 -=[ Hireling Alteration Logger 9000 ]=-                |
    '-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-='

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
`                      .d*"*bg.  ,pP""Yq.   ,pP""Yq.   ,pP""Yq.  `,
`                      6MP    Mb 6W'    'Wb 6W'    'Wb 6W'    'Wb `,
`                      YMb    MM 8M      M8 8M      M8 8M      M8 `,
`                       'MbmmdM9 YA.    ,A9 YA.    ,A9 YA.    ,A9 `,
`                            .M'  'Ybmmd9'   'Ybmmd9'   'Ybmmd9'  `,
`                          .d9                                    `,
`                        m"'                                      `,``,``,``,``,``,``,``,``,``,``,``,``,``,``,``,``,``,``,``,``,``
];

var i = 0;

var interval = setInterval( () => {

    console.log(chalk.green(logoFancy[i]));
    i++;
    if (i >= logoFancy.length) {
        console.log(logo('blue'));
        clearInterval(interval);
        start();
    }
  }, 50);
  

// var ui = new inquirer.ui.BottomBar({ bottomBar : chalk.yellow(logo)});

function start() {
    inquirer
    .prompt([{
        type : 'list',
        name : "answervuuuuued",
        message : "Would you like to...",
        choices : [
            new inquirer.Separator(chalk.bold.bgGreen('    +  ADD       ')),
                '+ a department?',
                '+ a job?',
                '+ an employee?',
            new inquirer.Separator(chalk.bold.bgYellow.black('   <O> VIEW      ')),
                '<O> a department?',
                '<O> a job?',
                '<O> an employee?',
            new inquirer.Separator(chalk.bold.bgRed('    -  EDIT      ')),
                '- a department?',
                '- a job?',
                '- an employee?',
        ]
    }])
    .then(answers => {
        console.log(answers);
    })
    .catch(error => {
        console.log(error);
    });
}
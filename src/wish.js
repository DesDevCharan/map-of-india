/**
 * 
 * @author Charanbabu Karnam <charanbabukarnam@gmail.com>
 */
const figlet = require("figlet"),
    chalk = require("chalk"),
    log = console.log;

figlet('Happy Republic Day', function (err, message) {
    if (err) {
        log('OOPS! Something went wrong :(', err);
    } else {
        log(chalk.red.bold('\n\nWishing\n\n') + 
            chalk.white.bold('You\n\n') +
            chalk.green.bold('A Very\n\n')
        );

        log(message);

        log(chalk.blue.bold('\n\nAuthor: ') +
            chalk.yellow.bold('Charanbabu Karnam')
        );
        
        log(chalk.cyan.bold('\nFollow on GitHub at ') + 
            chalk.magenta.bold('https://github.com/devdevcharan') + 
            '\n\n'
        );
    }
});
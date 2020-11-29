//Create our own server
const http = require('http');
// const chalk = require('chalk');
const yargs = require('yargs');
const guest = require('./guest.js');


// console.log(guest('kleva'));
// console.log(chalk.gray.bgGreen('Kleva_Saki'));

// console.log(process.argv[2]);

yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },

        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }

    },
    handler: function (argv) {
        console.log(`New note: ${argv.title}, ${argv.body}`);
    }
});

yargs.parse();
// console.log(yargs.argv);

const port = 3000;
const address = '127.0.0.1';

// const server = http.createServer((req,res) => {
//     res.writeHead(200, {'Content-Type' : 'text/plain'});
//     res.end('Message from Kleva Saki');
// }).listen(port, address, () => {
//     console.log(`Server started on port ${port}: ${address}`);
// });


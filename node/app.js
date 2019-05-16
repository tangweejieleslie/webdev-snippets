// const EventEmitter = require('events');
// const Logger = require('./logger')
// const logger = new Logger();

// logger.log('THIS IS A TEST MESSAGE');


const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/') {
        res.write('Hi world');
        res.end();
    }

    if(req.url === '/api/test') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

server.listen(3000);

console.log('Listening on port 3000');
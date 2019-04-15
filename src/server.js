const http = require('http');
const router = require('./router');
const handler = require('./handler');

const port = process.env.PORT || 4000;

const server = http.createServer(router);

server.listen(port, console.log('Server now up and running on port 4000.'));

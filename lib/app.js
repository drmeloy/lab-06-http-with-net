const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());
    if(request.path === '/' && request.method === 'GET'){
      return socket.end(createResponse({ body: 'hi', status: '200', contentType: 'text/plain' }));
    }
    if(request.path === '/echo' && request.method === 'POST'){
      return socket.end(createResponse({ body: request.body, status: '200', contentType: 'text/plain' }));
    }
    if(request.path === 'red'){

    }
    if(request.path === 'green'){

    }
    if(request.path === 'blue'){

    }

    socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
  });
});

module.exports = app;

'use strict';

const koa = require('koa');
const app = koa();
const server = require('http').createServer(app.callback());
const io = require('socket.io')(server);

let users = 0;

io.on('connection', function (socket){
  console.log('hi')
});

app.use(function *() {
  this.body = `There are ${users} current users`;
});
 
server.listen(3000);

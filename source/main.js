'use strict';

const koa = require('koa');
const app = koa();
const serve = require('koa-static');
const server = require('http').createServer(app.callback());
const io = require('socket.io')(server);


let users = 0;

app.use(serve(__dirname + '/client'))

io.on('connection', function (socket){
  
  users++; 
  console.log(`There are ${users} current users`);
  io.emit('connect-message', users)
  socket.on('disconnect', function(){
    users--;
    console.log(`There are ${users} current users`);
  });
  
});
 
server.listen(3000);

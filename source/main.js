'use strict';

const koa = require('koa');
const app = koa();
const serve = require('koa-static');
const server = require('http').createServer(app.callback());
const io = require('socket.io')(server);

let users = 0;

io.on('connection', function (socket){
  
  users++;
  
  socket.on('disconnect', function(){
    users--;
  });
  
  console.log(`There are ${users} current users`);
});

app.use(serve(__dirname + '/client', {defer: true}));

app.use(function *() {
});
 
server.listen(3000);

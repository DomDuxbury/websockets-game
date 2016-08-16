'use strict';

const koa = require('koa');
const app = koa();
const serve = require('koa-static');
const views = require('koa-views');
app.use(serve(__dirname + '/client'))
const server = require('http').createServer(app.callback());
const io = require('socket.io')(server);


let users = 0;


io.on('connection', function (socket){
  
  users++; 
  console.log(`There are ${users} current users`);
  
  socket.on('disconnect', function(){
    users--;
    console.log(`There are ${users} current users`);
  });
  
});
 
server.listen(3000);

'use strict';

const koa = require('koa');
const app = koa();
const serve = require('koa-static');
const views = require('koa-views');
const server = require('http').createServer(app.callback());
const io = require('socket.io')(server);


let users = 0;
app.use(views(__dirname + '/client/views', {
  map: {
    html: 'handlebars'
  }
}));

io.on('connection', function (socket){
  
  users++; 
  console.log(`There are ${users} current users`);
  
  socket.on('disconnect', function(){
    users--;
    console.log(`There are ${users} current users`);
  });
  
});

app.use(function *() {
  yield this.render('user', {
    user: 'John'
  });
});
 
server.listen(3000);

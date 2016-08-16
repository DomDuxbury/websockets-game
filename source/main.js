'use strict';

const koa = require('koa');
const app = koa();

let users = 0;

app.use(function *(next) {
  users++
  yield next
})

app.use(function *() {
  this.body = `There are ${users} current users`;
});
 
app.listen(3000);

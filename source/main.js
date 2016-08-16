'use strict';

const koa = require('koa');
const app = koa();

app.use(function *() {
  let users = 0;
  this.body = `There are ${users} current users`;
});
 
app.listen(3000);

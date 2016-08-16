var socket = io();
socket.on('connect-message', function (users) {
  console.log(users);
})

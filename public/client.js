var socket = io();

var connectionCount = document.getElementById('connection-count');

socket.on('usersConnected', function(count) {
  connectionCount.innerText = 'Connected Users: ' + count;
});

var statusMessage = document.getElementById('status-message');

socket.on('statusMessage', function(message) {
  statusMessage.innerText = message;
});

var buttons = document.querySelectorAll('#choices button');

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      socket.send('voteCast', this.innerText);
    });
}

socket.on('voteCount', function(message) {
  console.log(message['A']);
  document.getElementById('A-count').innerText = 'A: ' + message['A'];
  document.getElementById('B-count').innerText = 'B: ' + message['B'];
  document.getElementById('C-count').innerText = 'C: ' + message['C'];
  document.getElementById('D-count').innerText = 'D: ' + message['D'];
});

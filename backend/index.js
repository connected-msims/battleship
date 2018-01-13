const Lobby = require('./engine/lobby');
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const lobby = new Lobby();

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
  socket.on('create game', () => {
    const gameId = lobby.createGame();
    console.log('created a game with the id ' + gameId);
    socket.emit('create', { gameId });
  });

  socket.on('delete game', (gameId) => {
    lobby.deleteGame(gameId);
    socket.emit('delete', { gameId});
  })
});

http.listen(3000, function () {
  console.log('listening on *:3000');
});

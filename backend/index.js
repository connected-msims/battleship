const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const Lobby = require('./engine/lobby');
const User = require('./engine/User');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const lobby = new Lobby();

io.on('connection', (socket) => {
  console.log('a user connected');
  const user = new User();
  console.log(`created User with ID: ${user.userId}`);

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
  
  socket.on('create game', () => {
    const gameId = lobby.createGame();
    console.log('created a game with the id ' + gameId);
    socket.emit('create', { gameId });
  });

  socket.on('join game', (gameId, userId) => {
    const joinedGame = lobby.addPlayerToGame(gameId, userId);
    socket.emit('join game', { gameId, userId})
    if (joinedGame && joinedGame.lobbyType === 0) {
      socket.emit('started game', { gameId });
    }
  });

  socket.on('delete game', (gameId) => {
    lobby.deleteGame(gameId);
    socket.emit('delete', { gameId});
  })
});

http.listen(3000, function () {
  console.log('listening on *:3000');
});



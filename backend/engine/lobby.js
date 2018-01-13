const helper = require('../helper/generalHelper');

const lobbyTypes = [0, 1, 2, 'Started', 'Pending', 'None'];

class Lobby {

  constructor() {
    this._gameArray = [];
  }

  createGame() {
    const game = {
      id: helper.generateHexString(),
      lobbyType: 1,
      players: [],
    };
    this._gameArray.push(game);
    return game.id;
  }

  addPlayerToGame(gameId, userId) {
    try {
      const selectedGame = this._gameArray[this.findGameIndexById(gameId)];
      selectedGame.players.push(userId);
      if (selectedGame.players.length === 2) {
        selectedGame.lobbyType = 0;
        this.startTheGame(selectedGame);
      }
      return selectedGame;
    } catch(err) {
      console.error(`Invalid gameId  of \"${gameId}\": Couldn\'t find game`);
    }
  }

  startTheGame(game) {
    const newGame = new Game(...game);
  }

  deleteGame(gameId) {
    this._gameArray.splice(this.findGameIndexById(gameId), 1);
  }

  findGameIndexById(gameId) {
    return this._gameArray.findIndex(gameObject => {
      gameObject.id = gameId;
    });
  }
}

module.exports = Lobby;
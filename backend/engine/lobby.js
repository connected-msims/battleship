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
      this._gameArray[this.findGameIndexById(gameId)].players.push(userId);
    } catch(err) {
      console.error(`Invalid gameId  of \"${gameId}\": Couldn\'t find game`);
    }
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
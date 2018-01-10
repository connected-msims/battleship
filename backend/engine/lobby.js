const helper = require('../helper/generalHelper');

const lobbyTypes = [0, 1, 2,'Started', 'Pending', 'None'];

class Lobby {

    constructor() {
        this._gameArray = [];
    }

    createGame() {
        const game = {
            id: helper.generateHexString(),
            lobbyType: 1,
        };
        this._gameArray.push(game);
        return game.id;
    }

    deleteGame(gameId) {
        const gameIndex = this._gameArray.findIndex(gameObject => {
           gameObject.id = gameId;
        });
        this._gameArray.splice(gameIndex, 1);
    }
}

module.exports =  Lobby;
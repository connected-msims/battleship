


/*
    0 - Represents empty Square
    1 - Represents unhit ship
    2 - Represents hit empty square
    3 - Represents hit ship
 */

const emptySquare = 0;
const unhitShip = 1;
const hitEmptySquare = 2;
const hitShip = 3;

class GameState {

    constructor(length = 10, width = 10) {
        this._length = length;
        this._width = width;
        this._board = [];
        for (let i = 0; i < length * width; ++i) {
            this._board.push(emptySquare);
        }

        this._gamePieces = [2, 3, 3, 4, 5];
        this._remaining = this._gamePieces.length;
    }

    validateShip(position, size, horizontal){
        let valid = true;
        for(let i = 0; i<size; ++i){
            if(horizontal && position % this._width + size > this._width){
                valid = false;
            }else if(!horizontal && position % this._length + size > this._length){
                valid = false;
            }
        }

        for(let i = 0; i<size; ++i){
            if(this._board[position + i  * (horizontal ? 1 : this._width)] != emptySquare) valid = false
        }


        return valid;
    }

    placeShip(position, size, horizontal){
        if(this.validateShip(position, size, horizontal)){
            for(let i = 0; i<size; ++i){
                this._board[position + i  * (horizontal ? 1 : this._width)] = unhitShip;
            }
        }
        return false;
    }


    // change later to row/column need be
    attack(position){
        switch(this._board[position]){
            case emptySquare:
                return hitEmptySquare;
            case unhitShip:
                return hitShip;
            default:
                return false;
        }
    }

    checkWin(){
        return !this._remaining;
    }


}
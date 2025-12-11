const gameboard = (function() {
  const board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ];

  const reset = function() {
    for (let x = 0; x <= 2; x++) {
      for (let y = 0; y <= 2; y++) {
        board[x][y] = " ";
      }
    }
  };
  const mark = function(x, y, symbol) {
    if (symbol !== "X" && symbol !== "O") {
      throw Error(`Attempted to incorrectly mark [${x}][${y}] with ${symbol}`);
    } else if (board[x][y] === " ") {
      board[x][y] = symbol;
    } else throw Error(`Attempted to mark non-empty space [${x}][${y}]`);
  };
  const get = function() {
    const boardCopy = structuredClone(board);
    return boardCopy;
  }
  const checkFull = function() {
    let full = true;
    for (let x = 0; x <= 2; x++) {
      for (let y = 0; y <= 2; y++) {
        if (board[x][y] === " ") full = false;
      }
    }
    return full;
  };
  const checkOver = function() {
    //TODO
  }
  const log = function () {
    console.log(`[${board[0][0]}][${board[0][1]}][${board[0][2]}]\n[${board[1][0]}][${board[1][1]}][${board[1][2]}]\n[${board[2][0]}][${board[2][1]}][${board[2][2]}]`);
  };

  return {reset, mark, get, checkFull, log}
})();

const gameController = (function() {
  //TODO
})();

const boardInterface = (function() {
  //TODO
})();
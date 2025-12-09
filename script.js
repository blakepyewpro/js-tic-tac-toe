const gameboard = (function () {
  let board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ];

  const resetBoard = function() {
    for (let x = 0; x < 2; x++) {
      for (let y = 0; y < 2; y++) {
        board[x][y] = ' ';
        const selectedSquare = document.querySelector(`[data-id="${x},${y}`);
        selectedSquare.textContent = " ";
      }
    }
  };
  const markBoard = function(x, y, symbol) {
    if (board[x][y] === " ") {
      const selectedSquare = document.querySelector(`[data-id="${x},${y}`);
      selectedSquare.textContent = symbol;
      board[x][y] = symbol;
    } else throw Error("Attempted to mark non-empty space!");
  };
})();
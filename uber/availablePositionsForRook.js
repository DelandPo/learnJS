const myBoard = [
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", "p", ".", ".", ".", "."],
  [".", ".", ".", "R", ".", ".", ".", "p"],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", "p", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."]
];

/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
  const copyBoard = JSON.parse(JSON.stringify(board));
  const result = depthFirstSearch(board, 0, 0);
  const count = capturePawns(copyBoard, result[0], result[1]);
  console.error(count);
};

function depthFirstSearch(board, i, j) {
  if (i >= 0 && i <= 7 && j >= 0 && j <= 7 && board[i][j] !== "X") {
    if (board[i][j] === "R") {
      return [i, j];
    } else {
      board[i][j] = "X";
      const a = depthFirstSearch(board, i + 1, j);
      const b = depthFirstSearch(board, i - 1, j);
      const c = depthFirstSearch(board, i, j + 1);
      const d = depthFirstSearch(board, i, j - 1);
      return a || b || c || d;
    }
  }
  return null;
}

function capturePawns(board, i, j) {
  // For pawns that are left to the rook
  let count = 0;
  for (let k = j + 1; k < 8; k++) {
    if (board[i][k] !== "B") {
      if (board[i][k] === "p") {
        count++;
        break;
      }
    } else {
      break;
    }
  }

  for (let k = j - 1; k >= 0; k--) {
    if (board[i][k] !== "B") {
      if (board[i][k] === "p") {
        count++;
        break;
      }
    } else {
      break;
    }
  }

  for (let k = i - 1; k >= 0; k--) {
    if (board[k][j] !== "B") {
      if (board[k][j] === "p") {
        count++;
        break;
      }
    } else {
      break;
    }
  }

  for (let k = i + 1; k < 8; k++) {
    if (board[k][j] !== "B") {
      if (board[k][j] === "p") {
        count++;
        break;
      }
    } else {
      break;
    }
  }

  return count;
}

numRookCaptures(myBoard);

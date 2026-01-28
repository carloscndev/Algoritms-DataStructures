function isValidSudoku(board: string[][]): boolean {
  const boardSize = board.length;
  const rows = Array.from({ length: boardSize }, () => new Set());
  const cols = Array.from({ length: boardSize }, () => new Set());
  const boxes = Array.from({ length: boardSize }, () => new Set());

  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      const val = board[i][j];
      if (val === ".") continue;

      const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

      if (rows[i].has(val) || cols[j].has(val) || boxes[boxIndex].has(val)) {
          return false;
      }

      rows[i].add(val);
      cols[j].add(val);
      boxes[boxIndex].add(val);
    }
  }

  return true;
}

const board = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];

console.log(isValidSudoku(board)); // Output: true

const invalidBoard = [
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];

console.log(isValidSudoku(invalidBoard)); // Output: false  
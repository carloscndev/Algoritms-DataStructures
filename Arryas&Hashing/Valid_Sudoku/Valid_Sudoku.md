# Valid Sudoku
You are given a 9 x 9 Sudoku board board. A Sudoku board is valid if the following rules are followed:

Each row must contain the digits 1-9 without duplicates.
Each column must contain the digits 1-9 without duplicates.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without duplicates.
Return true if the Sudoku board is valid, otherwise return false

Note: A board does not need to be full or be solvable to be valid.

**Example 1:**
```
Input: board = 
[
  ["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","8",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]
]

Output: true
```
**Example 2:**
```
Input: board = 
[
 ["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","1",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]
]

Output: false
Explanation: There are two 1's in the top-left 3x3 sub-box.
```



**Constraints:**

- `board.length == 9`
- `board[i].length == 9`
- `board[i][j] is a digit 1-9 or '.'.`

## Solution Overview

• We use three parallel set structures:
	◦ rows[i] → numbers in row i
	◦ cols[j] → numbers in column j
	◦ boxes[boxIndex] → numbers in the corresponding 3×3 sub‑box
• For each cell, we calculate its sub‑box index with Math.floor(i/3) * 3 + Math.floor(j/3).
• If the number already exists in any of the sets, the board is invalid.
• Otherwise, we add it to the sets and continue.

Start
  ↓
Initialize 9 sets for rows
Initialize 9 sets for columns
Initialize 9 sets for boxes
  ↓
For each cell (i, j) in board:
  ↓
  If cell is "." → continue
  ↓
  Compute boxIndex = (i // 3) * 3 + (j // 3)
  ↓
  Check if value exists in:
    - rows[i]
    - cols[j]
    - boxes[boxIndex]
  ↓
  If exists → return false
  ↓
  Else:
    Add value to rows[i], cols[j], boxes[boxIndex]
  ↓
Repeat until all cells processed
  ↓
Return true
  ↓
End

def is_valid_sudoku(board: list[list[str]]) -> bool:
    board_size = len(board)
    rows = [set() for _ in range(board_size)]
    cols = [set() for _ in range(board_size)]
    boxes = [set() for _ in range(board_size)]

    for row in range(board_size):
        for col in range(board_size):
            value = board[row][col]
            if value == '.':
                continue

            box = (row // 3) * 3 + (col // 3)
            if value in rows[row] or value in cols[col] or value in boxes[box]:
                return False

            rows[row].add(value)
            cols[col].add(value)
            boxes[box].add(value)

    return True


if __name__ == '__main__':
    board = [
        ["5","3",".",".","7",".",".",".","."],
        ["6",".",".","1","9","5",".",".","."],
        [".","9","8",".",".",".",".","6","."],
        ["8",".",".",".","6",".",".",".","3"],
        ["4",".",".","8",".","3",".",".","1"],
        ["7",".",".",".","2",".",".",".","6"],
        [".","6",".",".",".",".","2","8","."],
        [".",".",".","4","1","9",".",".","5"],
        [".",".",".",".","8",".",".","7","9"]
    ]

    invalid_board = [
        ["8","3",".",".","7",".",".",".","."],
        ["6",".",".","1","9","5",".",".","."],
        [".","9","8",".",".",".",".","6","."],
        ["8",".",".",".","6",".",".",".","3"],
        ["4",".",".","8",".","3",".",".","1"],
        ["7",".",".",".","2",".",".",".","6"],
        [".","6",".",".",".",".","2","8","."],
        [".",".",".","4","1","9",".",".","5"],
        [".",".",".",".","8",".",".","7","9"]
    ]

    valid_sudoku = is_valid_sudoku(board)
    invalid_sudoku = is_valid_sudoku(invalid_board)

    print(f'valid sudoku: {valid_sudoku}')
    print(f'invalid sudoku: {invalid_sudoku}')

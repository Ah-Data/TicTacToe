// Game state
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameOver = false;

// Winning combinations
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// Handle cell click event
function makeMove(index) {
  if (!gameOver && board[index] === '') {
    board[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].innerText = currentPlayer;
    checkWin();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

// Check if a player has won
function checkWin() {
  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
      gameOver = true;
      highlightWinningCells(a, b, c);
      setTimeout(() => {
        alert(`Player ${board[a]} wins!`);
      }, 100);
      return;
    }
  }
  if (!board.includes('')) {
    gameOver = true;
    setTimeout(() => {
      alert("It's a tie!");
    }, 100);
  }
}

// Highlight the winning cells
function highlightWinningCells(a, b, c) {
  const cells = document.getElementsByClassName('cell');
  cells[a].classList.add('winning-cell');
  cells[b].classList.add('winning-cell');
  cells[c].classList.add('winning-cell');
}

// Reset the game
function resetGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameOver = false;
  const cells = document.getElementsByClassName('cell');
  for (let cell of cells) {
    cell.innerText = '';
    cell.classList.remove('winning-cell');
  }
}

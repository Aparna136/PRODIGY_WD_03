 const board = document.getElementById('board');
    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;

    // Create the game board
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.setAttribute('data-index', i);
      cell.addEventListener('click', handleCellClick);
      board.appendChild(cell);
    }

    // Handle cell click
    function handleCellClick(event) {
      const index = event.target.getAttribute('data-index');

      if (gameBoard[index] === '' && gameActive) {
        gameBoard[index] = currentPlayer;
        event.target.textContent = currentPlayer;
        checkWin();
        switchPlayer();
      }
    }

    // Switch player
    function switchPlayer() {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }

    // Check for a win
    function checkWin() {
      const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
      ];

      for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
          alert(`${gameBoard[a]} wins!`);
          gameActive = false;
          return;
        }
      }

      if (!gameBoard.includes('')) {
        alert('It\'s a tie!');
        gameActive = false;
      }
    }
  
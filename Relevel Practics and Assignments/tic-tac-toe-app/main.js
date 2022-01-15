window.addEventListener("DOMContentLoaded", () => {
    const cells = Array.from(document.querySelectorAll(".cell"));
    const startGameBtn = document.getElementById("startGameBtn");
    const resetButton = document.querySelector("#reset");
  
    const result = document.querySelector("#result");
  
    const gameBoard = document.querySelector(".gameBoard");
    const playerDetailsContainer = document.querySelector(".playerDetails");
  
    const playerXInput = document.getElementById("playerXInput");
    const playerOInput = document.getElementById("playerOInput");
  
    let board = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer = "X";
    let isGameActive = true;
  
    const PLAYERX_WON = "PLAYER X WON";
    const PLAYERO_WON = "PLAYER O WON";
    const TIE = "TIE";
  
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  
    cells.forEach((cell, index) => {
      cell.addEventListener("click", () => {
        userAction(cell, index);
      });
    });
  
    const updateBoard = (index) => {
      board[index] = currentPlayer;
    };
  
    const handleValidation = () => {
      let roundWon = false;
  
      for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        const a = board[winCondition[0]];
        const b = board[winCondition[1]];
        const c = board[winCondition[2]];
  
        if (a === "" || b === "" || c === "") {
          continue;
        }
  
        if (a === b && b === c) {
          roundWon = true;
          break;
        }
      }
  
      if (roundWon) {
        announceWinner(currentPlayer === "X" ? PLAYERX_WON : PLAYERO_WON);
        isGameActive = false;
        return;
      }
  
      if (!board.includes("")) {
        announceWinner(TIE);
      }
    };
  
    const announceWinner = (type) => {
      switch (type) {
        case PLAYERX_WON:
          result.innerHTML =
            'Player <span class="playerX">' + playerXInput.value + "</span> Won";
          break;
        case PLAYERO_WON:
          result.innerHTML =
            'Player <span class="playerO">' + playerOInput.value + "</span> Won";
          break;
        case TIE:
          result.innerHTML = "Game is Tied!";
          break;
        default:
          break;
      }
    };
  
    const changeTurn = () => {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    };
  
    const userAction = (cell, index) => {
      console.log("cell " + cell);
      console.log("index " + index);
      if (isGameActive) {
        cell.innerText = currentPlayer;
        cell.classList.add(`player${currentPlayer}`);
        //updateBoard function
        updateBoard(index);
        //handleValidationResult function
        handleValidation();
        //changeTurn function
        changeTurn();
      }
    };
  
    function resetBoard() {
      console.log("Inside Reset Board Function");
      board = ["", "", "", "", "", "", "", "", ""];
      result.innerHTML = "";
      currentPlayer = "X";
      isGameActive = true;
  
      cells.forEach((cell) => {
        cell.innerHTML = "";
        cell.classList.remove("playerX");
        cell.classList.remove("playerO");
      });
      playerOInput.value = "";
      playerXInput.value = "";
  
      gameBoard.classList.add("hidden");
      playerDetailsContainer.classList.remove("hidden");
    }
  
    function startGame() {
      playerDetailsContainer.classList.add("hidden");
      gameBoard.classList.remove("hidden");
    }
    resetButton.addEventListener("click", resetBoard);
    startGameBtn.addEventListener("click", startGame);
  });
  
let player = null; // Текущий игрок
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

document.getElementById("playerX").addEventListener("click", () => startGame("X"));
document.getElementById("playerO").addEventListener("click", () => startGame("O"));
document.getElementById("reload").addEventListener("click", resetGame);

function startGame(selectedPlayer) {
    player = selectedPlayer;
    document.getElementById("playerPicker").style.display = "none";
    document.getElementById("game").style.display = "block";

    const area = document.getElementById("area");
    area.innerHTML = ""; // Очистка игрового поля

    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.index = i;
        cell.addEventListener("click", handleCellClick, { once: true });
        area.appendChild(cell);
    }
}

function handleCellClick() {
    this.textContent = player;

    if (checkWin(player)) {
        setTimeout(() => alert(`${player} победил!`), 100);
        resetGame();
        return;
    }

    if (checkDraw()) {
        setTimeout(() => alert("Ничья!"), 100);
        resetGame();
        return;
    }

    player = player === "X" ? "O" : "X";
}

function checkWin(currentPlayer) {
    const cells = [...document.querySelectorAll(".cell")];
    const playerMoves = cells
        .map((cell, index) => (cell.textContent === currentPlayer ? index : null))
        .filter(index => index !== null);

    return winCombos.some(combo => combo.every(index => playerMoves.includes(index)));
}

function checkDraw() {
    return [...document.querySelectorAll(".cell")].every(cell => cell.textContent);
}

function resetGame() {
    document.getElementById("playerPicker").style.display = "block";
    document.getElementById("game").style.display = "none";
}

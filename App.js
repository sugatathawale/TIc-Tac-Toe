// Styles using js
let gm_brd = document.querySelector('.game-board');
gm_brd.style.justifyContent = "center";
gm_brd.style.width = "100vw";

let cells = document.querySelectorAll('.cell');

cells.forEach(cell => {
    cell.style.border = "2px solid";
});

let restart = document.querySelector('#restartButton');
restart.style.marginTop = "20px";
restart.style.padding = "5px";

// Adding X and 0 to th game
let moveHistory = []
let count = 0;
document.addEventListener('click', function(event){
    if (event.target.classList.contains('cell') && event.target.innerHTML === '') {
        if (count % 2 == 0){
            count += 1;
            event.target.textContent = 'X';
        }
        else{
            count += 1;
            event.target.innerHTML = 'O';
        }
        moveHistory.push(event.target);

    }
    winner();
    
    if (count == 9){
        alert("It's a draw!");
    } 
})


const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]             
];


// Checking for winner
function winner() {
    let lst1 = [];
    let lst2 = [];
    
    cells.forEach((cell, index) => {
        if (cell.innerHTML === 'X') {
            lst1.push(index);
        } else if (cell.innerHTML === 'O') {
            lst2.push(index);
        }
    });

    for (const combination of winningCombinations) {
        if (combination.every(index => lst1.includes(index))) {
            alert("X wins!");
            return;
        } else if (combination.every(index => lst2.includes(index))) {
            alert("O wins!");
            return;
        }
    }
}
function resetgame(){
    cells.forEach(cell => {
        cell.innerHTML = '';
    })
    moveHistory = [];
    count = 0;
}

restart.onclick = resetgame;

// undo button
let undo_btn = document.querySelector('#undoButton');
function udo(){
    if (moveHistory.length > 0) {
        let lastMove = moveHistory.pop();
        lastMove.textContent = ''; 
        count -= 1;
    }
}

undo_btn.onclick = udo;

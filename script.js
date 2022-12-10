let playerTurn  = 1; // 1 means O's Turn & 2 means X's Turn

let arr         = [0,0,0,0,0,0,0,0,0]; // Main Array of the game

let win         = 0;
let tie         = 0;
let winner      = false;


function Game(btn) { // call whenever any button clicked by player

    if (winner) return;  // If game is over, do not execute further code


    btn.innerHTML = playerTurn == 1 ? 'O' : 'X'; // Update Button innerHTML to X or Y

    playerTurn = playerTurn == 1 ? 2 : 1; // Update playerTurn variable to 1 or 2

    message.innerHTML = playerTurn == 1 ? `<b>O's Turn!</b>` : `<b>X's Turn!</b>`;  // Update Message

    btn.disabled = true  // Disable clicked button, so that player cannot press that button again



    // Update value of the array's index according to the value of the pressed button or the player's turn
    // If it is X's turn value updated to 3 & in case of O's turn value updated to 5
    arr[btn.value] = playerTurn == 2 ? 3 : 5;  



    // this are all the winning scenerios accoding to the index of the main array 
    let winScenerio = [[0,1,2], [3,4,5], [6,7,8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    for (let i = 0; i < winScenerio.length; i++) { 

        for (let j = 0; j < winScenerio[i].length; j++) { // Check all the winning scenerios via winScenerio's array

            win += arr[winScenerio[i][j]]; // Sum all the values of main array according to the index of winning scenerio 
        }        

        checkWinner (); // At last, Check is anyone winning

        if (winner) break; // If anyone is winning, break the loop
    }
    

    // Game Tie Code
    tie++;
    if (tie >= 9 && !winner){ 
        message.innerHTML = `Game Tie! Nobody wins.`; // Update Message
        reloadBtn.style.display = "block";  // Show Play Again Button
    };


}  // Game


function checkWinner ()
{

    if (win == 9 || win == 15)  // If sum of all three winning scenerio index is 9 - O's win Or 15 - X's Win:  ex: 3+3+3 = 9
    {
        message.innerHTML = win == 9 ? `<b>O win the Game.</b>` : '<b>X win the Game.</b>';  // Update Message
        reloadBtn.style.display = "block";  // Show Play Again Button
        winner = true;
    }

    win = 0;

} // checkWinner


function Reload ()
{
    location.reload();
}
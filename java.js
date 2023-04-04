const boxes = document.querySelectorAll(".box"); // going into each box
const statusTxt = document.querySelector("#play-now"); // starting the GAME
const refreshBtn = document.querySelector("#refresh"); // restarting the game
const currentPlayerEl = document.querySelector("#cp-element");
const winnerEl = document.querySelector("#winner-element");
const recordsEl = document.querySelector("#records-element");
let winnerDeclared = false;
let roundNumber = 0;

let options = ["", "", "", "", "", "", "", "", ""]; // each square in the box
let currentPlayer = true; // able to be altered
let running = false;
currentPlayerEl.innerHTML = "Player 1"; // innerHTML is the html found in an element

const winningOptions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
  // these are the winning options
  // the number represents a square
  // the length is 3 long bc u have to get 3 in a row
];

boxes.forEach((box, i) =>
  box.addEventListener("click", function (event) {
    if (this.innerText !== "" || winnerDeclared === true) {
      // if they are empty it will input the value the current player has
      return; // its returning the values from above
    }

    this.innerText = currentPlayer ? "x" : "o"; // im replacing whatever empty square with a value tht the current player has
    currentPlayer = !currentPlayer; // if the current player value is true X if current player value is false it'll log O
    currentPlayerEl.innerHTML = currentPlayer ? "Player 1" : "Player 2"; // if else statement, but shorter its switching between P1 & p2 based on the current player boolean

    options[i] = event.target.innerHTML;
    // options.push(event.target.innerHTML)
    //console.log(options)

    winningOptions.forEach((item, index) => {
      // player 1 wins
      if (
        options[item[0]] === "x" &&
        options[item[1]] === "x" &&
        options[item[2]] === "x"
      ) {
        winnerDeclared = true;
        //alert('player 1 has won this round!');
        winnerEl.innerHTML = "PLAYER 1 HAS WON!!!!!";
        setTimeout(() => {
          restart();
        }, 3000);
        roundNumber++; // increasing the round number if player 1 wins
        recordsEl.innerHTML += `<div>Player One won</div>`;
      } else if (
        // if player 2
        options[item[0]] === "o" &&
        options[item[1]] === "o" &&
        options[item[2]] === "o"
      ) {
        winnerDeclared = true;
        //alert('player 2 has won this round!')
        winnerEl.innerHTML = "PLAYER 2 HAS WON!!!!!";
        setTimeout(() => {
          restart();
        }, 3000);
        roundNumber++; // increasing the round number if player 2 wins
        recordsEl.innerHTML += `<div>Player Two won</div>`;
      } else if (!options.includes("")) {
        // check if board doesn't include empty squares before you declare a tie
        //alert("it's a tie")
        winnerEl.innerHTML = "ITS A CATS!!!!!";
        setTimeout(() => {
          restart();
        }, 3000);

        // alert('Its a tie')
      }
    });

    //   for(let i = 0; i < winningOptions.length; i++){
    //       const winningEl = winningOptions[i]
    //       console.logwinning

    // }

    //         if(options[0] === "x" && options[1] === "x" && options[2] === "x"){
    //             console.log("player one wins")
    //         } else {
    //             console.log('player won')
    //             (options[3] === "x" && options[4] === "x" && options[5] === "x")
    //          } else {
    //             (options[6] === "x" && options[7] === "x" && options[8] === "x")
    //         } else {
    //             (options[0] === "x" && options[3] === "x" && options[6] === "x")
    //         } else {
    //             (options[1] === "x" && options[4] === "x" && options[7] === "x")
    //         } else {
    //             (options[2] === "x" && options[5] === "x" && options[8] === "x")
    //         } else {
    //             (options[2] === "x" && options[4] === "x" && options[6] === "x")
    //         } else {
    //             (options[0] === "x" && options[4] === "x" && options[8] === "x")
    //         }
  })
);

function restart() {
  // this is to restrart the game
  for (let i = 0; i < options.length; i++) {
    options[i] = "";
  }
  //boxes.forEach() // looping through the array
  boxes.forEach((box, index) => {
    // looping thru the array
    box.innerHTML = ""; // emptying all the boxes at the end once youve won
  });
  winnerDeclared = false; //
  currentPlayer = true; // seting player back to player 1
}

//   btnRefresh.addEventListener('click',refreshGame);
//   statusTxt.textContent=`${player} Your Turn`;
//   running=true;
// }

// function boxClick(){
//     console.log(currentPlayer)
//     if( currentPlayer === true){
//         this.innerText = 'x'
//     } else {
//     this.innerText = 'o'
//     }
//    currentPlayer = !currentPlayer // flipping the value !
//}

//   refreshBtn.addEventListener("click", refreshPage)
//   function refreshPage(event){
//     alert("refreshing...")
//    }

refreshBtn.addEventListener("click", function () {
  window.location.reload(); // reload the page
});

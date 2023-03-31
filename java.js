const boxes=document.querySelectorAll('.box'); // going into each box 
const statusTxt=document.querySelector('#play-now'); // starting the GAME
const refreshBtn =document.querySelector('#refresh'); // restarting the game
const currentPlayerEl = document.querySelector('#cp-element')


let options=["","","","","","","","",""]; // each square in the box 
let currentPlayer= true; // able to be altered 
let running=false;
currentPlayerEl.innerHTML = "Player 1" // innerHTML is the html found in an element

const winningOptions = [
    [0,1,2],    
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8] 
    // these are the winning options
    // the number represents a square 
    // the length is 3 long bc u have to get 3 in a row 
]

  boxes.forEach((box, i) => box.addEventListener('click',function(event){
    if (this.innerText !== "") { // if they are empty it will input the value the current player has
        return; // its returning the values from above 
      }
  
  
      this.innerText = currentPlayer ? 'x' : 'o'; // im replacing whatever empty square with a valuse tht the current player has
      currentPlayer = !currentPlayer; // if the current player value is true X if current player value is false it'll log O
      const winner = currentPlayerEl.innerHTML = currentPlayer ? "Player 1" : "Player 2" // if else statement, but shorter its switching between P1 & p2 based on the current player boolean
      
      options[i] = event.target.innerHTML
      // options.push(event.target.innerHTML)
      console.log(options)
    //   for(let i = 0; i < winningOptions.length; i++){
    //       const winningEl = winningOptions[i]
    //       console.logwinning

     // }
    
        if(options[0] === "x" && options[1] === "x" && options[2] === "x"){
            console.log("player one wins")
        } else {
            (options[3] === "x" && options[4] === "x" && options[5] === "x")
        } else {
            (options[6] === "x" && options[7] === "x" && options[8] === "x")
        } else {
            (options[0] === "x" && options[3] === "x" && options[6] === "x")
        } else {
            (options[1] === "x" && options[4] === "x" && options[7] === "x")
        } else {
            (options[2] === "x" && options[5] === "x" && options[8] === "x")
        } else {
            (options[2] === "x" && options[4] === "x" && options[6] === "x")
        } else {
            (options[0] === "x" && options[4] === "x" && options[8] === "x")
        }
     
  }));
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
// }





//   refreshBtn.addEventListener("click", refreshPage)
//   function refreshPage(event){
//     alert("refreshing...")
//    }

  refreshBtn.addEventListener('click', function(){
    window.location.reload() // reload the page
  } )


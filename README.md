# Tic-Tac-Toe

As a user, I should be able to start a new tic tac toe game // DONE

As a user, I should be able to click on a square to add X first and then O, and so on //DONE

As a user, I should be shown a message after each turn for if I win, lose, tie or who's turn it is next // STILL WORKING

As a user, I should not be able to click the same square twice // DONE

As a user, I should be shown a message when I win, lose or tie // STILL WORKING

As a user, I should not be able to continue playing once I win, lose, or tie // STILL WORKING

As a user, I should be able to play the game again without refreshing the page // I dont understand, what if u have impmented a refresh button so that the game can be refreshed, so you can replay.

I will first complete the simple things first, then add in some Javascript. I will alternate back and forth for the first 45 min, so I dont stress myself out with the JS, since that is where I have issues

In the next hour I will then soley focus on the JS to make sure the game is started, I will then do google searches as well as look at my notes to check to see if their is anything that can help me create a game like tic-tak-toe.(It really isnt)

Create a wirefram to get an example of the layout youd like.

The wireframe I have created, currently consist of 3 different pages.
The Home page - this tells u a little about the game, and history/ rules
Depending on which button u select you will go to the second page will be a page that is telling u to just accept the rules of the game so u can play
The other button is just a button so u can actually play the game.

Create a div container so tht u can create the tictac toe board.

<div class="container-nine">
    <div class="box">  </div>
    <div class="box">  </div>
    <div class="box">  </div>
    <div class="box"> </div>
    <div class="box"> </div>
    <div class="box">  </div>
    <div class="box"> </div>
    <div class="box"> </div>
    <div class="box"> </div>
</div>

At first these were not empty I had numbers in them soI could see where everything was. I had to ommit the numbers in order for the X & O to render properly.

I then will have to go in, and update the css so that it forms a box by using display grid

Moving on to the JS
const boxes=document.querySelectorAll('.box'); // going into each box
const statusTxt=document.querySelector('#play-now'); // starting the GAME
const refreshBtn =document.querySelector('#refresh'); // restarting the game
const currentPlayerEl = document.querySelector('#cp-element')

Technologies Used html/css/bootstrap/javascript/ vs code command line, git hub pages.
Listing of outside sources, and their links.

1. https://cssgradient.io/
   I really love implementing this linear gradient in alot of projects I complete, sometimes it is tuff to utlize, to get it to render properly, but I keep trying different things.

2. https://getbootstrap.com/docs/5.3/components/navs-tabs/
used bootstrap to create the navbar, the current navarbar I dont really like, so im going back and forth on if I should keep it or omit it, and just stick with buttoons
the code utlizied from bootstrap will be pasted below.
<ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Disabled</a>
  </li>
</ul>

3. How to toggle a boolean, so it can go back and forth between true(X) and false(O), I am using this so that the user cannot click the square they already selected. The link is below.
   https://stackoverflow.com/questions/11604409/how-to-toggle-a-boolean
   snippet of the code I created refrencing toggle (not to be confused w/ copy and paste) currentPlayerEl.innerHTML = currentPlayer ? "Player 1" : "Player 2"
4.

Project name: (TIC-TAC-TOE)
Description: The site has a total of three pages. The first page is the home page. The homepage displays the rules. After the user has viewed the rules they will then have to select a button. Confirming if they agree to the rules or not. If they do not accept the rules, they will then be taken to a seperate page, that will scold them. The page is a boring page that has information about the games history. It also tells the user that they are diffcult since they did not just accept the rules. The third, and final page is the actual game. On the page where the game is the user has access to a score tracker-- to inform them of who has won previous games, as well as informs them who currently won, and if it is a tie.

Project Hurdles and Wins:
My biggest project hurdle was making sure you cant chnage a box, after you have already selected it. I make everything seem much more complex than what it really is. I just had to take my time and really think. As well as do some research The first thing that I found that made sense to me was setting them as a boolean 'true' and 'false' winnerDeclared = false; //
currentPlayer = true;

A win for me that I was super excited about was me being able to put a div in the body of each page, so I can alter different things, and target the CSS better. I have 3 pages with 3 different themes on each one.

Project
Planning- I knew I wanted to utlize a couuple of pages because I wanted the site to be more interactive with the user.
Icebox - I wish I could have added a space where users can enter their own username. So it can be a bit more personal for users. Another thing i'd like to add is a way for users to personalize their X or O.

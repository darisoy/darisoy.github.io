{
  var scores, roundScore, activePlayer, activeGame;

  //var dicePrev;
  init();

  document.querySelector(".btn-roll").addEventListener("click", function() {
    if (activeGame) {
      //random number for dice
      var dice1 = Math.floor(Math.random() * 6) + 1;
      var dice2 = Math.floor(Math.random() * 6) + 1;
      //display dice
      var diceDOM1 = document.getElementById("dice-1");
      diceDOM1.style.display = "block";
      diceDOM1.src = "dice-" + dice1 + ".png";
      var diceDOM2 = document.getElementById("dice-2");
      diceDOM2.style.display = "block";
      diceDOM2.src = "dice-" + dice2 + ".png";
      //calculations
      if (dice1 == 1 || dice2 == 1) {
        nextPlayer();
      // } else if (dice == 6 && dicePrev == 6) {
      //   scores[activePlayer] = 0;
      //   document.getElementById("score-" + activePlayer).textContent = 0;
      //   nextPlayer();
      } else {
        roundScore += dice1 + dice2;
        //dicePrev = dice;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
      }

    }
  });

  document.querySelector(".btn-hold").addEventListener("click", function() {
    if (activeGame) {
      // set winning score
      var win;
      var input = document.querySelector(".final-score").value;
      if (input) {
        win = input;
      } else {
        win = 100;
      }
      //adds total score
      scores[activePlayer] += roundScore;
      document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
      //checks for the winner
      if (scores[activePlayer] >= win) {
        document.querySelector(".player-" + activePlayer + "-panel").classList.add('winner');
        document.getElementById("name-" + activePlayer).textContent = "Winner!";
        document.querySelector(".player-" + activePlayer + "-panel").classList.toggle('active');
        activeGame = false;
      } else {
        nextPlayer();
      }
    }
  });

  function nextPlayer() {
    roundScore = 0;
    //dicePrev = 0;
    if (activePlayer == 0) {
      activePlayer = 1;
    } else {
      activePlayer = 0;
    }
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;
    document.getElementById("dice-1").style.display = "none";
    document.getElementById("dice-2").style.display = "none";
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
  }

  document.querySelector(".btn-new").addEventListener("click", init);

  function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    activeGame = true;
    //dicePrev = 0;

    document.querySelector("#current-0").textContent = 0;
    document.querySelector("#current-1").textContent = 0;
    document.querySelector("#score-0").textContent = 0;
    document.querySelector("#score-1").textContent = 0;
    document.getElementById("dice-1").style.display = "none";
    document.getElementById("dice-2").style.display = "none";
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector(".final-score").value = "";
  }
}

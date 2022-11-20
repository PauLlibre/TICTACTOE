var value = "";
let numberOfX = [];
let numberOfO = [];
let round = 1;
let positionOfX = [];
let positionOfO = [];
let player1win = ["x", "x", "x"];
let playMode = "";
let gameOver = false;
const playAudio = new Audio("../audio/ES_Toy Wood Block 2 - SFX Producer.mp3");
const victoryAudio = new Audio("../audio/ES_PE-Music 22 - SFX Producer.mp3");
const buttonPress = new Audio("../audio/POP.mp3");

// CONTENIDO DE DENTRO LA CELDAS

// RELLENAR LA TABLA
function humanPlay() {
  for (i = 1; i <= 9; i++) {
    let cell = "cell" + i.toString();
    console.log(cell);
    document.getElementById(cell).addEventListener("click", function () {
      value = document.getElementById(cell).innerHTML;
      if (value != "x" && value != "o") {
        if (numberOfX.length >= 3 && numberOfO.length >= 3) {
        } else {
          if (round % 2 != 0) {
            document.getElementById(cell).innerHTML = "x";
            numberOfX.push(document.getElementById(cell).innerHTML);
            console.log(numberOfX);
            round++;
            console.log(round);
            tableState();
            victory();
            document
              .getElementById("player2Container")
              .classList.add("selected");
            document
              .getElementById("player1Container")
              .classList.remove("selected");
            playAudio.play();
          } else if (round % 2 == 0) {
            if (round % 2 == 0) {
              document.getElementById(cell).innerHTML = "o";
              numberOfO.push(document.getElementById(cell).innerHTML);
              console.log(numberOfO);
              round++;
              console.log(round);
              tableState();
              victory();
              document
                .getElementById("player1Container")
                .classList.add("selected");
              document
                .getElementById("player2Container")
                .classList.remove("selected");
              playAudio.play();
            }
          }
        }
      } else if (value == "x") {
        if (numberOfX.length > 2) {
          if (round % 2 != 0) {
            document.getElementById(cell).innerHTML = "";
            numberOfX.pop();
            console.log(numberOfX);
          }
        }
      } else if (value == "o") {
        if (numberOfO.length > 2) {
          if (round % 2 == 0) {
            document.getElementById(cell).innerHTML = "";
            numberOfO.pop();
            console.log(numberOfO);
          }
        }
      }
      console.log(cell);
    });
  }
}

// ESTADO DEL TABLERO

let win;

function tableState() {
  win = {
    verticalRowA: [
      document.getElementById("cell1").innerHTML,
      document.getElementById("cell4").innerHTML,
      document.getElementById("cell7").innerHTML,
    ],
    verticalRowB: [
      document.getElementById("cell2").innerHTML,
      document.getElementById("cell5").innerHTML,
      document.getElementById("cell8").innerHTML,
    ],
    verticalRowC: [
      document.getElementById("cell3").innerHTML,
      document.getElementById("cell6").innerHTML,
      document.getElementById("cell9").innerHTML,
    ],
    horizontalRowA: [
      document.getElementById("cell1").innerHTML,
      document.getElementById("cell2").innerHTML,
      document.getElementById("cell3").innerHTML,
    ],
    horizontalRowB: [
      document.getElementById("cell4").innerHTML,
      document.getElementById("cell5").innerHTML,
      document.getElementById("cell6").innerHTML,
    ],
    horizontalRowC: [
      document.getElementById("cell7").innerHTML,
      document.getElementById("cell8").innerHTML,
      document.getElementById("cell9").innerHTML,
    ],
    diagonalRowA: [
      document.getElementById("cell1").innerHTML,
      document.getElementById("cell5").innerHTML,
      document.getElementById("cell9").innerHTML,
    ],
    diagonalRowC: [
      document.getElementById("cell3").innerHTML,
      document.getElementById("cell5").innerHTML,
      document.getElementById("cell7").innerHTML,
    ],
  };
}

// COMPROBAR VICOTRIA

function victory() {
  if (
    (win.verticalRowA[0] == "x" &&
      win.verticalRowA[1] == "x" &&
      win.verticalRowA[2] == "x") ||
    (win.verticalRowB[0] == "x" &&
      win.verticalRowB[1] == "x" &&
      win.verticalRowB[2] == "x") ||
    (win.verticalRowC[0] == "x" &&
      win.verticalRowC[1] == "x" &&
      win.verticalRowC[2] == "x") ||
    (win.diagonalRowA[0] == "x" &&
      win.diagonalRowA[1] == "x" &&
      win.diagonalRowA[2] == "x") ||
    (win.diagonalRowC[0] == "x" &&
      win.diagonalRowC[1] == "x" &&
      win.diagonalRowC[2] == "x") ||
    (win.horizontalRowA[0] == "x" &&
      win.horizontalRowA[1] == "x" &&
      win.horizontalRowA[2] == "x") ||
    (win.horizontalRowB[0] == "x" &&
      win.horizontalRowB[1] == "x" &&
      win.horizontalRowB[2] == "x") ||
    (win.horizontalRowC[0] == "x" &&
      win.horizontalRowC[1] == "x" &&
      win.horizontalRowC[2] == "x")
  ) {
    document.getElementById("winningScreen").classList.add("visible");
    document.getElementById("winner").innerHTML = `${player1Name} WINS!`;
    positionOfX = [];
    positionOfO = [];
    victoryAudio.play();
  } else if (
    (win.verticalRowA[0] == "o" &&
      win.verticalRowA[1] == "o" &&
      win.verticalRowA[2] == "o") ||
    (win.verticalRowB[0] == "o" &&
      win.verticalRowB[1] == "o" &&
      win.verticalRowB[2] == "o") ||
    (win.verticalRowC[0] == "o" &&
      win.verticalRowC[1] == "o" &&
      win.verticalRowC[2] == "o") ||
    (win.diagonalRowA[0] == "o" &&
      win.diagonalRowA[1] == "o" &&
      win.diagonalRowA[2] == "o") ||
    (win.diagonalRowC[0] == "o" &&
      win.diagonalRowC[1] == "o" &&
      win.diagonalRowC[2] == "o") ||
    (win.horizontalRowA[0] == "o" &&
      win.horizontalRowA[1] == "o" &&
      win.horizontalRowA[2] == "o") ||
    (win.horizontalRowB[0] == "o" &&
      win.horizontalRowB[1] == "o" &&
      win.horizontalRowB[2] == "o") ||
    (win.horizontalRowC[0] == "o" &&
      win.horizontalRowC[1] == "o" &&
      win.horizontalRowC[2] == "o")
  ) {
    document.getElementById("winningScreen").classList.add("visible");
    document.getElementById("winner").innerHTML = `${player2Name} WINS!`;
    positionOfX = [];
    positionOfO = [];
    gameOver = true;
    victoryAudio.play();
  } else {
    console.log("error");
  }
}

//MODE SELECTION

//MODE SELECTION TRIGGER

document
  .getElementById("infoPlayButton")
  .addEventListener("click", function () {
    document.getElementById("modeSelector").classList.add("visible");
    document.getElementById("playerNaming").classList.remove("appear");
    document.getElementById("playMode").classList.remove("invisible");
    buttonPress.play();
  });

//MODE SELECTION SCREEN
document
  .getElementById("playerVsPlayer")
  .addEventListener("click", function () {
    document.getElementById("playMode").classList.add("invisible");
    document.getElementById("playerNaming").classList.add("appear");
    playMode = "human";
    buttonPress.play();
    console.log(playMode);
  });

document.getElementById("playerVsCpu").addEventListener("click", function () {
  document.getElementById("playMode").classList.add("invisible");
  document.getElementById("playerNaming").classList.add("appear");
  playMode = "cpu";
  buttonPress.play();
  console.log(playMode);
});

//PLAY AGAIN

//PLAY AGAIN BUTTON

document.getElementById("playAgain").addEventListener("click", function () {
  document.getElementById("winningScreen").classList.remove("visible");
  cleanTable();
  document.getElementById("player1Container").classList.add("selected");
  document.getElementById("player2Container").classList.remove("selected");
  buttonPress.play();
});

//PLAY AGAIN RESET TABLE

function cleanTable() {
  for (i = 1; i < 10; i++) {
    let cell = "cell" + i.toString();
    document.getElementById(cell).innerHTML = "";
  }
  numberOfO = [];
  numberOfX = [];
  round = 1;
}

//SELECT AVATAR

let avatar1 = document.getElementById("avatar1");
let avatar2 = document.getElementById("avatar2");
let avatar3 = document.getElementById("avatar3");
let avatar4 = document.getElementById("avatar4");

let p1SelectedCharacter = "";
let p2SelectedCharacter = "";

avatar1.addEventListener("click", function () {
  buttonPress.play();
  if (avatar2.classList.contains("selected")) {
    avatar2.classList.remove("selected");
    avatar1.classList.add("selected");
    p1SelectedCharacter = "boy";
  } else {
    avatar1.classList.add("selected");
    p1SelectedCharacter = "boy";
  }
});
avatar2.addEventListener("click", function () {
  buttonPress.play();
  if (avatar1.classList.contains("selected")) {
    avatar1.classList.remove("selected");
    avatar2.classList.add("selected");
    p1SelectedCharacter = "girl";
  } else {
    avatar2.classList.add("selected");
    p1SelectedCharacter = "girl";
  }
});
avatar3.addEventListener("click", function () {
  buttonPress.play();
  if (avatar4.classList.contains("selected")) {
    avatar4.classList.remove("selected");
    avatar3.classList.add("selected");
    p2SelectedCharacter = "boy";
  } else {
    avatar3.classList.add("selected");
    p2SelectedCharacter = "boy";
  }
});
avatar4.addEventListener("click", function () {
  buttonPress.play();
  if (avatar3.classList.contains("selected")) {
    avatar3.classList.remove("selected");
    avatar4.classList.add("selected");
    p2SelectedCharacter = "girl";
  } else {
    avatar4.classList.add("selected");
    p2SelectedCharacter = "girl";
  }
});

// GET PLAYER NAMES

let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");

// CPU EASY

function CPUlevel1() {
  for (i = 1; i <= 9; i++) {
    let cell = "cell" + i.toString();
    console.log(cell);
    document.getElementById(cell).addEventListener("click", function () {
      value = document.getElementById(cell).innerHTML;
      if (value != "x" && value != "o") {
        if (numberOfX.length >= 3 && numberOfO.length >= 3) {
          console.log("im here");
        } else if (numberOfX.length < 3) {
          document.getElementById(cell).innerHTML = "x";
          numberOfX.push(document.getElementById(cell).innerHTML);
          positionOfX.push(cell);
          positionOfX.sort();
          console.log(positionOfX);
          playAudio.play();
          cpuLevel1Move();

          tableState();

          console.log("im inside here");

          victory();
        }
      } else if (value == "x") {
        if (numberOfX.length > 2) {
          document.getElementById(cell).innerHTML = "";
          numberOfX.pop();
          for (i = 0; i < positionOfX.length; i++) {
            if (positionOfX[i] == cell) {
              positionOfX.splice(i, 1);
            }
          }

          console.log(numberOfX);
        }
      } else if (value == "o") {
        if (numberOfO.length > 2) {
          if (round % 2 == 0) {
            document.getElementById(cell).innerHTML = "";
            numberOfO.pop();
            console.log(numberOfO);
          }
        }
      }
      console.log(cell);
    });
  }
}
function cpuLevel1Move() {
  if (numberOfO.length < 3) {
    do {
      cell = "cell" + Math.floor(Math.random() * 9 + 1).toString();
      console.log(cell);
    } while (
      document.getElementById(cell).innerHTML == "x" ||
      document.getElementById(cell).innerHTML == "o"
    );
    document.getElementById(cell).innerHTML = "o";
    numberOfO.push("o");
  } else {
    do {
      cell = "cell" + Math.floor(Math.random() * 9 + 1).toString();
      console.log(cell);
    } while (document.getElementById(cell).innerHTML != "o");
    document.getElementById(cell).innerHTML = "";
    numberOfO.pop();
    for (i = 0; i < positionOfO.length; i++) {
      if (cell == positionOfO[i]) {
        positionOfO.splice(i, 1);
      }
    }

    do {
      cell = "cell" + Math.floor(Math.random() * 9 + 1).toString();
      console.log(cell);
    } while (
      document.getElementById(cell).innerHTML == "x" ||
      document.getElementById(cell).innerHTML == "o"
    );
    document.getElementById(cell).innerHTML = "o";
    numberOfO.push("o");
  }
}

//LETS PLAY BUTTON
let player1Name;
let player2Name;

document.getElementById("letsPlay").addEventListener("click", function () {
  player1Name = player1.value;
  player2Name = player2.value;
  console.log(player1Name);
  console.log(player2Name);
  document.getElementById("modeSelector").classList.remove("visible");
  buttonPress.play();
  if (playMode == "human") {
    humanPlay();
  } else if (playMode == "cpu") {
    CPUlevel1();
  }
  let cells = document.getElementsByClassName("game-table-cell");
  for (let cell of cells) {
    cell.classList.add("started-cell");
  }
  document.getElementById("game-table-container").classList.add("started");
  document.getElementById("logo").classList.add("no-display");
  document.querySelector(".game-info-description").classList.add("no-display");
  document
    .querySelector(".game-info-description-live")
    .classList.remove("no-display");
  document.getElementById("game-info-live").innerHTML = `<h3>P1 :</h3>
  <div class="player-name-container selected" id="player1Container">
  <h3>${player1Name}</h3>
               
                        
         
                  </div>
                  <h3>P2 : </h3>
                  <div class="player-name-container " id="player2Container">
                  <h3>${player2Name}</h3>
                  
                        
             
                  </div>

                 </div>`;
});

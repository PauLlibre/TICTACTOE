var value = "";
let numberOfX = [];
let numberOfO = [];
let round = 1;
let player1win = ["x", "x", "x"];
// CONTENIDO DE DENTRO LA CELDAS

// RELLENAR LA TABLA

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
          victory();
        } else if (round % 2 == 0) {
          if (round % 2 == 0) {
            document.getElementById(cell).innerHTML = "o";
            numberOfO.push(document.getElementById(cell).innerHTML);
            console.log(numberOfO);
            round++;
            console.log(round);
            victory();
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

// COMPROBAR VICOTRIA

function victory() {
  let win = {
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
  console.log(win.verticalRowA);
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
    console.log("Player 1 wins");
    console.log(`Esto es vertical Row A ${win.verticalRowA}`);
    console.log(`Esto es vertical Row B ${win.verticalRowB}`);
    console.log(`Esto es vertical Row C ${win.verticalRowC}`);
    document.getElementById("winningScreen").classList.add("visible");
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
    console.log("Player 2 wins");
    console.log(`Esto es vertical Row A ${win.horizontalRowA}`);
    console.log(`Esto es vertical Row B ${win.horizontalRowB}`);
    console.log(`Esto es vertical Row C ${win.horizontalRowC}`);
  } else {
    console.log("error");
  }

  // for (i = 0; i <= 9; i++) {
  //   let cell = "cell" + i.toString();
  //   console.log(cell);
  // }
}

//MODE SELECTION

//MODE SELECTION TRIGGER

document
  .getElementById("infoPlayButton")
  .addEventListener("click", function () {
    document.getElementById("modeSelector").classList.add("visible");
  });

//MODE SELECTION SCREEN
document
  .getElementById("playerVsPlayer")
  .addEventListener("click", function () {
    document.getElementById("playMode").classList.add("invisible");
    document.getElementById("playerNaming").classList.add("appear");
  });

//PLAY AGAIN

//PLAY AGAIN BUTTON

document.getElementById("playAgain").addEventListener("click", function () {
  document.getElementById("winningScreen").classList.remove("visible");
  cleanTable();
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
for (i = 1; i < 4; i++) {
  document
    .getElementById("avatar" + i.toString())
    .addEventListener("click", function () {
      document
        .getElementById("avatar" + i.toString())
        .classList.add("selected");
    });
}

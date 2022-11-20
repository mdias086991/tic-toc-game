var vencedor = "";
var games = [];

function choseRow(row) {
  const el = document.getElementById(`row-${row}`)
  var playerOne = document.getElementById('player-1');
  var playerTwo = document.getElementById('player-2');


  if (playerOne.classList.contains('active')) {
    playerTwo.classList.remove('active')
    el.style.background = 'url("./images/1.jpg")'
    playerOne.classList.remove('active');
    el.style.backgroundSize = 'cover';
  } else {
    playerTwo.classList.add('active')
    el.style.background = 'url("./images/2.jpg")'
    el.style.backgroundSize = 'cover';
    playerOne.classList.add('active')
  }

  verificaFimDeJogo();
}

function verificaCasasIguais(a, b, c) {
  var casa1 = document.getElementById(`row-${a}`);
  var casa2 = document.getElementById(`row-${b}`);
  var casa3 = document.getElementById(`row-${c}`);
  var chosedA = casa1.style.background;
  var chosedB = casa2.style.background;
  var chosedC = casa3.style.background;
  if ((chosedA == chosedB) && (chosedB == chosedC) && (chosedA != 'none' && chosedB != "")) {
    if (chosedA.indexOf('./images/1.jpg') >= 0) {
      vencedor = "1";
    } else {
      vencedor = "2";
    }
    return true
  } else {
    return false
  }
}

function verificaFimDeJogo() {
  if (
    verificaCasasIguais('1', '2', '3')
    || verificaCasasIguais('4', '5', '6')
    || verificaCasasIguais('7', '8', '9')
    || verificaCasasIguais('1', '4', '7')
    || verificaCasasIguais('2', '5', '8')
    || verificaCasasIguais('3', '6', '9')
    || verificaCasasIguais('1', '5', '9')
    || verificaCasasIguais('7', '5', '3')
  ) {
    const winnerPoint = document.createElement('div')
    const losePoint = document.createElement('div')
    winnerPoint.classList.add('point')
    winnerPoint.classList.add('winner')
    losePoint.classList.add('point')
    losePoint.classList.add('lose')
    var playerOne = document.getElementById('player-1');
    var playerTwo = document.getElementById('player-2');

    if (vencedor === '1') {
      playerOne.appendChild(winnerPoint);
      playerTwo.appendChild(losePoint);
      games.push({
        win: '1',
        lose: '2'
      })
      window.localStorage.setItem('games', [{
        win: 'playerOne',
        lose: 'playerTow'
      }])
    } else {
      games.push({
        win: '2',
        lose: '1'
      })
      playerOne.appendChild(losePoint);
      playerTwo.appendChild(winnerPoint);
    }
    document.getElementById('resultado').innerHTML = `Jogador ${vencedor} ganhou`;
    window.localStorage.setItem('gamesHistory', JSON.stringify(games))
    setTimeout(() => {
      limparTabuleiro();
    }, 5000)
    estatisticasDoJogo();
  } else {
    var count = 0
    console.log('Falhou', count);
    count++;
  }
}

function limparTabuleiro() {
  const boardGame = document.getElementsByClassName('row')
  for (let i = 0; i < boardGame.length; i++) {
    boardGame[i].style.background = 'none';
  }
}

function estatisticasDoJogo() {
  const gamesStatistcs = JSON.parse(window.localStorage.getItem('gamesHistory'));
  const playerLose = [];
  const playerWin = [];
  gamesStatistcs.forEach(element => {
    console.log(element.win)
    if (element.win == 1) {
      playerWin.push('win')
      document.getElementById('percentWinnerPlayerOne').innerHTML = `${(playerWin.length * 100 / gamesStatistcs.length)} %`;
    } else if (element.win == 2) {
      document.getElementById('percentWinnerPlayerTwo').innerHTML = `${(playerWin.length * 100 / gamesStatistcs.length)} %`;

    }
  });

  console.log(gamesStatistcs);
}


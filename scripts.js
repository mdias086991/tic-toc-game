var vencedor = "";

function choseRow(row) {
  const el = document.getElementById(`row-${row}`)
  const playerOne = document.getElementById('player-1');
  const playerTwo = document.getElementById('player-2');

  
  if(playerOne.classList.contains('active')) {
    playerTwo.classList.remove('active')
    el.style.background = 'url("./images/1.jpg")'
    playerOne.classList.remove('active');
    el.style.backgroundSize = 'cover';
    verificaFimDeJogo();
  } else {
    playerTwo.classList.add('active')
    el.style.background = 'url("./images/2.jpg")'
    el.style.backgroundSize = 'cover';
    playerOne.classList.add('active')
    verificaFimDeJogo();
  }


}

function verificaCasasIguais(a, b, c) {
  var casa1 = document.getElementById(`row-${a}`);
  var casa2 = document.getElementById(`row-${b}`);
  var casa3 = document.getElementById(`row-${c}`);
  var chosedA = casa1.style.background;
  var chosedB = casa2.style.background;
  var chosedC = casa3.style.background;
  if( (chosedA == chosedB) && (chosedB == chosedC) && (chosedA != 'none' && chosedB != "") ){
    if(chosedA.indexOf('./images/1.jpg') >= 0) {
      vencedor = "1";
    } else {
      console.log('Aqui')
      vencedor = "2";
    }
    return true
  } else {
    return false
  }
}

function verificaFimDeJogo() {
  if(
    verificaCasasIguais('1','2','3')
    || verificaCasasIguais('4','5','6')
    || verificaCasasIguais('7','8','9')
    || verificaCasasIguais('1','4','7')
    || verificaCasasIguais('2','5','8')
    || verificaCasasIguais('3','6','9')
    || verificaCasasIguais('1','5','9')
    || verificaCasasIguais('7','5','3')
    ) {
      document.getElementById('resultado').innerHTML = `Jogador ${vencedor} ganhou`
    } else {
      var count = 0
      console.log('Falhou', count);
      count++;
    }
}


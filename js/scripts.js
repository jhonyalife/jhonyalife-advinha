
function principal() {
  let resposta = document.getElementById("teste")
  let valor = resposta.value;
  let botao = document.getElementById("button")
  let tit = document.getElementById("titulo")
  let teste = comparar(valor, gerarNumer)


    if(valor > 20 || valor < 1){
      tit.innerHTML = "Você digitou um número invalido, tente novamente apertando F5"
      resposta.style.visibility = "hidden"
      botao.style.visibility = "hidden"
    } else{
      switch (teste) {

        case -1:
          tit.innerHTML = "Digite um número maior"
          break;
    
        case 0:
          tit.innerHTML = "Parabéns, você acertou! Aperte F5 para reiniciar"
          resposta.style.visibility = "hidden"
          botao.style.visibility = "hidden"
          valor
          break;
    
        case 1:
          tit.innerHTML = "Digite um número menor"
          break;
    
      }
    }
}

function gerarNumero() {
  return Math.floor(Math.random() * 20 + 1);
}

let gerarNumer = gerarNumero();


function comparar(valor, gerarNumer) {
  if (valor < gerarNumer) {
    return -1;
  } else if (valor == gerarNumer) {
    return 0;
  } else if (valor > gerarNumer) {
    return 1;
  }
}




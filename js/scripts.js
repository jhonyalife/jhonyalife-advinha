
function principal() {

  let resposta = document.getElementById("resp")
  let valor = resposta.value;
  let botao = document.getElementById("button")
  let tit = document.getElementById("titulo")
  let comp = comparar(valor, gerarNumer)


    if(valor > 30 || valor < 1){
      tit.innerHTML = "Você digitou um número invalido! Reinicie a página para começar novamente"
      resposta.style.visibility = "hidden"
      botao.style.visibility = "hidden"
    } else{
      switch (comp) {

        case -1:
          tit.innerHTML = `Digite um número maior que ${valor}:`
          break;
    
        case 0:
          tit.innerHTML = "Parabéns, você acertou! Reinicie a página para começar novamente"
          resposta.style.visibility = "hidden"
          botao.style.visibility = "hidden"
          valor
          break;
    
        case 1:
          tit.innerHTML = `Digite um número menor que ${valor}:`
          break;
    
      }
    }
}

function gerarNumero() {
  return Math.floor(Math.random() * 31 + 1);
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




/* Função principal */

function principal() {

  let response = document.getElementById("resp");
  let valor = response.value;
  let btnSend = document.getElementById("button");
  let tit = document.getElementById("titulo");
  let comp = comparar(valor, gerarNumer);
  let mensagem = document.getElementById("mensagem");

  if (valor > 30 || valor < 1) {
    mensagem.innerHTML = "Você digitou um número invalido! Tente Novamente";
  } else {
    switch (comp) {
      case -1:
        mensagem.innerHTML = `Digite um número maior que ${valor}:`;
        break;

      case 0:
        tit.innerHTML =
          "Parabéns, você acertou! Reinicie a página para começar novamente";
        response.style.visibility = "hidden";
        btnSend.style.visibility = "hidden";
        mensagem.style.visibility = "hidden";
        valor;
        break;

      case 1:
        mensagem.innerHTML = `Digite um número menor que ${valor}:`;
        break;
    }
  }
}


/* Função responsável por gerar o número */

function gerarNumero() {
  return Math.floor(Math.random() * 31 + 1);
}

/* Instânciando a variável */
let gerarNumer = gerarNumero();


/* Função que realiza a comparação */
function comparar(valor, gerarNumer) {
  if (valor < gerarNumer) {
    return -1;
  } else if (valor == gerarNumer) {
    return 0;
  } else if (valor > gerarNumer) {
    return 1;
  }
}

function inserir(num) {
    // O sinal de += é para conseguir colocar os numeros do lado do outro.
    document.querySelector('.tela').innerHTML += num;
}

function clean() {
    // Essa função serve para limpar os numeros da calculadora.!
    document.querySelector(".tela").innerHTML = "";
}

function back() {
    let tela = document.querySelector('.tela').innerHTML;
    // Essa função serve para apagar os numeros de cada vez.!
    document.querySelector('.tela').innerHTML = tela. substring(
        0, 
        tela.length - 1
        );
}

function somar() {
    let tela = document.querySelector('.tela').innerHTML;
    document.querySelector('.tela').innerHTML = eval(tela);
    if(tela) {
        document.querySelector('.tela').innerHTML = eval(tela);
    }else {
        document.querySelector('.tela').innerHTML = "nenhum comando";

    }
}

// Função para atualizar o histórico exibido na página
function atualizarHistorico() {
    historyList.innerHTML = '';
    historico.forEach(function (item) {
        var li = document.createElement('');
        li.textContent = item.expressao + ' = ' + item.resultado;
        historyList.appendChild(li);
    });
}
  
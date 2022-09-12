var jogadores = [
  {
    nome: "Rafa",
    vitorias: 2,
    empates: 1,
    derrotas: 1,
    pontos: 0
  },
  {
    nome: "Paulo",
    vitorias: 1,
    empates: 1,
    derrotas: 2,
    pontos: 0
  }
];

calculaPontos(jogadores[0]);
calculaPontos(jogadores[1]);
exibeJogadoresNaTela(jogadores);

function calculaPontos(jogador) {
  jogador.pontos = jogador.vitorias * 3 + jogador.empates;
}

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";

  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }

  document.getElementById("tabelaJogadores").innerHTML = elemento;
}

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;

  for (var j = 0; j < jogadores.length; j++) {
    if (j != i) {
      jogadores[j].derrotas++;
    }
  }

  calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  for (var j = 0; j < jogadores.length; j++) {
    jogadores[j].empates++;
    calculaPontos(jogadores[j]);
  }

  exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;

  for (var j = 0; j < jogadores.length; j++) {
    if (j != i) {
      jogadores[j].vitorias++;
      calculaPontos(jogadores[j]);
    }
  }

  exibeJogadoresNaTela(jogadores);
}
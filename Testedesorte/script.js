function sortear() {
  const texto = document.getElementById("lista").value;

  let opcoes = texto
    .split("\n")
    .map(op => op.trim())
    .filter(op => op !== "");

  if (opcoes.length === 0) {
    alert("Digite pelo menos uma opção!");
    return;
  }

  const indice = Math.floor(Math.random() * opcoes.length);
  const escolhido = opcoes[indice];

  const porcentagem = (100 / opcoes.length).toFixed(1);

  document.getElementById("info").innerText =
    `Cada opção tem ${porcentagem}% de chance`;

  document.getElementById("resultado").innerText =
    "Resultado: " + escolhido;
}
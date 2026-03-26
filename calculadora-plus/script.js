document.getElementById("btnConverter").addEventListener("click", converter);

function converter() {
  let valor = Number(document.getElementById("valor").value);
  let tipo = document.getElementById("tipo").value;

  let resultado;

  if (isNaN(valor)) {
    document.getElementById("resultado").innerText = "Digite um valor válido";
    return;
  }

  switch (tipo) {
    case "c-f":
      resultado = (valor * 9/5) + 32;
      break;

    case "f-c":
      resultado = (valor - 32) * 5/9;
      break;

    default:
      document.getElementById("resultado").innerText = "Erro na conversão";
      return;
  }

  document.getElementById("resultado").innerText = "Resultado: " + resultado.toFixed(2);
}
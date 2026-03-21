document.getElementById("btnCalcular").addEventListener("click", calcular);

function calcular() {
  let v1 = Number(document.getElementById("valor1").value);
  let v2 = Number(document.getElementById("valor2").value);
  let op = document.getElementById("operacao").value;

  let resultado;

  if (op === "soma") {
    resultado = v1 + v2;
  } else if (op === "Subtrair") {
    resultado = v1 - v2;
  }

  document.getElementById("resultado").innerText = "Resultado: " + resultado;
}
document.getElementById("btnCalcular").addEventListener("click", calcular);

function calcular() {
  let v1 = Number(document.getElementById("valor1").value);
  let v2 = Number(document.getElementById("valor2").value);
  let op = document.getElementById("operacao").value;

  let resultado;
switch (op) {
  case "soma":
  resultado = v1 + v2;
  break;
 
  case "subtrair":
   resultado = v1 - v2;
   break;
  
   case "multiplicar":
    resultado = v1 * v2;
    break;
     
    case "dividir":
      if (v2 === 0) {
        document.getElementById("resultado").innerText = "Não é possivel dividir por 0";
        return;
      }
      resultado = v1 / v2;
      break;

      default:
        document.getElementById("resultado").innerText = "Operação inválida";
        return;
    }

  document.getElementById("resultado").innerText = "Resultado: " + resultado;
}
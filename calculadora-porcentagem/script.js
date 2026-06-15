function calcular() {
    let percentual = Number(document.getElementById("percentual").value);
    let valor = Number(document.getElementById("valor").value);

    let resultado = (percentual * valor) / 100;

    document.getElementById("resultado").textContent =
        `${percentual}% de ${valor} é ${resultado}`;
}
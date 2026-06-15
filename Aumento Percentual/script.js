function calcularAumento() {
    let valor = Number(document.getElementById("valorAumento").value);
    let percentual = Number(document.getElementById("percentualAumento").value);

    let aumento = (valor * percentual) / 100;
    let novoValor = valor + aumento;

    document.getElementById("resultadoAumento").innerHTML = `
        Valor do aumento: R$ ${aumento.toFixed(2)} <br>
        Novo valor: R$ ${novoValor.toFixed(2)}
    `;
}
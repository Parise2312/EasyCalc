function calcularDesconto() {
    let preco = Number(document.getElementById("preco").value);
    let desconto = Number(document.getElementById("desconto").value);

    let valorDesconto = (preco * desconto) / 100;
    let valorFinal = preco - valorDesconto;

    document.getElementById("resultadoDesconto").innerHTML = `
        Valor do desconto: R$ ${valorDesconto.toFixed(2)} <br>
        Valor final: R$ ${valorFinal.toFixed(2)}
    `;
}
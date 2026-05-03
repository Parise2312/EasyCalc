let mensagens = JSON.parse(localStorage.getItem("mensagens")) || [];

function salvar() {
  let texto = document.getElementById("mensagem").value;

  if (texto === "") return;

  mensagens.push(texto);
  localStorage.setItem("mensagens", JSON.stringify(mensagens));

  document.getElementById("mensagem").value = "";
  mostrar();
}

function mostrar() {
  let lista = document.getElementById("lista");
  lista.innerHTML = "";

  mensagens.forEach((msg, i) => {
    let div = document.createElement("div");
    div.className = "item";

    div.innerHTML = `
      <p>${msg}</p>
      <button onclick="copiar(${i})">Copiar</button>
      <button onclick="remover(${i})">Remover</button>
    `;

    lista.appendChild(div);
  });
}

function copiar(i) {
  navigator.clipboard.writeText(mensagens[i]);
  alert("Copiado!");
}

function remover(i) {
  mensagens.splice(i, 1);
  localStorage.setItem("mensagens", JSON.stringify(mensagens));
  mostrar();
}

// carregar ao abrir
mostrar();
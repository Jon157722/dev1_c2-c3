const ulSquares = document.querySelector("ul.squares");

for (let i = 0; i < 11; i++) {
  const li = document.createElement("li");

  const random = (min, max) => Math.random() * (max - min) + min;

  const size = Math.floor(random(10, 120));
  const position = random(1, 99);
  const delay = random(5, 0.1);
  const duration = random(24, 12);

  li.style.width = `${size}px`;
  li.style.height = `${size}px`;
  li.style.bottom = `-${size}px`;

  li.style.left = `${position}%`;

  li.style.animationDelay = `${delay}s`;
  li.style.animationDuration = `${duration}s`;
  li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;

  ulSquares.appendChild(li);
}
var linha = null
function dados() {
  var formData = {};
  formData["nome"] = document.getElementById("nome").value;
  formData["altura"] = document.getElementById("altura").value;
  formData["peso"] = document.getElementById("peso").value;
  formData["endereco"] = document.getElementById("endereco").value;
  formData["telefone"] = document.getElementById("telefone").value;
  formData["saude"] = document.getElementById("saude").value;

  adicionarPessoa(formData);
}
function adicionarPessoa(data) {
  var table = document.getElementById("tabela").getElementsByTagName('tbody')[0];
  var tabela = table.insertRow(table.length);

  nomePessoa = tabela.insertCell(0);
  nomePessoa.innerHTML = data.nome;

  enderecoPessoa = tabela.insertCell(1);
  enderecoPessoa.innerHTML = data.endereco;

  telefonePessoa = tabela.insertCell(2);
  telefonePessoa.innerHTML = data.telefone

  alturaPessoa = tabela.insertCell(3);
  alturaPessoa.innerHTML = data.altura;

  pesoPessoa = tabela.insertCell(4);
  pesoPessoa.innerHTML = data.peso;

  saudePessoa = tabela.insertCell(5);
  saudePessoa.innerHTML = data.saude

  botao = tabela.insertCell(6);
  botao.innerHTML = `<button onClick="excluir(this)" class="btn botao" type="button">Excluir</button>`;
}
function excluir(linha) {
  id = linha.parentElement.parentElement;
  document.getElementById("tabela").deleteRow(id.rowIndex);
  anularVariaveis();
}

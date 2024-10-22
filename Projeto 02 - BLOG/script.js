// Seleciona o elemento body do documento
const body = document.querySelector("body");

// Seleciona os ícones de menu (abrir e fechar)
const menu = [document.querySelector("#icon-menu"), document.querySelector("#close-menu")];

// Seleciona o container do botão de modo escuro
const darkmode_btn = document.querySelector("#darkmode-container");

// Função para adicionar ou remover a classe "dark" do body
function addDarkmode() {
  body.classList.toggle("dark"); // Alterna a classe "dark"
}

// Carrega o tema ao iniciar
function loadTheme() {
  const darkmode = localStorage.getItem("dark"); // Verifica se há a chave "dark" no localStorage
  if (darkmode) // Se a chave existir
    addDarkmode(); // Adiciona a classe "dark"
}

// Chama a função para carregar o tema ao iniciar
loadTheme();

// Adiciona um listener de evento para o botão de modo escuro
darkmode_btn.addEventListener("click", () => {
  addDarkmode(); // Alterna o modo escuro
  // Salva ou remove o modo escuro do localStorage
  localStorage.removeItem("dark"); // Remove a chave "dark"
  if (body.classList.contains("dark")) // Se o body contém a classe "dark"
    localStorage.setItem("dark", 1); // Salva a chave "dark" no localStorage
});

// Adiciona listeners de evento para abrir e fechar o menu
menu.map(i => {
  i.addEventListener("click", () => {
    body.classList.toggle("overflow"); // Alterna a classe "overflow" para controlar a rolagem
    document.querySelector("#navbar-inner").classList.toggle("show"); // Alterna a classe "show" no menu
  });
});

// 
//     Aluno: Wanessa Brito Ramalho
//     RU: 4916022     

// Função para mostrar o botão "Voltar ao topo" quando o usuário rola a página
window.addEventListener("scroll", () => {
    const backToTopButton = document.getElementById("back-to-top"); // Obtém o botão "Voltar ao topo"
    
    // Verifica se a rolagem da página (scrollY) é maior que 300 pixels
    if (window.scrollY > 300) {
        // Se sim, exibe o botão configurando seu estilo para "flex"
        backToTopButton.style.display = "flex";
    } else {
        // Caso contrário, esconde o botão
        backToTopButton.style.display = "none";
    }
});

// Menu responsivo
const menuIcon = document.getElementById("menu-icon"); // Obtém o ícone do menu (ex: três barras horizontais)
const navb = document.querySelector(".navb"); // Obtém o menu de navegação

// Adiciona um evento de clique no ícone do menu
menuIcon.addEventListener("click", () => {
    // Adiciona ou remove a classe "active" no menu de navegação quando o ícone for clicado
    navb.classList.toggle("active");
});

// Loader da página
window.addEventListener("load", () => {
    const loader = document.getElementById("loader"); // Obtém o elemento de carregamento (loader)
    
    // Define um atraso de 1500 milissegundos (1,5 segundos) para esconder o loader
    setTimeout(() => {
        loader.style.display = "none"; // Após o tempo, esconde o loader
    }, 1500);
});


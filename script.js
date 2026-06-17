// script.js

// 1. Interatividade no formulário de contato
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede que a página recarregue
    
    const nome = document.querySelector('input[type="text"]').value;
    alert(`Obrigado, ${nome}! Sua mensagem sobre o futuro do agro foi enviada com sucesso.`);
    
    // Limpa o formulário após o envio
    this.reset();
});

// 2. Efeito simples de console ao carregar a página
window.onload = () => {
    console.log("Bem-vindo ao site Agro Forte, Futuro Sustentável!");
};

// 3. Adicionar um efeito de "fade-in" nos cards ao rolar a página
const cards = document.querySelectorAll('.card');
window.addEventListener('scroll', () => {
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < window.innerHeight - 100) {
            card.style.opacity = "1";
            card.style.transition = "opacity 0.8s";
        } else {
            card.style.opacity = "0";
        }
    });
});

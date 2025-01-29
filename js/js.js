let currentIndex = 0;

function moveCarousel(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    // Calculando o novo índice
    currentIndex = (currentIndex + direction + totalItems) % totalItems;

    // Atualizando a posição do carrossel
    const newTransformValue = -currentIndex * 100 + '%';
    document.querySelector('.carousel-inner').style.transform = `translateX(${newTransformValue})`;
}

// Função para abrir o pop-up
const openPopupBtn = document.getElementById('openPopupBtn');
const popup = document.getElementById('popup');
const closePopupBtn = document.getElementById('closePopupBtn');

// Abrir o pop-up
openPopupBtn.addEventListener('click', () => {
  popup.style.display = 'flex';
});

// Fechar o pop-up
closePopupBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Fechar o pop-up ao clicar fora da área de conteúdo
window.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});



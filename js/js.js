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

const popup = document.getElementById('popup');
const closePopupBtn = document.getElementById('closePopupBtn');
const popupImg = document.getElementById('popupImg');
const popupTitle = document.getElementById('popupTitle');
const popupDescription = document.getElementById('popupDescription');
const popupPrice = document.getElementById('popupPrice');

// Abrir o pop-up para qualquer botão
document.querySelectorAll('.openPopupBtn').forEach(button => {
    button.addEventListener('click', (event) => {
        // Pega os dados específicos de cada botão
        const imgSrc = button.getAttribute('data-img');
        const title = button.getAttribute('data-title');
        const description = button.getAttribute('data-description');
        const price = button.getAttribute('data-price');
        
        // Atualiza o conteúdo do modal
        popupImg.src = imgSrc;
        popupTitle.textContent = title;
        popupDescription.textContent = description;
        popupPrice.textContent = `Preço: ${price}`;
        
        // Exibe o modal
        popup.style.display = 'flex';
    });
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



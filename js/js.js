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




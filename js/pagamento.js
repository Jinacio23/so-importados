document.getElementById('formaPagamento').addEventListener('change', function() {
    var formaPagamento = this.value;
    var parcelasSection = document.getElementById('parcelasSection');
    
    if (formaPagamento === 'cartao') {
        parcelasSection.style.display = 'block';
    } else {
        parcelasSection.style.display = 'none';
    }
});

function finalizarCompra() {
    localStorage.setItem("fim", true);
    window.location.href = '../index.html';
}

function recuperarValorTotal() {
    let valor = parseFloat(localStorage.getItem("totalValue")) || 0;
    const textConteiner = document.getElementById("valorTotal");
    const totalConteiner = document.getElementById("Total");

    textConteiner.textContent = `R$ ${valor.toFixed(2).replace(".", ",")}`;
    valor = valor + 11.99;
    totalConteiner.textContent = `R$ ${valor.toFixed(2).replace(".", ",")}`;
}

window.onload = recuperarValorTotal;
document.getElementById('formaPagamento').addEventListener('change', function() {
    var formaPagamento = this.value;
    var parcelasSection = document.getElementById('parcelasSection');
    
    if (formaPagamento === 'cartao') {
        parcelasSection.style.display = 'block';
    } else {
        parcelasSection.style.display = 'none';
    }
});

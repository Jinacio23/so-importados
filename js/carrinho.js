// Função para carregar os dados do localStorage e preencher a tabela
function carregarCarrinho() {
    // Recupera a array de produtos do localStorage
    const carrinho = JSON.parse(localStorage.getItem("Produtos")) || [];
    const tbody = document.querySelector("#carrinhoTable tbody");
    const totalValue = document.getElementById("totalValue");

    // Limpa o conteúdo atual da tabela
    tbody.innerHTML = "";

    let total = 0;

    // Preenche a tabela com os produtos do carrinho
    carrinho.forEach(produto => {
        const row = document.createElement("tr");

        // Coluna do nome do produto
        const cellProduto = document.createElement("td");
        cellProduto.textContent = produto.nome;
        row.appendChild(cellProduto);

        // Coluna do preço do produto
        const cellPreco = document.createElement("td");
        cellPreco.textContent = `R$ ${produto.preco.toFixed(2).replace(".", ",")}`;
        row.appendChild(cellPreco);

        // Adiciona a linha à tabela
        tbody.appendChild(row);

        // Soma ao total
        total += produto.preco;
    });

    // Atualiza o valor total
    totalValue.textContent = `R$ ${total.toFixed(2).replace(".", ",")}`;
    if(localStorage.getItem("totalValue")){
        localStorage.setItem("totalValue", total);
    }
}

// Função para limpar o carrinho
function limparCarrinho() {
    localStorage.removeItem("Produtos"); // Remove a array de produtos
    carregarCarrinho(); // Recarrega a tabela para refletir a remoção
    alert("Carrinho limpo com sucesso!");
}

// Carrega o carrinho ao carregar a página
window.onload = carregarCarrinho;
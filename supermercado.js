var itens = [];

document.querySelector('input[type=submit]')
  .addEventListener('click', () => {
		var nomeProduto = document.querySelector('input[name=nome_produto').value;
		var precoProduto = document.querySelector('input[name=valor_produto').value;

		itens.push({
			nome: nomeProduto,
			valor: precoProduto
		});
		alert(itens[0].nome);
	});

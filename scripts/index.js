"use strict";
const blusas = [
    { nome: 'conjunto basico', marca: "Lacoste", cor: "branco", tamanho: 'G', img: "./1.jpg", preco: 23 },
    { nome: 'blusa leve simples', marca: "Shein", cor: "cinza", tamanho: 'P', img: "./2.png", preco: 52 },
    { nome: 'shorts Pijama', marca: "Lacoste", cor: "cinza", tamanho: 'G', img: "./3.png", preco: 100 },
    { nome: 'blusa Leve', marca: "Shein", cor: "azul", tamanho: 'G', img: "./4.png", preco: 99 },
    { nome: 'vestido', marca: "Lacoste", cor: "preto", tamanho: 'P', img: "./5.png", preco: 68.6 },
    { nome: 'bermuda', marca: "Shein", cor: "rosa", tamanho: 'G', img: "./6.png", preco: 90.99 },
];
const rootElement = document.querySelector("#root");
const pesquisa = document.querySelector('#input-pesquisar');
const marca = document.querySelector("#marca");
const cor = document.querySelector("#cor");
const tamanho = document.querySelector("#tamanho");
const button = document.querySelector('#botao');
function render(itens) {
    if (rootElement) {
        rootElement.innerHTML = "";
        itens.forEach((item, index) => {
            if (((marca === null || marca === void 0 ? void 0 : marca.value) == item.marca || (marca === null || marca === void 0 ? void 0 : marca.value) == 'todos') &&
                ((cor === null || cor === void 0 ? void 0 : cor.value) == item.cor || (cor === null || cor === void 0 ? void 0 : cor.value) == 'todos') &&
                ((tamanho === null || tamanho === void 0 ? void 0 : tamanho.value) == item.tamanho || (tamanho === null || tamanho === void 0 ? void 0 : tamanho.value) == 'todos') &&
                (item.nome.includes(pesquisa.value.toLowerCase()) || (pesquisa === null || pesquisa === void 0 ? void 0 : pesquisa.value) == '')) {
                rootElement.innerHTML += `
    <div class="item-wrapper">
      <img class='imagem' id=${index} src=${item.img}>
      <div class='nome'> ${item.nome}</div>
      <div class="container">
      <div class="info">
      <div class='marca'>Marca: ${item.marca}</div>
      <div class='cor'> ${item.cor}</div>
      <div class='tamanho'>Tamanho ${item.tamanho}</div> 
      </div>  
      <div class='preco'> ${item.preco.toFixed(2)}R$</div>
      </div>
    </div>
  `;
            }
        });
        if (rootElement.innerHTML == "") {
            rootElement.innerHTML = 'Nenhum item encontrado';
            rootElement.style.paddingTop = '40vh';
        }
    }
}
function eventListenerHandle() {
    button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
        render(blusas);
    });
}
eventListenerHandle();
render(blusas);

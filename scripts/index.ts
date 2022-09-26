type Blusa = { nome: string; marca: string; cor:string; tamanho: string; img: string ;preco:number};

const blusas = [
  { nome: 'conjunto basico', marca: "Lacoste", cor: "branco", tamanho: 'G', img: "./1.jpg" ,preco:23},
  { nome: 'blusa leve simples', marca: "Shein", cor: "cinza", tamanho: 'P', img: "./2.png" ,preco:52},
  { nome: 'shorts Pijama', marca: "Lacoste", cor: "cinza", tamanho: 'G', img: "./3.png" ,preco:100},
  { nome: 'blusa leve', marca: "Shein", cor: "azul", tamanho: 'G', img: "./4.png" ,preco:99},
  { nome: 'vestido', marca: "Lacoste", cor: "preto", tamanho: 'P', img: "./5.png" ,preco:68.6},
  { nome: 'bermuda', marca: "Shein", cor: "rosa", tamanho: 'G', img: "./6.png", preco:90.99},
];

const rootElement : HTMLDivElement | null = document.querySelector("#root");
const pesquisa : HTMLInputElement | null = document.querySelector('#input-pesquisar')
const marca  : HTMLInputElement | null= document.querySelector("#marca");
const cor : HTMLInputElement | null = document.querySelector("#cor");
const tamanho : HTMLInputElement | null= document.querySelector("#tamanho");
const button : HTMLDivElement | null= document.querySelector('#botao');

function render(itens: Array<Blusa>) {
  if (rootElement) {
      rootElement.innerHTML = "";
      itens.forEach((item: Blusa , index: number) => {

          if (
              (marca?.value == item.marca || marca?.value == 'todos') &&
              (cor?.value == item.cor || cor?.value == 'todos') &&
              (tamanho?.value == item.tamanho || tamanho?.value == 'todos') &&
              (item.nome.includes(pesquisa!.value.toLowerCase()) || pesquisa?.value == '')) {

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
  button?.addEventListener('click', () => {render(blusas);
  })
}

eventListenerHandle();
render(blusas);

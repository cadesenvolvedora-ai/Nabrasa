
let carrinho = [];

document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('.box').forEach(box => {

    let qty = 0;

    const minus = box.querySelector('.minus');
    const plus = box.querySelector('.plus');
    const value = box.querySelector('.qty-value');

    // valor inicial
    box.dataset.qty = 0;

    if (value) value.textContent = 0;

    function atualizarBox() {
      if (value) value.textContent = qty;
      box.dataset.qty = qty;
    }

    if (minus) {
      minus.addEventListener('click', () => {
        if (qty > 0) {
          qty--;
          atualizarBox();
        }
      });
    }

    if (plus) {
      plus.addEventListener('click', () => {
        qty++;
        atualizarBox();
      });
    }

  });

});


function toggleCart() {
  document.getElementById('cartDrawer').classList.toggle('open');
}

document.querySelectorAll('.box .add-cart').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();

    const box = btn.closest('.box');

    const titulo = box.querySelector('.carousel-title').innerText;
    const nome = box.querySelector('.carousel-subtitle').innerText;
    const preco = box.querySelector('.carousel-price').innerText;
    const quantidadeSelecionada = Number(box.dataset.qty);

    const quantidade = Number(box.dataset.qty);

    const itemExistente = carrinho.find(
  item => item.titulo === titulo && item.nome === nome
);

if (itemExistente) {
  itemExistente.quantidade += quantidadeSelecionada;
} else {
  carrinho.push({
    titulo,
    nome,
    preco,
    quantidade: quantidadeSelecionada
  });
}


atualizarCarrinho();
  });
});


function atualizarCarrinho() {
  
  
  const area = document.getElementById('cartItems');
  const valorTotal = document.getElementById('valorTotal');

  area.innerHTML = '';

  let totalCarrinho = 0;

  carrinho.forEach((item, index) => {

    // converte "R$: 30,00" → 30.00
    const valorUnitario = parseFloat(
      item.preco
        .replace('R$', '')
        .replace(':', '')
        .replace('.', '')
        .replace(',', '.')
    );

    const subtotal = valorUnitario * item.quantidade;

    // soma no total do carrinho
    totalCarrinho += subtotal;

    area.innerHTML += `
      <div class="cart-item">
        <div class="cart-info">
          <span class="cart-title">${item.titulo}</span>

          <div class="cart-line">
            <span class="cart-name">${item.nome}</span>

            <span class="cart-qty">
              Qtd: <strong>${item.quantidade}</strong>
              <button class="cart-remove" onclick="removerItem(${index})">✕</button>
            </span>
          </div>

          <div class="cart-subtotal">
            Preço:
            <strong>R$ ${subtotal.toFixed(2).replace('.', ',')}</strong>
          </div>
        </div>
      </div>
    `;
  });

  // atualiza contador do carrinho
  document.getElementById('cartCount').innerText =
    carrinho.reduce((total, item) => total + item.quantidade, 0);

  // mostra total geral
  let taxa = totalCarrinho * taxaVale;
let totalFinal = totalCarrinho + taxa;

let texto = "R$ " + totalFinal.toFixed(2).replace('.', ',');

if(taxaVale > 0){
  texto += " (inclui taxa 10%)";
}

valorTotal.innerText = texto;
}
  function removerItem(index) {
  carrinho.splice(index, 1);
  atualizarCarrinho();
}

function enviarPedido() {
  const nome = clienteNome.value;
  const endereco = clienteEndereco.value;
  const pagamento = formaPagamento;


 if (!nome || !endereco || !pagamento || carrinho.length === 0) {
  alert('Preencha os dados e adicione itens');
  return;
}


  let texto = `*Pedido*%0A`;
  texto += `Nome: ${nome}%0A`;
  texto += `Endereço: ${endereco}%0A`;
  texto += `Pagamento: ${pagamento}%0A%0A`;

  if (pagamento === 'Dinheiro' && valorTroco) {
  texto += `Troco para: R$ ${valorTroco}%0A`;
  }

  texto +=`%0a`;
  
  carrinho.forEach(i => {
  texto += `• ${i.titulo} - ${i.nome}`;
  texto += ` | Qtd: ${i.quantidade}`;
  texto += ` | ${i.preco}%0A`;
});

  window.open(`https://wa.me/5538999980672?text=${texto}`, '_blank');
}
document.querySelectorAll('.carousel').forEach(carousel => {

  const images = carousel.querySelectorAll('.carousel-img');
  const dotsContainer = carousel.querySelector('.carousel-dots');

  const detailBox = carousel.closest('.box');
  const boxTitle = detailBox.dataset.title;

  const titleEl = detailBox.querySelector('.carousel-title');
  const subtitleEl = detailBox.querySelector('.carousel-subtitle');
  const descEl = detailBox.querySelector('.carousel-desc');
  const priceEl = detailBox.querySelector('.carousel-price');

  let currentIndex = 0;

  /* ========= CRIA DOTS AUTOMATICAMENTE ========= */

  images.forEach((_, index) => {

    const dot = document.createElement('span');
    dot.classList.add('dot');

    if(index === 0)
      dot.classList.add('active');

    dot.addEventListener('click', () => {
      updateCarousel(index);
    });

    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll('.dot');

  /* ========= UPDATE ========= */

  function updateCarousel(index){

    images.forEach(img =>
      img.classList.remove('active'));

    dots.forEach(dot =>
      dot.classList.remove('active'));

    images[index].classList.add('active');
    dots[index].classList.add('active');

    titleEl.textContent = boxTitle;
    subtitleEl.textContent =
      images[index].dataset.subtitle;

    descEl.textContent =
      images[index].dataset.desc;

    priceEl.innerHTML =
      `<strong> ${images[index].dataset.price}</strong>`;

    currentIndex = index;
  }



  function nextSlide(){
  let index = (currentIndex + 1) % images.length;
  updateCarousel(index);
}

function prevSlide(){
  let index =
    (currentIndex - 1 + images.length) % images.length;
  updateCarousel(index);
}
 
let startX = 0;
let endX = 0;

carousel.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
});

carousel.addEventListener('touchmove', e => {
  endX = e.touches[0].clientX;
});

carousel.addEventListener('touchend', () => {

  const diff = startX - endX;

  if(Math.abs(diff) > 50){
    diff > 0 ? nextSlide() : prevSlide();
  }

});

  // clique nos dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      updateCarousel(index);
    });
  });

  // inicia
  updateCarousel(0);
});

let formaPagamento = '';
let valorTroco = '';
let taxaVale = 0 ; 

const dropdown = document.querySelector('.dropdown-pagamento');
const btnPagamento = document.getElementById('pagamentoSelecionado');
const trocoArea = document.getElementById('trocoArea');
const trocoInput = document.getElementById('trocoValor');
const valeAviso = document.getElementById('valeAviso');

btnPagamento.addEventListener('click', () => {
  dropdown.classList.toggle('open');
});

dropdown.querySelectorAll('li').forEach(opcao => {
  opcao.addEventListener('click', () => {
    formaPagamento = opcao.dataset.value;
    btnPagamento.textContent = formaPagamento;
    dropdown.classList.remove('open');

    // mostra troco apenas se for dinheiro
    if (formaPagamento === 'Dinheiro') {
      trocoArea.style.display = 'block';
    } else {
      trocoArea.style.display = 'none';
      trocoInput.value = '';
      valorTroco = '';
    }
    if (formaPagamento === 'Pix' || formaPagamento === 'Pix na maquininha') {
      pixAviso.style.display = 'block';
    } else {
      pixAviso.style.display = 'none';
    }
  
    if (formaPagamento === 'Vale Alimentação') {
      valeAviso.style.display = 'block';
      taxaVale = 0.10;
    } else {
      valeAviso.style.display = 'none';
      taxaVale = 0;
    }

    atualizarCarrinho();

  });
});

// captura o valor do troco
trocoInput.addEventListener('input', () => {
  valorTroco = trocoInput.value;
});
const radiosPedido = document.querySelectorAll(
  'input[name="tipoPedido"]'
);

const enderecoArea = document.getElementById("enderecoArea");
const entregaAviso = document.getElementById("entregaAviso");

radiosPedido.forEach(radio => {
  radio.addEventListener("change", () => {

    if (radio.value === "entregar" && radio.checked) {
      enderecoArea.style.display = "block";
      entregaAviso.style.display = "block";   // mostra aviso
    } else {
      enderecoArea.style.display = "none";
      entregaAviso.style.display = "none";    // esconde aviso
    }

  });
});
function abrirMontePrato() {
  document.getElementById("modalPrato").style.display = "flex";
}

function fecharMontePrato() {
  document.getElementById("modalPrato").style.display = "none";
}

function adicionarPrato() {

  let massa = document.querySelector('input[name="massa"]:checked');
  let molho = document.querySelector('input[name="molho"]:checked');

  if (!massa || !molho) {
    alert("Selecione massa e molho!");
    return;
  }

  let adicionais = [];
  let total = 0;

  // pega preço da massa
  const massaPreco = massa.closest('.item-option')
    .querySelector('.preco').innerText;

  total += parseFloat(
    massaPreco.replace('R$', '').replace(',', '.')
  );

  // pega preço do molho
  const molhoPreco = molho.closest('.item-option')
    .querySelector('.preco').innerText;

  total += parseFloat(
    molhoPreco.replace('R$', '').replace(',', '.')
  );

  // adicionais
  document
    .querySelectorAll('#modalPrato input[type="checkbox"]:checked')
    .forEach(item => {

      adicionais.push(item.value);

      const precoTexto = item.closest('.item-option')
        .querySelector('.preco').innerText;

      total += parseFloat(
        precoTexto.replace('R$', '').replace(',', '.')
      );
    });

  // monta descrição
  let descricao = `Massa: ${massa.value} | Molho: ${molho.value}`;

  if (adicionais.length > 0) {
    descricao += ` | Adicionais: ${adicionais.join(', ')}`;
  }

  // adiciona ao carrinho
  carrinho.push({
    titulo: "Monte seu prato",
    nome: descricao,
    preco: `R$ ${total.toFixed(2).replace('.', ',')}`,
    quantidade: 1
  });

  atualizarCarrinho();

  alert("Prato adicionado ao carrinho!");

  fecharMontePrato();

  // limpa seleção
  document.querySelectorAll('#modalPrato input').forEach(input => {
    input.checked = false;
  });
}


// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

function abrirBebidas() {
  document.getElementById("modalBebidas").style.display = "flex";
}

function fecharBebidas() {
  document.getElementById("modalBebidas").style.display = "none";
}

const bebidas = document.querySelectorAll('input[name="bebida"]');
const totalSpan = document.getElementById("totalBebida");

bebidas.forEach(bebida => {
  bebida.addEventListener("change", calcularTotalBebida);
});

function calcularTotalBebida() {
  const selecionada = document.querySelector('input[name="bebida"]:checked');

  if (!selecionada) {
    totalSpan.innerText = "R$ 0,00";
    return;
  }

  let preco = parseFloat(selecionada.dataset.preco) || 0;

  totalSpan.innerText = "R$ " + preco.toFixed(2).replace(".", ",");
}

function adicionarBebida() {
  const selecionada = document.querySelector('input[name="bebida"]:checked');

  if (!selecionada) {
    alert("Selecione uma bebida!");
    return;
  }

  const nome = selecionada.value;
  const preco = parseFloat(selecionada.dataset.preco) || 0;

  
  alert(`Bebida adicionada:\n${nome}\nValor: R$ ${preco.toFixed(2)}`);

  fecharBebidas();
}
function adicionarBebidaDireto(nome, preco) {

  // procura se a bebida já está no carrinho
  const itemExistente = carrinho.find(item =>
    item.nome === nome && item.titulo === "Bebida"
  );

  if (itemExistente) {
    // se já existir, aumenta a quantidade
    itemExistente.quantidade += 1;
  } else {
    // se não existir, adiciona normalmente
    carrinho.push({
      titulo: "Bebida",
      nome: nome,
      preco: `R$ ${preco.toFixed(2).replace('.', ',')}`,
      quantidade: 1
    });
  }

  atualizarCarrinho();
}


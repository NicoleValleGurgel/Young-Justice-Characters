const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar")
let cardAtual = 0;
const cards = document.querySelectorAll(".card");

btnAvancar.addEventListener("click,", function () {

    if(cardAtual === cards.length - 1) return;
    
    const cardSelecionado = document.querySelector(".selecionado");
    cardSelecionado.classList.remove("selecionado");

   
    cardAtual++;
    console.log(cardAtual);
    cards[cardAtual].classList.add("selecionado");


});

btnVoltar.addEventListener("click,", function () {

    if(cardAtual === 0) return;
    
    const cardSelecionado = document.querySelector(".selecionado");
    cardSelecionado.classList.remove("selecionado");

   
    cardAtual--;
    console.log(cardAtual);
    cards[cardAtual].classList.add("selecionado");


});

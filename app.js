let edtQuantidade = document.getElementById('quantidade'); 
let edtMinimo = document.getElementById('de'); 
let edtMaximo = document.getElementById('ate');
let btnReiniciar = document.getElementById('btn-reiniciar');
let resultado = document.getElementById('resultado');
let numero;
let numerosSorteados = [];

function sortear(){
    let AQuantidade = parseInt(edtQuantidade.value);
    let AMinimo = parseInt(edtMinimo.value);
    let AMaximo = parseInt(edtMaximo.value);

    for(let i = 0; i < AQuantidade; i++){
         numero = obterNumeroAleatorio(AMinimo, AMaximo);
        while(numerosSorteados.includes(numero)){
            numero = obterNumeroAleatorio(AMinimo, AMaximo);
        }
        numerosSorteados.push(numero); 
    }
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${numerosSorteados}</label>`
    btnReiniciar.className = 'container__botao';
}

function reiniciar(){
    numero = 0;
    numerosSorteados = [];
    edtQuantidade.value = '';
    edtMinimo.value = '';
    edtMaximo.value = '';
    resultado.innerHTML = ' <label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    btnReiniciar.className = 'container__botao-desabilitado';
}

function obterNumeroAleatorio(AMinimo, AMaximo){
    return Math.floor(Math.random() * (AMaximo - AMinimo + 1)) + AMinimo; 
}
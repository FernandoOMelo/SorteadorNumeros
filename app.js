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

    if (AQuantidade.toString() == 'NaN' || AMinimo.toString() == 'NaN' || AMaximo.toString() == 'NaN'){
        resultado.innerHTML = '<label class="texto__paragrafo">Preencha todos os campos!</label>';
        return;
    }

    if ((AQuantidade > (AMaximo - AMinimo))){
        resultado.innerHTML = '<label class="texto__paragrafo">Atenção a quantidade de números sorteados deve ser menor que o intervalo!!</label>';
        return;
    }

    if ((AMinimo >= AMaximo)){
        resultado.innerHTML = '<label class="texto__paragrafo">Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!</label>';
        return;
    }

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
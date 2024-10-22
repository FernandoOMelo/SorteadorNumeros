function sortear(){
    let edtQuantidade = parseInt(document.getElementById('quantidade').value);
    let edtMinimo = parseInt(document.getElementById('de').value);
    let edtMaximo = parseInt(document.getElementById('ate').value);
    
    let numerosSorteados = [];

    for(let i = 0; i < edtQuantidade; i++){
        numerosSorteados.push(obterNumeroAleatorio(edtMinimo, edtMaximo));
    }
}

function reiniciar(){

}

function obterNumeroAleatorio(AMinimo, AMaximo){
    return Math.floor(Math.random() * (AMaximo - AMinimo + 1)) + AMinimo; 
}
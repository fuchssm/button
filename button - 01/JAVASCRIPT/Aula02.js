let itens = ['Maça', 'Larannja','Banana',2,1.80];

//FUÇÃO PARA MOSTRAR OS VALORES DO VETOR NO ARQUIVO HTML
function exibirItens(){
    let itemListas = document.getElementById

    //LIMPA A LISTA ANTES DE ADICIONAR OS ITEMS
    itemListas.innerHtml = '';

    // ADICIONA OS ITENS DO VETOR
    for( let i=0; i < itemListas.length; i++){
        let item = itens[i];
        let itemListas = document.createElement('li');
        itemListas.textContent = item;
        itemListas.appendChild (itemItem)
    }
}

window.onload = exibirItens;
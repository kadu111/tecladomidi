function tocaSom(selectAudio){

    const elemento = document.querySelector(selectAudio);

    if (elemento != null && elemento.localName === 'audio') {
            elemento.play();
    } else {
        alert('Elemento inexistente ou seletor invalido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for (let conta = 0; conta < listaDeTeclas.length; conta++) {

    const tecla = listaDeTeclas[conta];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`
    
    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(event){
        if(event.code === 'Space' || event.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}
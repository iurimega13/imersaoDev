function adicionarFilme(){
    var campoFilmeFavorito = document.querySelector('#nomeFilme')
    var campoPosterFilme = document.querySelector('#posterFilme')
    var nomeFilme = campoFilmeFavorito.value
    var posterFilme = campoPosterFilme.value
   listarFilmes(nomeFilme, posterFilme)
    /* console.log(nomeFilme)
    console.log(posterFilme)
    */
  }
  
  function listarFilmes(filme, poster){
    var listaFilmes = document.querySelector('#listaFilmes')
    var elementoFilme ="<div id='poster'><img id'capa' src='" + poster + "'> <div id='nome'>" + filme + "</div></div>"
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
  }
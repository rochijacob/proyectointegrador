let queryString =  location.search; 
    // console.log(queryString);
    let queryStringObj = new URLSearchParams(queryString);
    // console.log(queryStringObj);
let option = queryStringObj.get('option');
// Mantener en el html la opción seleccionada

// Mantener en el html la opción seleccionada
// 1 capturamos todas los campos input de tipo radio button.
let arrayOpciones = document.querySelectorAll('.option');
// Recorremos el array de radio buttons y le colocamos el atributo checked al input que coinicde con el valor de "option" que está en la url.
arrayOpciones.forEach(function(unaOpcion){
    if(option == unaOpcion.value){
        unaOpcion.checked = true
    }
})
console.log(arrayOpciones);



let spinner = document.getElementById("spinner");

    function showSpinner() {
         spinner.className = "show";
         setTimeout(() => {
         spinner.className = spinner.className.replace("show", "");
        }, 2500);
    }




    
let search = queryStringObj.get('search');

let proxy = "https://cors-anywhere.herokuapp.com/";
let urltracks = proxy + 'https://api.deezer.com/search/' + option + '?q=' + search;

window.addEventListener('load', function() {

    
if(search !== null){
    showSpinner()
    
    let searchResults = document.querySelector('.display-resultados');
    searchResults.innerHTML += 'Resultados de Busqueda...';

    let detailContainer = document.querySelector('.main-detail-containter');
    detailContainer.style = 'padding: 10px 0px;'

    fetch(urltracks)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        let lista = document.querySelector('.lista')
        let resultados = datos.data;
        console.log(resultados);
        if (option == 'track'){
            resultados.forEach(resultado => { 
                lista.innerHTML += '<li class="track-search-list"><a href="generaldetail.html?id=' + resultado.id + '&type='+ resultado.type + '" class="a-song">'+ '<img src="'+ resultado.album.cover + '" class="search-img">'+ '<div class="song-text"><h4 class="text-a">' + resultado.title + ' </h4><p class="text-b">' + resultado.artist.name + '</p></div>'+ '<i class="material-icons">more_horiz</i>' +'</a></li>'
         
            });
        }
        if (option == "album"){
            resultados.forEach(resultado => { 
                resultados.forEach(resultado => {
                    lista.innerHTML += '<li class="track-search-list"><a href="generaldetail.html?id='+ resultado.id +'&type='+ resultado.type + '" class="a-song">' + '<img src="' +  resultado.cover  + '" class="search-img">'+ '<div class="song-text"><h4 class="text-a">' + resultado.title + '</h4><p class="text-b">'+ resultado.artist.name + '</p></div>' + '<i class="material-icons">keyboard_arrow_right</i>' + '</a></li>';
                });
            });
        }
        if (option == "artist") {
            resultados.forEach(resultado => {
                lista.innerHTML += '<li class="track-search-list"><a href="generaldetail.html?id='+ resultado.id + '&type=' + resultado.type + '" class="a-song">' + '<img src="' + resultado.picture + '" class="rounded-img">' + '<div class="song-text"><h4 class="text-a">' + resultado.name + '</h4></div>' + '<i class="material-icons">keyboard_arrow_right</i>' + '</a></li>';
            });
        }
    })
    .catch(function(error){
        console.log(error)
    })
}

})
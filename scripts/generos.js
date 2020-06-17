let proxy = "https://cors-anywhere.herokuapp.com/";
let urlGeneral = proxy + 'https://api.deezer.com/genre';

fetch(urlGeneral)
    .then(function(response){
        return response.json();
    })
    .then(function (datos) {
        console.log(datos);
        
        let generosLista = document.querySelector('.generos-lista')
        let losGeneros = datos.data;
        containerGenre = '';


    })
    .catch(function(error) {
        console.log(error);
    })
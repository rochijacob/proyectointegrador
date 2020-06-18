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

        for (let i = 1; i < losGeneros.length; i++) {
            
            containerGenre += '<a class="generos-container" href="generaldetail.html?id='+ losGeneros[i].id +'&type=genre"><img src="' + losGeneros[i].picture_big + '" alt="'+ losGeneros[i].name +'" class="image"><div class="overlay">' + losGeneros[i].name + '</div></a>';

            

        }

        generosLista.innerHTML = containerGenre;
    })
    .catch(function(error) {
        console.log(error);
    })
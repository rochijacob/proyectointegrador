let queryString = location.search;
let datos = new URLSearchParams(queryString);
let idTrack = datos.get('id'); //Nos permite obtener el id de la url

let proxy = "https://cors-anywhere.herokuapp.com/";
let url = proxy + 'https://api.deezer.com/track/' + idTrack; //La ruta tiene cors, los datos de deezer y el id, cambio el path al de 1 track

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos); //Me va a dar los datos de 1 cancion
        //Teng que capturar titulo, interprete, y album
        let image = document.querySelector(".image-detalle");
        image.innerHTML += '<img src="' + datos.album.cover_big + '"style="border-radius: 10px 0px 0px 10px;">';
        
        let titulo = document.querySelector('.titulo-detalle');
        titulo.innerHTML += datos.title;

        let interprete = document.querySelector('.subtitulo1');
        interprete.innerHTML += 'Artista: ' + '<a href ="generaldetail.html?id=' + datos.artist.id  +'">'+ datos.artist.name +'</a>';

        let album = document.querySelector('.subtitulo2');
        album.innerHTML += 'Album: ' + '<a href ="generaldetail.html?id=' + datos.album.id  +'">'+ datos.album.title +'</a>';

        //Agregamos el player
        let player = document.querySelector('.widget-player');
        player.innerHTML += '<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=600&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id=' + idTrack + '&app_id=1" width="80%" height="350"></iframe>'

    })
    .catch(function(error) {
        console.log(error);
    })

    //pasos para agregar temas a una playlist


    //Paso 1
    let recuperoStorage = localStorage.getItem('playlist');

    //Si todavia no tengo tracks en mi playlist
    if(recuperoStorage == null){
        //Creo una lista vacia
        playlist = [];
    } else {
        //Recupero el aray de localStorage
        playlist = JSON.parse(recuperoStorage) //Transformo los datos en un elemento operable
    }

    //me fijo que no este en la lista y cambio el texto del boton
    if(playlist.includes(idTrack)){ //Hay que agregar el id del track
        document.querySelector('.agregar').innerHTML = "Quitar de la playlist"; 
    }


    //Paso 2: agregar un track a la playlist
    let agregar = document.querySelector('.agregar');

    agregar.addEventListener('click', function(e){
        //detener el a
        e.preventDefault();

        if (playlist.includes(idTrack)) {
            //Si el track esta, tenemos que quitarlo. Tenemos que encontar el track dentro del array
            let indiceEnElArray = playlist.indexOf(idTrack);
            playlist.splice(indiceEnElArray, 1);
            document.querySelector('.agregar').innerHTML = "Agregar a playlist";
            console.log(playlist);
            
        } else {
            playlist.push(idTrack);
            document.querySelector('.agregar').innerHTML = "Quitar de la playlist";
            }

        /*
        //Quiero agregarle el id de track, push me permite agregarle elementos
        playlist.push(idTrack);
        document.querySelector('.agregar').innerHTML = "Quitar de la playlist"; //Le estoy cambiando la vista al usuario
        */
        
        //Paso 3 guardar lista en local Storage
        let playlistParaStorage = JSON.stringify(playlist);
        localStorage.setItem('playlist', playlistParaStorage);
        console.log(localStorage);
        
    })
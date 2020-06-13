let queryString = location.search;
let datos = new URLSearchParams(queryString);
let idGeneral = datos.get('id');//Nos permite obtener el id de la url
let type = datos.get('type'); 
console.log(type);


let proxy = "https://cors-anywhere.herokuapp.com/";
let urlGeneral = proxy + 'https://api.deezer.com/' + type + '/' + idGeneral; //La ruta tiene cors, los datos de deezer y el id, cambio el path al de 1 track

if(type == 'track'){
fetch(urlGeneral)
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
        interprete.innerHTML += '<h3> Artista: ' + '<a href ="generaldetail.html?id=' + datos.artist.id  + '&type=artist">'+ datos.artist.name +'</a></h3>';

        let album = document.querySelector('.subtitulo2');
        album.innerHTML += 'Album: ' + '<a href ="generaldetail.html?id=' + datos.album.id  +'&type=album">'+ datos.album.title +'</a>';

        //Agregamos el player
        let player = document.querySelector('.widget-player');
        player.innerHTML += '<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=600&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id=' + idGeneral + '&app_id=1" width="80%" height="350"></iframe>';

        let addButtons = document.querySelector('.add-buttons');
        addButtons.innerHTML += '<p><a href="#" class="agregar">Agregar a playlist</a></p>'+'<p><a href="index.html" class="tops">Volver a Home</a></p>'+'<p><a href="playlist.html">Ver Playlist</a></p>'       

    })
    .catch(function(error) {
        console.log(error);
    })

    //pasos para agregar temas a una playlist


    //Paso 1
    let recuperoStorage = localStorage.getItem('playlist');
    console.log(recuperoStorage);
    
    //Si todavia no tengo tracks en mi playlist
    if(recuperoStorage == null){
        //Creo una lista vacia
        playlist = [];
    } else {
        //Recupero el aray de localStorage
        playlist = JSON.parse(recuperoStorage) //Transformo los datos en un elemento operable
    }

    //me fijo que no este en la lista y cambio el texto del boton
    if(playlist.includes(idGeneral)){ //Hay que agregar el id del track
        document.querySelector('.agregar').innerHTML = "Quitar de la playlist"; 
    }


    //Paso 2: agregar un track a la playlist
    let agregar = document.querySelector('.agregar');
    console.log(agregar);
    
    agregar.addEventListener('click', function(e){
        //detener el a
        e.preventDefault();

        if (playlist.includes(idGeneral)) {
            //Si el track esta, tenemos que quitarlo. Tenemos que encontar el track dentro del array
            let indiceEnElArray = playlist.indexOf(idGeneral);
            playlist.splice(indiceEnElArray, 1);
            document.querySelector('.agregar').innerHTML = "Agregar a playlist";
            console.log(playlist);
            
        } else {
            playlist.push(idGeneral);
            document.querySelector('.agregar').innerHTML = "Quitar de la playlist";
            }

        /*
        //Quiero agregarle el id de track, push me permite agregarle elementos
        playlist.push(idGeneral);
        document.querySelector('.agregar').innerHTML = "Quitar de la playlist"; //Le estoy cambiando la vista al usuario
        */
        
        //Paso 3 guardar lista en local Storage
        let playlistParaStorage = JSON.stringify(playlist);
        localStorage.setItem('playlist', playlistParaStorage);
        console.log(localStorage);
        
    })

}


if(type == 'artist'){
    fetch(urlGeneral)
        .then(function(response){
            return response.json();
            
        })
        .then(function(datos){
            console.log(datos); //Me va a dar los datos de 1 cancion
            
            let image = document.querySelector(".image-detalle");
            image.innerHTML += '<img src="' + datos.picture_big + '">';

            let followers  = document.querySelector('.social_followers');
            followers.innerHTML += '<p class="followers"><span style="color:#e674e0;">&#10084;</span>'+ datos.nb_fan +'</p>'

            let titulo = document.querySelector('.titulo-detalle');
            titulo.innerHTML += datos.name;

            
            let topArtist = proxy + 'https://api.deezer.com/artist/'+ idGeneral + '/top?limit=5'
            console.log(topArtist);
            fetch(topArtist)
                .then(function(response){
                    return response.json();
                    
                })
                .then(function(data){
                    console.log(data);
                    
                })
                .catch(function(error) {
                    console.log(error);
                }) 

        })
        .catch(function(error) {
            console.log(error);
        })
}

if(type == 'album'){
    fetch(urlGeneral)
        .then(function(response){
            return response.json();
            
        })
        .then(function(datos){
            console.log(datos); //Me va a dar los datos de 1 cancion
            
            let image = document.querySelector(".image-detalle");
            image.innerHTML += '<img src="' + datos.cover_big + '"style="border-radius: 10px 0px 0px 10px;">';

            let titulo = document.querySelector('.titulo-detalle');
            titulo.innerHTML += datos.title;

            let interprete = document.querySelector('.subtitulo1');
            let genres = datos.genres.data;
            let elGenero = '';
            for (let i = 0; i < 1; i++){
                elGenero = '<h3 class="h3-inline"> Genero: ' + '<a href="generaldetail.html?id=' + datos.genre_id + '&type=genre">' + genres[i].name + '</a></h3>';
            }
            interprete.innerHTML += '<h3 class="h3-inline"> Artista: ' + '<a href ="generaldetail.html?id=' + datos.artist.id  + '&type=artist">'+ datos.artist.name +'</a></h3>' + elGenero;

            let releaseDate = document.querySelector('.subtitulo2');
            releaseDate.innerHTML += datos.release_date;

            let unorderedList = document.querySelector('.widget-player')
            unorderedList.innerHTML += '<section class="scroll-box"><ul class="lista"></ul></section>'
            let lista = document.querySelector('.lista')
            let albumTracks = datos.tracks.data;
            let someTracks = '';
            for (let i = 0; i < albumTracks.length; i++) {
                someTracks += '<li class="detail-margins"><a href="generaldetail.html?id=' + albumTracks[i].id + '&type=track' + '" class="a-song">'+ '<img src="'+ datos.cover + '" class="search-img">'+ '<div class="song-text"><h4 class="text-a">' + albumTracks[i].title + ' </h4><p class="text-b">' + albumTracks[i].artist.name + '</p></div>'+ '<i class="material-icons">more_horiz</i>' +'</a></li>';
                
            }
            lista.innerHTML = someTracks


        })
        .catch(function(error) {
            console.log(error);
        })
}

if(type == 'genre'){
    fetch(urlGeneral)
        .then(function(response){
            return response.json();
            
        })
        .then(function(datos){
            console.log(datos);
            
        })
        .catch(function(error) {
            console.log(error);
        })
}
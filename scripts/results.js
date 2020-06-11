let queryString =  location.search; 
console.log(queryString);

let queryStringObj = new URLSearchParams(queryString);
console.log(queryStringObj);

let search = queryStringObj.get('search');
console.log(search);

let proxy = "https://cors-anywhere.herokuapp.com/";
let urltracks = proxy + 'https://api.deezer.com/search/track?q=' + search; 
console.log(urltracks);
let urlartists = proxy + 'https://api.deezer.com/search/artist?q=' + search; 
let urlalbums = proxy + 'https://api.deezer.com/search/album?q=' + search;

    fetch(urltracks)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        
        let lista = document.querySelector('.lista')
        let resultados = datos.data;
        console.log(resultados);
        
        resultados.forEach(resultado => { 
            lista.innerHTML += '<li class="track-search-list"><a href= "generaldetail.html?id=' + resultado.id + '" class="a-song">'+ '<img src="'+ resultado.album.cover + '" class="search-img">'+ '<div class="song-text"><h4>' + resultado.title + " </h4><p> " + resultado.artist.name + '</p></div>'+ '<i class="material-icons">more_horiz</i>' +'</a></li>'
            //'<li><a href= "generaldetail.html?id=' + resultado.id + '">' + resultado.title + " - " + resultado.artist.name + '</a></li>'
        });
    })
    .catch(function(error){
        console.log(error)
    })

    fetch(urlartists)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        
        let lista = document.querySelector('.lista')
        let resultados = datos.data;
        console.log(resultados);
        
        resultados.forEach(resultado => {
            lista.innerHTML += '<li class="track-search-list"><a href=# class="a-song">' + '<img src="' +  resultado.picture  + '" class="rounded-img">'+ '<div class="song-text"><h4>' + resultado.name + '</h4></div>'+ '<i class="material-icons">keyboard_arrow_right</i>' +'</a></li>';
        });
    })
    .catch(function(error){
        console.log(error)
    })

    fetch(urlalbums)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        
        let lista = document.querySelector('.lista')
        let resultados = datos.data;
        console.log(resultados);
        
        resultados.forEach(resultado => {
            lista.innerHTML += '<li>' + '<img src="' +  resultado.cover  + '"></img>' + resultado.title + '</li>';
        });
    })
    .catch(function(error){
        console.log(error)
    })




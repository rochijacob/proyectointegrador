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
            lista.innerHTML += '<li><a href= "generaldetail.html?id=' + resultado.id + '">' + resultado.title + '</a></li>'
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
            lista.innerHTML += '<li>' + '<img src="' +  resultado.picture  + '"></img>' + resultado.name + '</li>';
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




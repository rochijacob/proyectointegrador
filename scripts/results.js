let queryString =  location.search; 
console.log(queryString);

let queryStringObj = new URLSearchParams(queryString);
console.log(queryStringObj);

let search = queryStringObj.get('search');
console.log(search);


let proxy = "https://cors-anywhere.herokuapp.com/";
let url = proxy + 'https://api.deezer.com/search/track?q=' + search; 
console.log(url);


fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        
        let lista = document.querySelector('.lista')
        let resultados = datos.data;
        console.log(resultados);
        
        resultados.forEach(resultado => {
            lista.innerHTML += '<li>' + resultado.name + '</li>'
        });
    })
    .catch(function(error){
        console.log(error)
    })

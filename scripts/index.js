let proxy = 'https://cors-anywhere.herokuapp.com/'
let url = proxy + "https://api.deezer.com/chart/0/artists";

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        let artists = datos.data;
        let list = document.querySelector('.pepito');

        artists.forEach(function(artist){
        list.innerHTML += '<li class="track-search-list"><a href="#" class="a-song">' + '<img src="' + artist.picture + '" class="rounded-img">' + '<div class="song-text"><h4 class="text-a">' + artist.name + '</h4></div>' + '<i class="material-icons">keyboard_arrow_right</i>' + '</a></li>';
        })
    })
    .catch(function(error){
        console.log(error);
    })
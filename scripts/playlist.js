let recuperoStorage = localStorage.getItem('playlist');
let playlist = JSON.parse(recuperoStorage);
let playlistWrapper = document.querySelector('.playlistWrapper');

if(recuperoStorage == null){
    playlist = [];
    playlistWrapper.innerHTML += '<li> No hay canciones en tu playlist </li>'

}else{
    playlist.forEach(function(idGeneral){
        buscarYMostrarTrack(idGeneral);
    
    });

}


function buscarYMostrarTrack(idGeneral){
    let proxy = "https://cors-anywhere.herokuapp.com/";
    let url = proxy + "https://api.deezer.com/track/" + idGeneral;

    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(track) {
        playlistWrapper.innerHTML += '<li>' + '<a href="track.html?id=' + track.id + '">' + track.title + '<a/></li>'

    }) 
    .catch(function(errors){
        console.log(errors);
    })
};
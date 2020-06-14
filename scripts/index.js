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
            let div = document.createElement('div');
            div.classList.add('artlist');
            
            let img = document.createElement('img');
            img.src = artist.picture;
            img.classList.add('artlistImg');
            img.alt = artist.name;

            let div2 = document.createElement('div');
            div2.classList.add('song-text');

            let link = document.createElement('a');
            link.href = '#';

            let linktext = document.createElement('h4');
            linktext.classList.add('item-2');
            linktext.innerHTML = artist.name;

            let item = document.createElement('i');
            item.classList.add('material-icons');
            item.innerHTML = 'more_horiz';
            
            div.appendChild(img);
            div.appendChild(div2);
            div2.appendChild(link);
            link.appendChild(linktext);
            div.appendChild(item);
            list.appendChild(div);
        })
    })
    .catch(function(error){
        console.log(error);
    })
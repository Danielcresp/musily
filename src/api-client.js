// require("console");

// const URL = 'https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=disco&api_key=be8aca4debef51cd2091e86218ce334d&format=json'

// function getAlbums(){
//     return fetch(URL)
//     .then(response => response.json()) //Formaterar la repuesta a json
//     .then(data => data.albums.album)
//     .then(albumss => albumss.map(album=>{
//         return{
//             name: album.name,     
//             mage: album.image[3]['#text']
//         }
//     }))
//     // .then(data => {
//     //     return console.warn(data);
//     // })


// }
// export {getAlbums}
import {contenedor} from"./selectores.js";

export const parametros = {
    nombre : ""
}

export function searchMovies(e){
    parametros.nombre = e.target.value;
    buscar();    
}

function buscar(){
    const {nombre} = parametros;

const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=87389266&s=$(nombre)';

fetch(url)
    .then((respuesta)=>{
        return respuesta.json();

    })
    .then((data)=>{
        injectHTML(data.Search);
    })
    .catch(()=>{
    })
}

function injectHTML(cards){
    limpiar();
    cards.forEach((card)=>{
        const {Poster, Title, Year} = card;
        const pelicula = document.createElement('div');
        pelicula.innerHTML = `
        <div class="card" style"width: 18rem;" >
        <img src="${Poster}" class="card-img-top" style="height: 400px;" alt="..."
            <div class="card-boy">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${Year}</p>
            <a href="#" class="btn btn-primary">Movies</a>
            </div>
        </div>
        `


        contenedor.appendChild(pelicula);
    });
}


function limpiar(){
    let m = document.querySelectorAll('div')
    for (let i = 0; i < m.length; i++){
        m[i].remove();
    }
}
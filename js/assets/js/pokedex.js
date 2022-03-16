// Una API es un servicio 
// Un fetch es la forma en la que hacemos una consulta o petición a una API
// Un fetch nos regresa una promesa, programación asíncrona
const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage('../../assets/img/sad-pikachu.png');
        } 
        else {
            return res.json();
        }
        //console.log(res);
        //return res.json();

        // .then resuelve las promesas
        //la función de una promesa es que se pueda resolver después y que el código síncrono se vuelva asíncrono
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
        pokeImage(pokeImg);
    })
}

//fetchPokemon();

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

//pokeImage('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png')

// Evento
/*
const imprimir = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value;
    console.log("Hola " + pokeInput);
}
*/


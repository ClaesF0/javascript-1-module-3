//My point
//https://pokeapi.co/api/v2/pokemon?offset=20&limit=40



/*

async function kitchen(){

    try{
        // la oss lage et fake problem
        await abc;
    }

    catch(error){
        console.log("abc does not exist", error)
    }
}

kitchen(); //run the code

*/

const APIurl = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=40";
//SELECT THE POKEMONCLASS CONTAINER
const pokemonsContainer = document.querySelector(".pokemons"); //ul with class pokemons

async function getPokemonNames(){

    try {
        const response = await fetch(APIurl);
        //console.log(response)
        const responseJSON = await response.json(); //convert the response to json data
        //console.log(responseJSON)
        const pokemonsData = responseJSON.results;
        //console.log(pokemonsData);
        for(let i = 0; i < pokemonsData.length; i++){
            console.log(pokemonsData[i]);
            pokemonsContainer.innerHTML+=`<li>
                                            <span>
                        <a href="pokemon-details.html?name=${pokemonsData[i].name}">${pokemonsData[i].name}</a>
                                            </span>
                                        </li>`
        }
    }
    catch (error){
        console.log("Some error happened :(", error)
    }
}

getPokemonNames();



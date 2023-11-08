const axios = require("axios")
const {Pokemon, Type}=require("../db")
const {pokemon,URL_API} = require('./pokemon')


const pokemons = [];
const getPokemonsApi = async () => {

if(pokemons.length>0){
  return pokemons
}

  try {
    const res = await axios.get(`${URL_API}`);
    const pokemonUrls = res.data.results.map(p => p.url);

    for(let url of pokemonUrls) {
      const pokemonRes = (await axios.get(url)).data; 

      pokemons.push(pokemon(pokemonRes));
    }

  } catch(err) {
    throw new Error(`Error al obtener datos de la API: ${error.message}`)  }

  return pokemons;
}


//*esto funciona pero despues de determinados llamados, se rompe. corregido en la defensa del PI.
    // const pokemonsInfoApi = await axios.get(`${URL_API}`);

    // const pokemonUrls = await pokemonsInfoApi.data.results.map((p) => p.url);

    // const pokemonApiResponses = await Promise.all(pokemonUrls.map((url) => axios.get(url)));

    // const cleanedPokemonData = await pokemonApiResponses.map((response) => pokemon(response.data));
    // return cleanedPokemonData;
   

const getPokemonsDB = async () => {
  try {
    const pokemonsDB = await Pokemon.findAll({
      include: {
        model: Type,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    return pokemonsDB;
  } catch (error) {
    console.log("error en DB",error)
    throw new Error(`Error al obtener datos de la base de datos: ${error.message}`);
  }
};

const getAllPokemons = async () => {
  try {
    const [db, api] = await Promise.all([getPokemonsDB(), getPokemonsApi()]);
    return [...db, ...api]; 
  } catch (error) {
    throw new Error({ error: error.message });
  }
};





module.exports ={
    getAllPokemons
}
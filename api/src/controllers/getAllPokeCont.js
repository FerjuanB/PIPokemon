const axios = require("axios")
const {Pokemon, Type}=require("../db")
const {pokemon,URL_API} = require('./pokemon')



const getPokemonsApi = async () => {
  try {
    const pokemonsInfoApi = await axios.get(`${URL_API}`);

    const pokemonUrls = pokemonsInfoApi.data.results.map((p) => p.url);

    const pokemonApiResponses = await Promise.all(pokemonUrls.map((url) => axios.get(url)));

    const cleanedPokemonData = pokemonApiResponses.map((response) => pokemon(response.data));

    return cleanedPokemonData;
  } catch (error) {
    throw new Error(`Error al obtener datos de la API: ${error.message}`);
  }
};

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
    throw new Error(`Error al obtener datos de la base de datos: ${error.message}`);
  }
};

const getAllPokemons = async () => {
  try {
    const [pokemonApiData, pokemonDBData] = await Promise.all([getPokemonsApi(), getPokemonsDB()]);
    return [...pokemonDBData,...pokemonApiData];
  } catch (error) {
    throw new Error({ error: error.message });
  }
};










// // ?traer los pokemon de la base de datos, y si hay algun error lanzar un error a traves de un try-catch. 
// const allPokemon = ()=>{
// const findPokeApi = async()=>{

//   try{
//     const pokeApi = await axios.get(URL_API)
//     const pokemon = await Promise.all(
//       pokeApi.data.results.map(async (p) => {
//         const { data } = await axios.get(p.url);
//        //?hacer un map sobre los types existentes y poder guardarlos en la propiedad "type"
//         const types = data.types.map((type, index) => ({
//           [index + 1]: type.type.name,
//       }));
//         return {
//           id: data.id,
//           name: data.name,
//           image: data.sprites.other.home.front_default,
//           attack: data.stats[1].base_stat,
//           defense: data.stats[2].base_stat,
//           speed: data.stats[5].base_stat,
//           height: data.height,
//           weight: data.weight,
//           type:Object.assign({},...types),
//           created:false
//         };
//       })
//     );
//     return pokemon
//   }
//   catch{
//     throw new Error (`el sitio pokeapi.co no puede traer los datos dado que sucede ${error.message}`)
//   }
// }

// //!traer los pokemon de la base de datos a traves de una funcion que será llamada luego. 
// const pokeBdd = async() =>{
//   try {
//     const pikachu = await Pokemon.findAll({
//       include:{
//         model:Type,
//         attributes:["name"],
//         through:{attributes:[]}
//       }}
//     );
//     return pikachu
//   } catch (error) {
//     throw new Error (`la base de datos tiene el error:${error.message}`)
//   }
// }

// return [findPokeApi,pokeBdd]
// }



module.exports ={
    getAllPokemons
}
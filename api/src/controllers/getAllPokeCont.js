const axios = require("axios")
const {Pokemon}=require("../db")

// ?offset=20&limit=20
const findPokemons = async()=>{

  // if(pokeBdd.length === 0 || pokeBdd.some(e =>e.created === true)){
const pokeApi = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=200");
  const pokemon = await Promise.all(
    pokeApi.data.results.map(async (p) => {
      const { data } = await axios.get(p.url);
     //?hacer un map sobre los types existentes y poder guardarlos en la propiedad "type"
      const types = data.types.map((type, index) => ({
        [index + 1]: type.type.name,
    }));
      return {
        id: data.id,
        name: data.name,
        image: data.sprites.other.home.front_default,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        speed: data.stats[5].base_stat,
        height: data.height,
        weight: data.weight,
        type:Object.assign({},...types),
        created:false
      };
    })
  );
  const pokeBdd= await Pokemon.findAll();
  const pokeTypes= await Promise.all(
  pokeBdd.map(async (pokemon)=> await pokemon.getTypes()))
  return [...pokeBdd,pokemon];
}



module.exports ={
    findPokemons
}
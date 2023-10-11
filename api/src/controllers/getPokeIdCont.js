const {Pokemon } = require('../db')
const  axios  = require("axios");

const getPokeId = async (id,source)=>{
let pokemon = {}
if (source === "api"){
    pokemon = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data
    const types = pokemon.types.map((type, index) => ({
        [index + 1]: type.type.name,
    }));
     pokemon = {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other.home.front_default,
        attack: pokemon.stats[1].base_stat,
        defense: pokemon.stats[2].base_stat,
        speed: pokemon.stats[5].base_stat,
        height: pokemon.height,
        weight: pokemon.weight,
        type:Object.assign({},...types),
        created:false 
        
    }
    return pokemon

}else{
    pokemon = await Pokemon.findByPk(id)
    type = (await pokemon.getTypes()).map((type)=>{
        return type.dataValues.name
    })
}
}


module.exports ={
    getPokeId
}
const {Pokemon, Type } = require('../db')
const  axios  = require("axios");
const {pokemon,URL} = require('./pokemon')
const getPokeId = async (id,source)=>{

if (source === "api"){

    const pokemonId = (await axios.get(`${URL}/${id}`)).data
    
    return pokemon(pokemonId)
    

}else{
    return await Pokemon.findOne({
        where: { id },
        include: {
          attributes: ["name"],
          model: Type,
          through: {
            attributes: [],
          },
        },
      });

}
}


module.exports ={
    getPokeId
}
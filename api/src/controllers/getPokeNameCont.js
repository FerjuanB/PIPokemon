    const axios = require("axios")
    const {Pokemon, Type} = require('../db')
    const{pokemon,URL}=require('./pokemon')
    // const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    // const pokemonId = data.id;

    const findPokeName = async (name)=>{
         const apiName = (await axios.get(`${URL}/${name}`)).data
         const apiNameMap=pokemon(apiName)

            const pokeBdd = await Pokemon.findOne({
                where: { name },
                include: {
                  attributes: ["name"],
                  model: Type,
                  through: {
                    attributes: [],
                  },
                },
              });
        return [apiNameMap, pokeBdd]
     
    }


    module.exports = {
        findPokeName
    }
    const axios = require("axios")
    const {Pokemon, Type} = require('../db')
    // const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    // const pokemonId = data.id;

    const findPokeName = async (name)=>{
        let api ={}
         api = (await axios.get(`http://pokeapi.co/api/v2/pokemon/${name}`)).data
         const types = api.types.map((type, index) => ({
            [index + 1]: type.type.name,
          }));
         api = {
            id: api.id,
            name: api.name,
            image: api.sprites.other.home.front_default,
            attack: api.stats[1].base_stat,
            defense: api.stats[2].base_stat,
            speed: api.stats[5].base_stat,
            height: api.height,
            weight: api.weight,
            type:Object.assign({},...types)
        }
            const pokeBdd = await Pokemon.findAll({
                where: {
                    name: name,
                  }
            })
            console.log(api)
        return [api, ...pokeBdd]
     
    }


    module.exports = {
        findPokeName
    }
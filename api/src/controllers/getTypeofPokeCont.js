const axios  = require("axios");
const {Type} = require('../db')


const getByTypes = async () =>{
    const typePoke = await Type.findAll() 
    if(typePoke.length === 0){
    const api = await axios.get("https://pokeapi.co/api/v2/type")
    const typeApi = api.data.results.map(t=>({
        name:t.name
    }))
    
    return await Type.bulkCreate(typeApi);
}

    return typePoke;
}

module.exports = {
    getByTypes
}
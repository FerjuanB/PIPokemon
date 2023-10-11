const {findPokeName} = require('../controllers/getPokeNameCont')

const getPokeName = async(req,res)=>{
const name = req.query.name.toLowerCase();
if((await findPokeName(name)).length === 0)
res.status(400).json({message:`No pokemons like "${name}" exists!`})
try {
    console.log(name)
    const pokemons = await findPokeName(name);
    res.status(200).json(pokemons);
} catch (error) {
    res.status(400).json({message:error.message})
}
}

module.exports = { 
    getPokeName
}


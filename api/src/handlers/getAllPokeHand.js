const {getAllPokemons} = require('../controllers/getAllPokeCont')

const getAllPokemon = async (req, res)=>{
try {
    const pokemon = await getAllPokemons();
    res.status(200).json(pokemon)
} catch (error) {
    res.status(500).json({error:error.message})
}
}

module.exports = {
    getAllPokemon
}
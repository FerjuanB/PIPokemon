const {getPokeId} = require('../controllers/getPokeIdCont');


const getPokeById = async(req,res)=>{
    const {pokeId} = req.params
    const source = isNaN(pokeId)? "bdd":"api";
    
    try {
     const pokemon = await getPokeId(pokeId,source);
     res.status(200).json(pokemon)  
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports ={
    getPokeById
}
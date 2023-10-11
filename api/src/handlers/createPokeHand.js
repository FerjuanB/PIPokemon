const { createPoke }  = require('../controllers/createPokeContr')

const createPokemon = async(req,res)=>{
    
    const {name,image,attack,defense,speed,height,weight,type}=req.body
    try {
    const newPokemon = await createPoke(
        name,
        image,
        attack,
        defense,
        speed,
        height,
        weight,
        type
    );
    res.status(201).json(newPokemon)
} catch (error) {
    res.status(400).json({error:error.message})
}
}


module.exports = {
    createPokemon
}

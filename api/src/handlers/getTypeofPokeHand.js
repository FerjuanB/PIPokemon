const { getByTypes } = require('../controllers/getTypeofPokeCont')


const getPokeTypes = async (req,res)=>{
    try {
        const types = await getByTypes();
        res.status(200).json(types)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports ={
    getPokeTypes
}
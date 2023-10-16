const {Pokemon, Type} = require('../db')

const createPoke = async (name, image, attack, defense, speed, height, weight, type)=>{

  
  
  let typesToAdd = Array.isArray(type) ? type : [type];
  
  const foundType = await Type.findAll({ where: { name: typesToAdd } });
  
  const newPokemon = await Pokemon.create({
      name,
      image,
      attack,
      defense,
      speed,
      height,
      weight
  })

  await newPokemon.addType(foundType)

  newPokemon.type = foundType.map((type)=>type.name)
  
  return newPokemon
};

module.exports = {
    createPoke
};
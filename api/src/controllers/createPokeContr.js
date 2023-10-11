const {Pokemon, Type} = require('../db')

const createPoke = async (name, image, attack, defense, speed, height, weight, type)=>{

const newPokemon = await Pokemon.create({
    name,
    image,
    attack,
    defense,
    speed,
    height,
    weight
})


let typesToAdd = Array.isArray(type) ? type : [type];


  await Promise.all(typesToAdd.map(async (typeName) => {
  
    const foundType = await Type.findOne({ where: { name: typeName } });
    if (foundType) await newPokemon.addType(foundType);
  }));


  const pokemonWithTypes = await Pokemon.findByPk(newPokemon.id, {
    include: Type,
  });

  const simplifiedTypes = pokemonWithTypes.types.map(type => type.name);

  return {
    id: pokemonWithTypes.id,
    name: pokemonWithTypes.name,
    image: pokemonWithTypes.image,
    attack: pokemonWithTypes.attack,
    defense: pokemonWithTypes.defense,
    speed: pokemonWithTypes.speed,
    height: pokemonWithTypes.height,
    weight: pokemonWithTypes.weight,
    created: true,
    type: simplifiedTypes,
  };

};

module.exports = {
    createPoke
};
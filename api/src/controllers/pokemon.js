const URL_API='https://pokeapi.co/api/v2/pokemon/?limit=120'
const URL ="https://pokeapi.co/api/v2/pokemon/"
const pokemon = (data) =>{
    return {
        id: data.id,
        name: data.name,
        image: data.sprites.other.home.front_default,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        speed: data.stats[5].base_stat,
        height: data.height,
        weight: data.weight,
        types:data.types.map((t)=>{
          return{
            name:t.type.name
          }
        }),
        created:false
      };

}

module.exports = 
    {pokemon,
      URL_API,
      URL
}
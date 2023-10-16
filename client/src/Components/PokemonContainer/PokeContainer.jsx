import { Pokemon } from "../Pokemon/Pokemon"
import style from './PokeContainer.module.css'
import { useSelector } from "react-redux"
const PokeContainer = () => {
 
   const pokemons = useSelector(state=>state.pokemons);

   
    return (
    <div className={style.mCont}>
        {pokemons.map(u =>{
            return <Pokemon 
            id={u.id}
            name={u.name}
            image={u.image}
            attack={u.attack}
            defense={u.defense}
            speed={u.speed}
            height={u.height}
            weight={u.weight}
            types={u.types}
            />
        })}
    </div>
  )
}

export default PokeContainer
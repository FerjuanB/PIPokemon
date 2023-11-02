import { useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { getPokemonsId } from "../../Redux/actions"
import style from './Detail.module.css'
import { clearPokemon } from "../../Redux/actions"


const Detail = () => {
const {id} = useParams()
const dispatch = useDispatch()

useEffect(()=>{
  dispatch(getPokemonsId(id))
},[dispatch,id])
const pokemon=useSelector(state=>state.pokemon)
console.log(pokemon)

const clearDetail = ()=>{
dispatch(clearPokemon())
}
  return (
    <div className={style.global}>
   <div className={style.mainDiv}>
    <Link to="/home"> 
        <button onClick={clearDetail}>Volver a la página principal</button>
      </Link>
    <img className={style.image} src={pokemon.image} alt="" />
  <div className={style.details}>
   {pokemon.name &&    <p className={style.h1}>Name: {pokemon.name}</p>}
   {pokemon.attack &&  <p className={style.h1}> Attack: {pokemon.attack}</p>}
   {pokemon.defense && <p className={style.h1}> Defense: {pokemon.defense}</p>}
   {pokemon.speed &&   <p className={style.h1}>Speed: {pokemon.speed}</p>}
   {pokemon.height &&  <p className={style.h1}> Height: {pokemon.height}</p>}
   {pokemon.weight &&  <p className={style.h1}>Weight: {pokemon.weight}</p>}
   <p className={style.h1}>Types:</p>{pokemon.types && pokemon.types.map(p=><span className={style.type}>{p.name}</span>)}
   </div>
   </div>
   </div>
  )
}

export default Detail
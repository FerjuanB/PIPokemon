import { useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { getPokemonsId } from "../../Redux/actions"
import style from './Detail.module.css'


const Detail = () => {
const {id} = useParams()
const dispatch = useDispatch()

useEffect(()=>{
  dispatch(getPokemonsId(id))
},[dispatch,id])
const pokemon=useSelector(state=>state.pokemon)
console.log(pokemon)
  return (
   <div className={style.mainDiv}>
    <img className={style.image} src={pokemon.image} alt="" />
    <Link to="/home"> {/* Enlace que te llevará de vuelta a la página "home" */}
        <button>Volver a la página principal</button>
      </Link>
   {pokemon.name && <h1>Name: {pokemon.name}</h1>}
   {pokemon.attack && <h1> Attack: {pokemon.attack}</h1>}
   {pokemon.defense && <h1> Defense: {pokemon.defense}</h1>}
   {pokemon.speed && <h1>Speed: {pokemon.speed}</h1>}
   {pokemon.height && <h1> Height: {pokemon.height}</h1>}
   {pokemon.weight && <h1>Weight: {pokemon.weight}</h1>}
   <h1>Types:</h1>{pokemon.types && pokemon.types.map(p=><span>{p.name}</span>)}
   </div>
  )
}

export default Detail
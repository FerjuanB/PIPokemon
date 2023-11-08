import { useEffect, useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { getPokemonsId } from "../../Redux/actions"
import style from './Detail.module.css'
import { clearPokemon } from "../../Redux/actions"
import loadingG from './loading.gif'

const Detail = () => {
const {id} = useParams()
const dispatch = useDispatch()
const [loading, setLoading] = useState(true);


useEffect(()=>{
  dispatch(getPokemonsId(id)).then(()=>{
    setLoading(false)
  })
},[dispatch,id])
const pokemon=useSelector(state=>state.pokemon)

const clearDetail = ()=>{
dispatch(clearPokemon())
}
return (
  <div className={style.main}>
{loading?
(
<div>
<img src={loadingG} alt="Loading"/> 
</div>
):(
  <div>
<div className={style.mainDiv}>
    <Link to="/home"> 
        <button onClick={clearDetail}className={style.button}>Volver a la página principal</button>
      </Link>
  </div>

   <img className={style.image} src={pokemon.image} alt="" key={pokemon.id} />
  <section className={style.details}>
   {pokemon.name &&    <h2 className={style.h1}>Name: {pokemon.name}</h2>}
   {pokemon.attack &&  <h2 className={style.h1}> Attack: {pokemon.attack}</h2>}
   {pokemon.defense && <h2 className={style.h1}> Defense: {pokemon.defense}</h2>}
   {pokemon.speed &&   <h2 className={style.h1}>Speed: {pokemon.speed}</h2>}
   {pokemon.height &&  <h2 className={style.h1}> Height: {pokemon.height}</h2>}
   {pokemon.weight &&  <h2 className={style.h1}>Weight: {pokemon.weight}</h2>}
   <h2 className={style.h1}>Types:</h2>{pokemon.types && pokemon.types.map(p=><h3 className={style.type}>{p.name}</h3>)}
   </section>
   </div>
 )}

   </div>
   
  )
}

export default Detail
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import PokeContainer from "../../Components/PokemonContainer/PokeContainer"
import { sortAttack, sortName, filterOrigin, filterTypes, getTypes, getPokemons} from "../../Redux/actions"
import { ASC,DESC,AZ,ZA,DB,API,ALL,GET_TYPES } from "../../Redux/selector"
import style from './Home.module.css'
const Home = () => {
 

    const [order, setOrder]=useState()
   
    const [origin,setOrigin]=useState(); 
    const [types,setTypes]=useState()
//a traves de la importacion de useDispatch y de useEffect, se ejecuta el backend por redux y en el componente PokeContainer, se esta leyendo el estado global que genera redux, que se renderiza alli, y se muestra en home. 
  //en pokecontainer, está renderizando el useSelector, el hook de redux que lee el estado global 
  const dispatch=useDispatch();  
  
  const tipos = useSelector(state=>state.types)
  useEffect(()=>{
    dispatch(getTypes())
  },[dispatch])
 
function onSelectChange(e){
        e.preventDefault()
        if(e.target.value === ASC || e.target.value === DESC){
            dispatch(sortAttack(e.target.value))
            setOrder(e.target.value)
        }
        if(e.target.value === AZ || e.target.value === ZA){
            dispatch(sortName(e.target.value))
            setOrder(e.target.value)
        }
        if((e.target.value === DB || e.target.value === API || e.target.value === ALL)){
            setOrigin(e.target.value)
            dispatch(filterOrigin(e.target.value))
            console.log(e.target.value)
        }
        if(tipos.some(p=> p.name === e.target.value) || e.target.value === GET_TYPES){ dispatch(filterTypes(e.target.value, origin))
            setTypes(e.target.value)
            console.log(filterTypes(e.target.value,origin))}
            
        
        }
    const onClick = ()=>{
        setOrigin(ALL)
        setOrder("Default")
        setTypes(ALL)
        dispatch(getPokemons())
    }

  return (
    <div>
    <div className={style.filterM}> 
        <p className={style.textos}>Filters: {''}</p>
        <div className={style.filters}>
            </div>
            <div>
                <label for="source">Source:</label>
                <select id="source" className={style.select}onChange={onSelectChange} value={origin}>
                    <option className={style.option} value={ALL}>All</option>
                    <option className={style.option} value={DB}>My pokemons</option>
                    <option className={style.option} value={API}>Existing pokemons.</option>
                </select>
            </div>
            <div>
                <label htmlFor="types">Type:</label>
                <select id="types" className={style.select}onChange={onSelectChange} value={types} >
                    <option value = {GET_TYPES} className={style.option}>All</option>
                    {tipos?.map((e)=><option value={e.name} className={style.option} key={e.id}>
                        {e.name}
                    </option>)}
                </select>
            </div>
            <div>
                <label for="order">Order:</label>
                <select id="order" className={style.select}onChange={onSelectChange} value={order}>
                    <option disabled selected className={style.option}>Default</option>
                    <option value ={AZ} className={style.option}>A-Z</option>
                    <option value ={ZA} className={style.option}>Z-A</option>
                    <option value ={ASC}className={style.option}>WEAK Attack </option>
                    <option value ={DESC}className={style.option}> STRONG Attack</option>
                </select>
            </div>
            <button type="button" onClick={onClick}>CLEAR FILTERS</button>
    </div>

    <div><PokeContainer /></div>
    </div>
  )
}

export default Home
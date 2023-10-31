import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import PokeContainer from "../../Components/PokemonContainer/PokeContainer"
import { getPokemons, sortAttack, sortName, filterOrigin, filterTypes, ASC, DESC, AZ, ZA, DB, API, ALL, GET_TYPES, getTypes } from "../../Redux/actions"
import style from './Home.module.css'
const Home = () => {
 

const [origin,setOrigin]=useState() //a traves de la importacion de useDispatch y de useEffect, se ejecuta el backend por redux y en el componente PokeContainer, se esta leyendo el estado global que genera redux, que se renderiza alli, y se muestra en home. 
  //en pokecontainer, está renderizando el useSelector, el hook de redux que lee el estado global 
  const dispatch=useDispatch();  
  
  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);
  useEffect(()=>{
    dispatch(getTypes())
  },[dispatch])
  const tipos = useSelector(state=>state.types)
  
function onSelectChange(e){
        e.preventDefault()
        if(e.target.value === ASC || e.target.value === DESC){
            dispatch(sortAttack(e.target.value))
        }
        if(e.target.value === AZ || e.target.value === ZA){
            dispatch(sortName(e.target.value))
        }
        if((e.target.value === DB || e.target.value === API || e.target.value === ALL)){
            dispatch(filterOrigin(e.target.value))
            setOrigin(e.target.value)
        }
        if(tipos.some(p=> p.name === e.target.value) || e.target.value === GET_TYPES) dispatch(filterTypes(e.target.value,origin))
            
         console.log(e.target.value)   
        
        }
        

  return (
    <div>
    <div className={style.filterM}> 
        <p className={style.textos}>Filters: {''}</p>
        <div className={style.filters}>
            <div>
                <label for="types">Type:</label>
                <select id="types" className={style.select}onChange={onSelectChange}>
                    <option value = {GET_TYPES} className={style.option}>All</option>
                    {tipos?.map((e)=><option value={e.name} className={style.option} key={e.id}>
                        {e.name}
                    </option>)}
                </select>
            </div>
            </div>
            <div>
                <label for="source">Source:</label>
                <select id="source" className={style.select}onChange={onSelectChange}>
                    <option className={style.option} value={ALL}>All</option>
                    <option className={style.option} value={DB}>My pokemons</option>
                    <option className={style.option} value={API}>Existing pokemons.</option>
                </select>
            </div>
            <div>
                <label for="order">Order:</label>
                <select id="order" className={style.select}onChange={onSelectChange}>
                    <option disabled selected className={style.option}>Default</option>
                    <option value ={AZ} className={style.option}>A-Z</option>
                    <option value ={ZA} className={style.option}>Z-A</option>
                    <option value ={ASC}className={style.option}>Attack ᐱ</option>
                    <option value ={DESC}className={style.option}>Attack ᐯ</option>
                </select>
            </div>
    </div>

    <div><PokeContainer /></div>
    </div>
  )
}

export default Home
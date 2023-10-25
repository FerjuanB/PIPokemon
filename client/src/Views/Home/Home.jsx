import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import PokeContainer from "../../Components/PokemonContainer/PokeContainer"
import { getPokemons, sortAttack, sortName, filterOrigin, filterTypes, ASC, DESC, AZ, ZA, DB, API, ALL, GET_TYPES, getTypes } from "../../Redux/actions"

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
     
        <p className='textos'>Filters</p>
        <div className='filters'>{/*filtros y ordenamientos.*/}
            <div>
                <label for="types">Type:</label>
                <select id="types"onChange={onSelectChange}>
                    <option value = {GET_TYPES}>All</option>
                    {tipos?.map((e)=><option value={e.name} key={e.id}>
                        {e.name}
                    </option>)}
                </select>
            </div>
            </div>
      <div>
                <label for="source">Source:</label>
                <select id="source" onChange={onSelectChange}>
                    <option value={ALL}>All</option>
                    <option value={DB}>My pokemons</option>
                    <option value={API}>Existing pokemons.</option>
                </select>
            </div>
            <div>
                <label for="order">Order:</label>
                <select id="order"className="OrderSelect" onChange={onSelectChange}>
                    <option disabled selected>Default</option>
                    <option value ={AZ}>A-Z</option>
                    <option value ={ZA}>Z-A</option>
                    <option value ={ASC}>Attack ᐱ</option>
                    <option value ={DESC}>Attack ᐯ</option>
                </select>
            </div>
    <PokeContainer />
    </div>
  )
}

export default Home
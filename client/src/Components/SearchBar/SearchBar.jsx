import { useEffect } from 'react'
import { getPokemonsName,getPokemons } from '../../Redux/actions'
import {useDispatch} from 'react-redux'

const SearchBar = () => {
const dispatch = useDispatch()

useEffect(()=>{
  dispatch(getPokemons())
},[dispatch])
const onSearch = (e)=>{
  e.preventDefault()
  
}
const onSearchChange =(e)=>{
  const searchValue = e.target.value;

  if(searchValue.trim() === '') {
    dispatch(getPokemons())
  } else {
    dispatch(getPokemonsName(searchValue)) 
  }

}


  return (
    <div className='searchBar'>
    <form onSubmit={onSearch} placeholder= "Buscá un pokemon" className='searchForm'>
      <input className="searchbox" placeholder= "Buscá un pokemon" type="search" onChange={onSearchChange}/>
      <input type="submit" placeholder= "Buscá un pokemon" className='searchButton'/>
    </form>
    </div>
  )
}

export default SearchBar
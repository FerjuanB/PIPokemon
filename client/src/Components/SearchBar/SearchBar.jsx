import { useEffect } from 'react'
import { getPokemonsName,getPokemons } from '../../Redux/actions'
import {useDispatch} from 'react-redux'
import style from './SearchBar.module.css'
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
    <div className={style.searchBar}>
    <form onSubmit={onSearch}  className={style.searchForm}>
      <input className={style.searchbox} placeholder= "Insert an exact name..." type="search" onChange={onSearchChange}/>
      <input type="submit" value="Search" className={style.searchButton}/>
    </form>
    </div>
  )
}

export default SearchBar
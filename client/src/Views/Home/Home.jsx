import { useEffect,useState } from "react"
import { useDispatch } from "react-redux"

import { Pokemon } from "../../Components/Pokemon/Pokemon"
import PokeContainer from "../../Components/PokemonContainer/PokeContainer"
import { getPokemons } from "../../Redux/actions"

const Home = () => {
 
  const dispatch=useDispatch();  
  

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);
  return (
    <>
    <PokeContainer />
    </>
  )
}

export default Home
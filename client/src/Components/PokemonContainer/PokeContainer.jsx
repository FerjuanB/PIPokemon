import style from './PokeContainer.module.css'
import { Pokemon } from "../Pokemon/Pokemon"
import { selectPaginatedPokemons } from '../../Redux/selector'
import Pagination from "./Pagination/Pagination"
import {setPage} from '../../Redux/actions'
import { useDispatch, useSelector } from "react-redux"
const PokeContainer = () => {
 
  
const dispatch = useDispatch();


const {page,filteredPoke} = useSelector((state=>state))
const pokemonsState = useSelector(selectPaginatedPokemons);

const max = Math.ceil(filteredPoke.length / 12)
const handlePageChange = (newP)=>{
  dispatch(setPage(newP))
}
    return (
    <div className={style.mCont}>
        <Pagination page={page} setPage={handlePageChange} total={max}/>
    <div className={''}>
     {filteredPoke.length >0  && <div className={style.contPoke}>
      {pokemonsState
       .map(u =>
        <Pokemon 
        key={u.id}
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
        )}
      </div>}
    </div>
    </div>
  )
}

export default PokeContainer
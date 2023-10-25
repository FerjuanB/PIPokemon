
import { Link } from 'react-router-dom'
import style from './Pokemon.module.css'
export const Pokemon = (props) => {
  return (
    <div className={style.mainCard}>
    
 <img src={props.image} alt="" /> 

<Link to={`/detail/${props.id}`}>
<p>Name:{props.name}</p>
</Link>
<p>Types: {props.types.map((type, index) => (
        <span key={index}>{type.name} {''}</span>
      ))}</p>      
</div>
  )
}

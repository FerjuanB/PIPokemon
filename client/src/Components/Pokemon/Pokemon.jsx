
import { Link } from 'react-router-dom'
import style from './Pokemon.module.css'
const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
electric: '#FCF7DE',
water: '#DEF3FD',
ground: '#f4e7da',
rock: '#d5d5d4',
fairy: '#fceaff',
poison: '#98d7a5',
bug: '#f8d5a3',
dragon: '#97b3e6',
psychic: '#eaeda1',
flying: '#F5F5F5',
fighting: '#E6E0D4',
normal: '#F5F5F5'
}




export const Pokemon = (props) => {
const p = props.types.map((t)=>t.name.toLowerCase())  
const type = p.find((t) => colors[t])

const backgroundColor = type ? colors[type] : '#ffffff';


return (
<div className={style.mainCard} style= {{backgroundColor}}>
 
 <div className={style.imgCont}> 
 <img src={props.image} className={style.img} alt="" /> 
  </div>   
<div className={style.info}>
<Link to={`/detail/${props.id}`}>
<h3 className={style.name}>{props.name}</h3>
</Link>
<small className={style.types}>Types: {props.types.map((type, index) => (
  <p className={style.type}key={index}>{type.name} {''}</p>
  ))}</small>      
  </div >
  
</div>
  )
}

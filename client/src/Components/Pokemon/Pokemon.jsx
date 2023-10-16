import style from './Pokemon.module.css'
export const Pokemon = (props) => {
  return (
    <div className={style.mainCard}>
    
 <img src={props.image} alt="" />   
<p>Name:{props.name}</p>
<p>Types: {props.types.map((type, index) => (
        <span key={index}>{type.name} {''}</span>
      ))}</p>      
</div>
  )
}

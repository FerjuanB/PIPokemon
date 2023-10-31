
import axios from "axios"
import { useState, useEffect } from "react"
import { getTypes } from "../../Redux/actions"
import { useDispatch,useSelector } from "react-redux"
import style from './Form.module.css'
import validation from "./validation"

const Form = () => {

  const [form,setForm] = useState({
    name:"",
    image:"",
    attack:"",
    defense:"",
    speed:"",
    height:"",
    weight:"",
    type:[]
  })

const[error,setError] = useState({
  name:"El nombre es requerido"
})





const changeHandler = (e)=>{
const property = e.target.name;
const value = e.target.value;
setForm((prev)=>{
const newS = {
  ...prev,
  [property]:value
};
setError(validation(newS));
return newS;
}); 
}

const changeTypesHandler = (t) => {
  if (form.type.length < 2) {
     setForm((prevS) => {
       let newS = {
         ...prevS,
         type: [...prevS.type, t.target.value]
       };
       setError(validation(newS))
       return newS 
      });
   }else{
     alert("Máximo 2 tipos por Pokemon!")
     
   }
 };
 const removeTypeHandler = (index) => {
   setForm((prevState) => {
     const newTipos = [...prevState.type];
     newTipos.splice(index, 1);
     return {
       ...prevState,
       type: newTipos
     };
   });
 };
 

//*manejo de los types desde el estado global. 
const dispatch = useDispatch();
useEffect(()=>{
dispatch(getTypes())
},[dispatch])
const types = useSelector(state=>state.types)



const submitHandler = (e)=>{
  e.preventDefault()
  if(error.name|| error.image|| error.attack|| error.defense|| error.type)
  {
    alert("Debés completar los campos Nombre, Imagen, Ataque, Defensa, Tipos, antes de crear un nuevo Pokemon")
    return;
  }
  alert(`seguro que quiere crear el pokemon ${form.name}?`)

  axios.post("http://localhost:3001/pokemons",form)
  .then(res=>
    {
      alert(`Pokemon ${form.name} creado exitosamente!`)
     setForm({
        name: "",
        image: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        type: []
      });})
  .catch(err=>alert(err))
}


return (
  

  <form onSubmit={submitHandler} className={style.formB}>
  <h1 className={style.h1}>Crea tu propio Pokemon</h1>
    <div className={style.nombreDiv}>
      <label className={style.label}>Nombre:{" "}</label>
      <input
      className={style.input} 
      type="text" 
      value={form.name} 
      onChange={changeHandler} 
      name="name" 
      placeholder="nombre del pokemon"/>
      {error.name && <span className={style.errorN}>{error.name}</span>}
    </div>

    <div className={style.img}>
      <label className={style.label}>Imagen:{" "}</label>
      <input 
      className={style.input}
      type="text" 
      value={form.image} 
      onChange={changeHandler}
      name="image" 
      placeholder="debe ser una URL"/>
    {error.image && <span className={style.errorN}>{error.image}</span>} 

    </div>

    <div className={style.ataque}>
      <label className={style.label}>Ataque:{" "}</label>
      <input 
      className={style.input}
      type="text" 
      value={form.attack} 
      placeholder="Colocá un valor (max 100)"
      onChange={changeHandler}
      name="attack"/>
      {error.attack && <span className={style.errorN}>{error.attack}</span>}
    </div>
    <div className={style.defensa}>
      <label className={style.label}>Defensa:{" "}</label>
      <input
      className={style.input} 
      type="text" 
      value={form.defense} 
      placeholder="Colocá un valor (max 100)"
      onChange={changeHandler} 
      name="defense"/>
      {error.defense && <span className={style.errorN}>{error.defense}</span>}
    </div>
    <div className={style.velocidad}>
      <label className={style.label}>Velocidad:{" "}</label>
      <input 
      className={style.input}
      type="text" 
      placeholder="No obligatorio"
      value={form.speed} 
      onChange={changeHandler}name="speed"/>
      {error.speed && <span className={style.errorN}>{error.speed}</span>} 

    </div>
    <div className={style.altura}>
      <label className={style.label}>Altura:{" "}</label>
      <input 
      className={style.input}
      type="text" 
      value={form.height} 
      onChange={changeHandler}
      placeholder="Colocá un valor (max 100)"
      name="height"/>
      {error.height && <span className={style.errorN}>{error.height}</span>} 

    </div>
    <div className={style.peso}>
      <label>Peso:{" "}</label>
      <input 
      className={style.input}
      type="text"
      value={form.weight} 
      onChange={changeHandler}
      placeholder="Colocá un valor (max 100)"
      name="weight"/>
      {error.weight && <span className={style.errorN}>{error.weight}</span>} 

    </div> 
    <div className={style.tipos}>
  <label>Tipos:{" "}</label>
  <select
  className={style.select}
    type="text"
    value={form.type}
    onChange={changeTypesHandler}
    name="type"
  >
    <option>Seleccione:</option>
    {types?.map((t) => (
      <option key={t.id}>{t.name}</option>
    ))}
  </select>
  <span>{form.type.map((type, index) => (
    <span key={index}>
      {type}
      <button
      className={style.button}
      type="button"
      onClick={() => removeTypeHandler(index)}
      >
        X
      </button>
      {index < form.type.length - 1 && ", "}
    </span>
  ))}</span>
  {error.type && <span>{error.type}</span>}
</div>

    <button type="submit">CREÁ TU POKEMON!</button>
</form>
  )
}



export default Form
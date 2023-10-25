
import axios from "axios"
import { useState, useEffect } from "react"
import { getTypes } from "../../Redux/actions"
import { useDispatch,useSelector } from "react-redux"



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
  name:"",
  image:"",
  attack:"",
  defense:"",
  type:[]
})

  const changeHandler = (e)=>{
    
  const property = e.target.name;
  const value = e.target.value;
  // Validar antes de llamar a setForm
  
isValid({...form,[property]:value});  
setForm({...form,[property]:value}) 
}


const isValid = (url) => {
  const urlRegex = new RegExp(
    /^(https?:\/\/)?(www\.)?[a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/
  );
  const nameReg= new RegExp(
    /^[a-zA-Z0-9\s]+$/
  )
  const numReg = new RegExp(
    /^(?:100|\d{1,2})$/
  )
  
nameReg.test(url.name)?setError({...error,name:""}):setError({...error,name:"El nombre debe tener sólo letras y/o numeros!"})
if(url.name.length===0)setError({...error,name:"Nombre Vacío"})

urlRegex.test(url.image)? setError({...error,image:""}):setError({...error,image:"la Url de la imagen debe ser una URL válida"})
if(url.image.length===0)setError({...error,image:"URL de imagen vacia" })

numReg.test(url.attack)?setError({...error,attack:""}):setError({...error,attack:"Deben ser un numero menor o igual a 100"})  
if(url.attack.length===0)setError({...error,attack:"Debes colocar un valor"})

numReg.test(url.defense)?setError({...error,defense:""}):setError({...error,defense:"Deben ser un numero menor o igual a 100"})  
if(url.defense.length===0)setError({...error,defense:"Debes colocar un valor"})

}


//*manejo de los types desde el estado global. 
const dispatch = useDispatch();
useEffect(()=>{
  dispatch(getTypes())
},[dispatch])
const types = useSelector(state=>state.types)

const changeTypesHandler = (t) => {
 if (form.type.length < 2) {
    setForm((prevState) => {
      return {
        ...prevState,
        type: [...prevState.type, t.target.value]
      };
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

const submitHandler = (e)=>{
  e.preventDefault()
  if(error.name || error.image || error.attack || error.defense || form.type.length === 0)
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
<form onSubmit={submitHandler}>
    <div>
      <label>Nombre:{" "}</label>
      <input 
      type="text" 
      value={form.name} 
      onChange={changeHandler} 
      name="name" 
      placeholder="nombre del pokemon"/>
      {error.name && <span>{error.name}</span>}
    </div>

    <div>
      <label>Imagen:{" "}</label>
      <input 
      type="text" 
      value={form.image} 
      onChange={changeHandler}
      name="image" 
      placeholder="debe ser una URL"/>
    {error.image && <span>{error.image}</span>} 

    </div>

    <div>
      <label>Ataque:{" "}</label>
      <input 
      type="text" 
      value={form.attack} 
      placeholder="Colocá un valor (max 100)"
      onChange={changeHandler}
      name="attack"/>
      {error.attack && <span>{error.attack}</span>}
    </div>
    <div>
      <label>Defensa:{" "}</label>
      <input 
      type="text" 
      value={form.defense} 
      placeholder="Colocá un valor (max 100)"
      onChange={changeHandler} 
      name="defense"/>
      {error.defense && <span>{error.defense}</span>}
    </div>
    <div>
      <label>Velocidad:{" "}</label>
      <input 
      type="text" 
      placeholder="No obligatorio"
      value={form.speed} 
      onChange={changeHandler}name="speed"/>
    </div>
    <div>
      <label>Altura:{" "}</label>
      <input 
      type="text" 
      value={form.height} 
      onChange={changeHandler}
      placeholder="No obligatorio"
      name="height"/>
      
    </div>
    <div>
      <label>Peso:{" "}</label>
      <input 
      type="text"
      value={form.weight} 
      onChange={changeHandler}
      placeholder="No obligatorio"
      name="weight"/>
    </div> 
    <div>
  <label>Tipos:{" "}</label>
  <select
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
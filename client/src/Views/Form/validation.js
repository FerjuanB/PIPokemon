
export default function validation(state){
  const errors = {};
  
 console.log(state.name)


if(!state.name){
  errors.name= 'El campo nombre debe ser completado.';
}else if(!/^[a-z0-9]+$/i.test(state.name)){
  errors.name= 'Nombre puede llevar sólo letras y números y sin espacios.'
}
// else if(
//   pokemons.some(p => p.name.toLowerCase() === state.name.toLowerCase())){
// errors.name='Ese nombre ya existe! Elige un nombre diferente'
//   }


if(!state.image){
  errors.image= 'El campo imagen debe ser completado.';
}else if(!/^(?:([^:/?#]+):)?(?:([^/?#]*))?([^?#]*\.(?:jpg|gif|png|webp))(?:\?([^#]*))?(?:#(.*))?$/gm.test(state.image)){
  errors.image= 'Imagen es invalido: debe ser una url de imagen.';
};

if(!state.attack){
  errors.attack= 'El campo Ataque es requerido.';
}else if(!Number(state.attack) || state.attack < 0 || state.attack > 100){
  errors.attack='Ataque es invalido: debe ser un valor de 1 a 100.';
};

if(!state.defense){
  errors.defense= 'El campo Defensa es requerido.';
}else if(!Number(state.defense) || state.defense < 0 || state.defense > 100){
  errors.defense='Defensa es invalido: debe ser un valor de 1 a 100.';
};

if(!state.speed){
  errors.speed= 'El campo Velocidad es requerido.';
}else if(!Number(state.speed) || state.speed < 0 || state.speed > 100){
  errors.speed='Velocidad es invalido: debe ser un valor de 1 a 100.';
};

if(!state.height){
  errors.height= 'El campo Altura es requerido.';
}else if(!Number(state.height) || state.height < 0 || state.height > 100){
  errors.height='Altura is invalido: Debe ser un valor de 1 a 100.';
};

if(!state.weight){
  errors.weight= 'El campo Peso es requerido.';
}else if(!Number(state.weight) || state.weight < 0 || state.weight > 100){
  errors.weight='Peso es invalido: Debe ser un valor de 1  a 100.';
};

if(!state.type.length){
  errors.type= "Debes seleccionar al menos un tipo para tu Pokemon"
}

return errors
}
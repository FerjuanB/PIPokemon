import { GET_POKEMONS, GET_POKEMON_ID, FILTER_BY_SOURCE } from "./actions";

const initialState= {
    pokemons: []  
};

const rootReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case GET_POKEMONS:
            return{...state,pokemons:payload}
        case GET_POKEMON_ID:
            return{...state,pokemons:payload}
        case FILTER_BY_SOURCE:
            return{...state,pokemons:payload}
        default:
            return{...state}
    }
}

export default rootReducer;
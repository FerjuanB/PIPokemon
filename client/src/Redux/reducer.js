import { GET_POKEMONS, GET_POKEMON_ID, GET_TYPES, SET_PAGE, ASC, AZ, API, DB,ALL,SORTATTACK,SORTNAME,FILTERORIGIN,FILTER_TYPES,FILTER_NAME, CLEAR_POKEMON } from "./selector";

const initialState= {
    pokemons: [],
    filteredPoke:[],
    pokemon:{},
    types:[],
    page: 1, 
    perPage: 12    
};

const rootReducer=(state=initialState,{type,payload,data})=>{
    switch(type){
        case GET_POKEMONS:
            return{...state,pokemons:payload,filteredPoke:payload}
        case GET_POKEMON_ID:
            return{...state,pokemon:payload}
        case CLEAR_POKEMON:
            return{
                ...state,
                pokemon:{}
            }    
        case FILTER_NAME:
            return {...state, filteredPoke: payload?[payload]:[]}   
        case GET_TYPES:
            return {...state,types:payload}
        case SET_PAGE:
            return {...state,page:payload}
        case SORTATTACK:
            let orderedAttack = payload === ASC? state.pokemons.sort(function(a,b){
            if(a.attack > b.attack) return 1;
            if(a.attack < b.attack) return -1;
            return 0
            }) : 
            state.pokemons.sort(function(a,b){
                if(a.attack > b.attack) return -1;
                if(a.attack < b.attack) return 1;
                return 0
                });
                console.log(orderedAttack)
            return{
                ...state,filteredPoke: orderedAttack}
    
        case SORTNAME:
                let orderedName = payload === AZ? state.pokemons.sort(function(a, b){
                    if (a.name.toLowerCase()>b.name.toLowerCase()) return 1;
                    if (a.name.toLowerCase()<b.name.toLowerCase()) return -1;
                    return 0
                }) : state.pokemons.sort(function(a, b){
                    if (a.name.toLowerCase()>b.name.toLowerCase()) return -1;
                    if (a.name.toLowerCase()<b.name.toLowerCase()) return 1;
                    return 0
                })
                return{
                    ...state,filteredPoke: orderedName}
        
        case FILTERORIGIN:
            let filteredOrigin = []
            if(payload === API){
                filteredOrigin = state.pokemons.filter(f => f.created === false)
                        }
            if (payload === DB) {
                filteredOrigin = state.pokemons.filter(f=> f.created === true)} 
            if(payload === ALL) {
                filteredOrigin = state.pokemons}
            
                return{...state, filteredPoke: filteredOrigin}
        
        case FILTER_TYPES:
            let filteredTypes = []
            console.log(data)
            if(data === API ){
                filteredTypes= payload === GET_TYPES? state.pokemons.filter(el=>el.created ===false): state.pokemons.filter(p=> p.types.some(t =>t.name === payload) && p.created===false)
        }   else if(data === DB ){
                filteredTypes= payload === GET_TYPES ? state.pokemons.filter(p=>p.created===true):state.pokemons.filter(p=> p.types.some(t =>t.name === payload) && p.created===true)}
                else if((data === GET_TYPES || data === ALL||data === undefined )){filteredTypes= payload === GET_TYPES || payload === ALL? state.pokemons : state.pokemons.filter(p=> p.types.some(t =>t.name === payload)) }
               
                                console.log(filteredTypes)
   
                return{
                        ...state,
                        filteredPoke: filteredTypes
                    }
        default:
            return{...state}
    }
}

export default rootReducer;
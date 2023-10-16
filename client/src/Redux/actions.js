    import axios from "axios"

    export const GET_POKEMONS ="GET_POKEMONS"
    export const GET_POKEMON_ID="GET_POKEMON_ID"
    export const FILTER_BY_SOURCE="FILTER_BY_SOURCE"

    export const getPokemons = () =>{
        return async function (dispatch){
            const pokeApi= (await axios.get("http://localhost:3001/pokemons")).data
            dispatch({type: GET_POKEMONS,payload: pokeApi})
        }
    }

    export const getPokemonsId = (id) =>{
        return async function (dispatch){
            const pokeApi= await axios.get(`http://localhost:3001/pokemons/${id}`)
            const pokemon = pokeApi.data;
            dispatch({type:GET_POKEMON_ID, payload:pokemon})
        }
    }
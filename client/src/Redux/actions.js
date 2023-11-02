import axios from "axios"

import { GET_POKEMONS, GET_POKEMON_ID, GET_TYPES, SET_PAGE,SORTATTACK,SORTNAME,FILTERORIGIN,FILTER_TYPES,FILTER_NAME, CLEAR_POKEMON} from "./selector";
;

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
    export const clearPokemon = () => ({
        type: CLEAR_POKEMON,
      });
    export const getPokemonsName = (name) => {
        return (dispatch, getState) => {
          const allPokemons = getState().pokemons; 
          const filtered = allPokemons.find(p => p.name ===name)   
          dispatch({
            type: FILTER_NAME,
            payload: filtered
          })
        }
      }
  

    export const getTypes = ()=>{
        return async function (dispatch){
            const pokeTypes = (await axios.get("http://localhost:3001/types")).data
            dispatch({type:GET_TYPES, payload:pokeTypes})
        }
    }


    export const setPage = (page) => {
        return {
            type: SET_PAGE,
            payload: page 
        } 
    }

    export function sortAttack(order){
        return {
            type: SORTATTACK,
            payload:order
        }
    }
    
    export function sortName(order){
        return{
            type: SORTNAME,
            payload: order
        }
    }

    export function filterOrigin(origin){
        return{
            type: FILTERORIGIN,
            payload: origin
        }
    }
    
    export function filterTypes(type, origin){
        return{
            type:FILTER_TYPES,
            payload:type,
            data:origin
        
        }
    }

    
    
    
import axios from "axios"

export const GET_POKEMONS ="GET_POKEMONS"
export const GET_POKEMON_ID="GET_POKEMON_ID"
export const FILTER_NAME="FILTER_NAME"
export const GET_TYPES = "GET_TYPES"
export const SET_PAGE = "SET_PAGE"
export const ASC = "ASC";
export const DESC = 'DESC';
export const AZ = 'A-Z'
export const ZA = "Z-A"
export const API = 'API'
export const DB = 'DB'
export const ALL = 'ALL'
export const SORTATTACK = 'SORTATTACK'
export const SORTNAME = 'SORTNAME'
export const FILTERORIGIN = 'FILTER_ORIGIN'
export const FILTER_TYPES = 'FILTER_TYPES'
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

    
    
    
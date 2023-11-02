
export const selectPaginatedPokemons = state => {
    const start = (state.page - 1) * state.perPage;
    const end = start + state.perPage;

    return state.filteredPoke.slice(start, end); 
  
}

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
export const CLEAR_POKEMON ='CLEAR_POKEMON'
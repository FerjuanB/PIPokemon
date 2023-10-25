
export const selectPaginatedPokemons = state => {
    const start = (state.page - 1) * state.perPage;
    const end = start + state.perPage;

    return state.filteredPoke.slice(start, end); 
  
}


// import pokemons from './pokemon.json';

let pokemons = [];

export async function initPokemons() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
  const data = await response.json();
  pokemons = data.results;
}

export async function getPokemonDetails(pokemonUrl) {
  const response = await fetch(pokemonUrl);
  const data = await response.json();
  return data;
}

export function getAllPokemons() {
  return pokemons;
}

export function getPokemonsByName(pokemonName) {
  const normalizedName = pokemonName.toLowerCase();
  const getPokemons = pokemons.filter(function(pokemon) {
    const normalizedPockemonName = pokemon.name.toLowerCase();
    return normalizedPockemonName.startsWith(normalizedName);
  });
  return getPokemons;
  /**
   * pokemonName is unused.
   * You could use this property to filter the pokemons by name.
   * Take a look: Array.prototype.filter()
   *
   * Try to return all pokemons which starts with the name like: `pik` -> `Pikachu`, `Pikipek`.
   * It should be case independend.
   */
}
// console.log(getPokemonsByName(pokemons, 'pik'));

export function sortPokemonsByName(pokemons, sortDirection = 'ASC') {
  /**
   * `sortDirection` could be `ASC` or `DESC`. Try to reverse the results if `sortDirection` is `DESC`.
   *
   * See Array.prototype.sort()
   */
  const sortedPokemons = pokemons.sort(function(pokemonA, pokemonB) {
    const nameA = pokemonA.name.toLowerCase();
    const nameB = pokemonB.name.toLowerCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  if (sortDirection === 'DESC') {
    sortedPokemons.reverse();
  }

  return sortedPokemons;
}

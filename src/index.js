//required to use async/await
import 'babel-polyfill';

import {
  setChild,
  resetInput,
  createPokemonElements,
  createNoPokemons
} from './api/elements';

import {
  getAllPokemons,
  getPokemonsByName,
  sortPokemonsByName,
  initPokemons
} from './api/pokemons';

initPokemons().then(start);
function start() {
  // Query elements
  const searchInput = document.querySelector('.search__input');
  const resultsElement = document.querySelector('.results');

  // Get all Pokemons

  const allPokemons = getAllPokemons();
  const allSortedPokemons = sortPokemonsByName(allPokemons);

  // Reset input and results
  resetInput(searchInput);
  const allPokemonsElement = createPokemonElements(allSortedPokemons);
  setChild(resultsElement, allPokemonsElement);

  // Add event listeners

  /**
   * Find the correct event to listen for input changes.
   */
  searchInput.addEventListener('input', event => {
    const searchValue = event.target.value;
    const pokemons = getPokemonsByName(searchValue);

    if (pokemons.length > 0) {
      const sortedPokemons = sortPokemonsByName(pokemons);
      const pokemonElements = createPokemonElements(sortedPokemons);
      setChild(resultsElement, pokemonElements);
    } else {
      setChild(resultsElement, createNoPokemons());
    }
    /**
     * You can verify that this event is fired in the Browser console.
     * Can you find the value of searchInput in this event?
     */

    /**
     * Search for your pokemons now, create elements and add them to your results.
     */
  });

  /**
   * Later, you can add sort functionality.
   */
}

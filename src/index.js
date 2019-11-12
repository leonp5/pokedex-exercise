import {
  createNoPokemons,
  setChild,
  resetInput,
  createPokemonElements
} from './api/elements';

import { getAllPokemons, getPokemonsByName } from './api/pokemons';

// Query elements
const searchInput = document.querySelector('.search__input');
const resultsElement = document.querySelector('.results');

// Get all Pokemons

const allPokemons = getAllPokemons();

// Reset input and results
resetInput(searchInput);
const allPokemonsElement = createPokemonElements(allPokemons);
setChild(resultsElement, allPokemonsElement);

// Add event listeners

/**
 * Find the correct event to listen for input changes.
 */
searchInput.addEventListener('input', event => {
  /**
   * You can verify that this event is fired in the Browser console.
   * Can you find the value of searchInput in this event?
   */
  console.log('Great! This event is fired:', event.target.value);

  /**
   * Search for your pokemons now, create elements and add them to your results.
   */
});

/**
 * Later, you can add sort functionality.
 */

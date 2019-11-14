import {
  setChild,
  resetInput,
  createPokemonElements,
  createNoPokemons,
  sortPokemonsByName
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
  const searchValue = event.target.value;

  // console.log('Great! This event is fired:', searchValue);

  // resultsElement.innerHTML = '';

  const pokemons = getPokemonsByName(searchValue);
  const pokemonElements = createPokemonElements(pokemons);
  if (pokemons.length > 0) {
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

/* export function setupCounter(element) {
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
} */

import { fetchPokemon } from "./fetchPokemon";

export async function pokemonList() {
  const pokemonBlocks = [];
  const pokemonData = await fetchPokemon();
  console.log(pokemonData);
  /*   for (let index = 1; index <= 6; index++) {
    list.push(`
    <div class="pokemon">
      <p>${index}</p>
    </div>
  `);
  } */
  pokemonData.forEach((pokemon) => {
    pokemonBlocks.push(`
    <div class="pokemon">
    <img src="${pokemon.sprites.regular}" alt="Sprite of ${pokemon.name.en}">
      <p>#${pokemon.pokedex_id} ${pokemon.name.en}</p>
    </div>
  `);
  });
  document.querySelector(".container").innerHTML = pokemonBlocks.join("");
}

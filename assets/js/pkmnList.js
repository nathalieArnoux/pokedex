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
  const pokemonData = await fetchPokemon();
  console.log(pokemonData);

  // first method using map function, had a risk of XSS attacks?
  // map rather than forEach because I'm *transforming* data from an array into a string
  // join function at the end, to concatenate array elements without any separator

  /* document.querySelector(".container").innerHTML = pokemonData
    .map((pokemon) => {
      return `
    <div class="pokemon">
      <img src="${pokemon.sprites.regular}" alt="Sprite of ${pokemon.name.en}">
      <p>#${pokemon.pokedex_id} ${pokemon.name.en}</p>
    </div>
  `;
    })
    .join(""); */

  // second method, deemed safer, using createElement & appendChild
  // forEach because I'm not transforming the array's data anymore, just updating the DOM
  // should be better performance-wise, since less HTML parsing + optimized rendering + better memory management by adding elements incrementally

  const container = document.querySelector(".container");

  pokemonData.forEach((pokemon) => {
    const pokemonDiv = document.createElement("div"); // creates a div of class pokemon
    pokemonDiv.classList.add("pokemon");

    const img = document.createElement("img"); // creates image of the pokemon
    img.src = pokemon.sprites.regular;
    img.alt = `Sprite of ${pokemon.name.en}`;

    const p = document.createElement("p"); // creates number and name of the pokemon
    p.textContent = `#${pokemon.pokedex_id} ${pokemon.name.en}`;

    pokemonDiv.appendChild(img); // adds the image first
    pokemonDiv.appendChild(p); // adds the text after

    container.appendChild(pokemonDiv); // adds pokemon div as the last child of container
    // then loops for each pokemon
  });
}

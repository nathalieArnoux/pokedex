import { fetchPokemonList } from "./fetchPokemon";
import { routerBase } from "/assets/js/routerBase";

export async function pokemonList() {
  const h2 = document.createElement("h2");
  h2.textContent = "Kanto Dex";
  document.querySelector("header").appendChild(h2);

  const wrapper = document.querySelector(".wrapper");
  const pokemonListContainer = document.createElement("div");
  pokemonListContainer.id = "pokemonListContainer";
  wrapper.appendChild(pokemonListContainer);

  const pokemonData = await fetchPokemonList();

  pokemonData.forEach((pokemon) => {
    const pokemonLink = document.createElement("a"); // creates the link on the whole div
    pokemonLink.classList.add("pokemon");
    pokemonLink.href = `${routerBase}/#/pokemon/${pokemon.pokedex_id}`;

    const img = document.createElement("img"); // creates image of the pokemon
    img.src = pokemon.sprites.shiny;
    img.alt = `Sprite of ${pokemon.name.en}`;

    const p = document.createElement("p"); // creates number and name of the pokemon
    p.textContent = `#${pokemon.pokedex_id} ${pokemon.name.en}`;

    pokemonLink.appendChild(img); // adds the image first
    pokemonLink.appendChild(p); // adds the text after

    pokemonListContainer.appendChild(pokemonLink); // adds pokemon div as the last child of container
    // then loops for each pokemon
  });
}

/* 
pokemonLink.addEventListener("click", (event) => {
  event.preventDefault();
  handleRoute();
}); */

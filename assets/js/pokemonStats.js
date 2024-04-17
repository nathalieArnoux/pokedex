import { fetchPokemon } from "./fetchPokemon";
import { routerBase } from "/assets/js/routerBase";

export async function pokemonStats(pokemonID) {
  console.log(pokemonID);
  const pokemon = await fetchPokemon(pokemonID);
  console.log(pokemon);

  // back link
  const back = document.createElement("a");
  back.textContent = "← Go back";
  back.href = `${routerBase}/`;
  back.classList.add("backLink");
  document.querySelector("header").appendChild(back);

  // page title
  const h2 = document.createElement("h2");
  h2.textContent = `${pokemon.name.en}`;
  h2.classList.add("statsTitle");
  document.querySelector("header").appendChild(h2);

  // container for page data
  const wrapper = document.querySelector(".wrapper");
  const pokemonStatsContainer = document.createElement("div");
  pokemonStatsContainer.id = "pokemonStatsContainer";
  wrapper.appendChild(pokemonStatsContainer);

  // left part of page
  const aside = document.createElement("aside"); // aside container

  const img = document.createElement("img"); // pokemon image
  img.src = pokemon.sprites.shiny;
  img.alt = `Sprite of ${pokemon.name.en}`;

  // building left side
  aside.appendChild(img);

  // right side of page
  const section = document.createElement("section"); // section container
  section.classList.add("stats-section");

  const pokemonName = document.createElement("h3"); // pokemon name
  pokemonName.textContent = `#${pokemonID} ${pokemon.name.en}`;

  const typeList = document.createElement("div"); // types
  typeList.classList.add("typeList");
  pokemon.types.forEach((type) => {
    const typeImg = document.createElement("img");
    typeImg.src = type.image;
    typeImg.alt = `Sprite of ${type.name} type`;
    typeList.appendChild(typeImg);
  });

  const statistics = document.createElement("h4"); // stats title
  statistics.textContent = "Statistics";

  const statsContainer = document.createElement("div"); // stats container
  statsContainer.classList.add("statsContainer");

  //! tests

  let statIndex = 0;
  const stats = [
    "HP",
    "Attack",
    "Defense",
    "Special Attack",
    "Special Defense",
    "Speed",
  ];

  Object.values(pokemon.stats).forEach((stat) => {
    // create each stat container
    const statContainer = document.createElement("div");
    statContainer.classList.add("statContainer");

    // stat name
    const statName = document.createElement("p");
    statName.textContent = stats[statIndex];
    statName.classList.add("statName");
    statContainer.appendChild(statName);

    // stat value
    const statValue = document.createElement("p");
    statValue.textContent = stat;
    statValue.classList.add("statValue");
    statContainer.appendChild(statValue);

    // bars
    const fullBar = document.createElement("div");
    fullBar.classList.add("fullBar");
    const progressBar = document.createElement("div");
    progressBar.classList.add("progressBar");
    progressBar.style.width = `${(stat * 100) / 255}%`;
    fullBar.appendChild(progressBar);
    statContainer.appendChild(fullBar);

    statsContainer.appendChild(statContainer); // add everything to the stats container

    statIndex = statIndex + 1; // increment index each loop
  });

  // pseudo code
  // statsContainer
  //    div HP
  //        statName HP
  //        statValue xx
  //        fullbar
  //            progressBar

  // building right side
  section.appendChild(pokemonName);
  section.appendChild(typeList);
  section.appendChild(statistics);
  section.appendChild(statsContainer);

  // building page
  pokemonStatsContainer.appendChild(aside);
  pokemonStatsContainer.appendChild(section);
}

/* // list of stat names
const stats = [
  "HP",
  "Attack",
  "Defense",
  "Special Attack",
  "Special Defense",
  "Speed",
];
stats.forEach((stat) => {
  const statName = document.createElement("p");
  statName.textContent = stat;
  statName.classList.add("statName");
  statsContainer.appendChild(statName);
});

// list of stat values
Object.values(pokemon.stats).forEach((stat) => {
  const statValue = document.createElement("p");
  statValue.textContent = stat;
  statValue.classList.add("statValue");
  statsContainer.appendChild(statValue);
});

Object.values(pokemon.stats).forEach((stat) => {
  const fullBar = document.createElement("div"); // create full stat bar
  fullBar.classList.add("fullBar");
  const progressBar = document.createElement("div"); // create stat bar over 255
  progressBar.classList.add("progressBar");
  progressBar.style.width = `${(stat * 100) / 255}%`;

  fullBar.appendChild(progressBar); // add progress bar to stat bar
  statsContainer.appendChild(fullBar); // add stat bars to the list
});
 */

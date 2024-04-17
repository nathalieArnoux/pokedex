import "../css/style.css";
import { pokemonList } from "./pokemonList";
import { pokemonStats } from "./pokemonStats";
import { error404 } from "./error404";

export function handleRoute() {
  const path = window.location.pathname.replace("/pokedex", "");
  console.log(path);

  const match = path.match(/^\/pokemon\/(\d+)$/) || false;
  // saves the path as match[0] (ex: /pokemon/25)
  // saves the pokemon ID as match[1]
  // false by default if no match (null and undefined not working)

  switch (path) {
    case "/":
      pokemonList();
      break;
    case `/pokemon/${match[1]}`:
      pokemonStats(match[1]);
      break;
    default:
      error404();
      break;
  }
}

window.addEventListener("DOMContentLoaded", handleRoute);

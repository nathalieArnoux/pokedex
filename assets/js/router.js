import "../css/style.css";
import { pokemonList } from "./pokemonList";
import { pokemonStats } from "./pokemonStats";
import { error404 } from "./error404";

function clearContent() {
  const pageWrapper = document.querySelector(".wrapper");
  while (pageWrapper.firstChild) {
    // loops as long as there's a firstChild
    pageWrapper.removeChild(pageWrapper.firstChild);
  }
}

export function handleRoute() {
  const hash = window.location.hash.slice(1);
  console.log(hash);

  const match = hash.match(/^\/pokemon\/(\d+)$/) || false;
  // saves the path as match[0] (ex: /pokemon/25)
  // saves the pokemon ID as match[1]
  // false by default if no match (null and undefined not working)

  switch (hash) {
    case "":
    case "/":
      clearContent();
      pokemonList();
      break;
    case `/pokemon/${match[1]}`:
      clearContent();
      pokemonStats(match[1]);
      break;
    default:
      clearContent();
      error404();
      break;
  }
}

window.addEventListener("hashchange", handleRoute);
window.addEventListener("DOMContentLoaded", handleRoute);

import "../css/style.css";
import { pokemonList } from "./pkmnList.js";
// ? import { setupCounter } from './counter.js'

function main() {
  console.log("init");
  pokemonList();
}

// ? setupCounter(document.querySelector('#counter'))

/* document.querySelector('#app').innerHTML = `
  <div>
    <p>Test</p>
  </div>
` */

window.addEventListener("DOMContentLoaded", main);

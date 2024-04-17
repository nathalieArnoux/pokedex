export function error404() {
  const container = document.querySelector("#container");
  const p = document.createElement("p"); // creates number and name of the pokemon
  p.textContent = "error 404";
  container.appendChild(p);
}

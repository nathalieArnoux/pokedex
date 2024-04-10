import axios from "axios";

export function fetchPokemon() {
  //  const listFromApi = [];
  return axios
    .get("https://tyradex.vercel.app/api/v1/gen/1")
    .then((response) => {
      // Handle successful response
      return response.data;
    })
    .catch((error) => {
      // Handle error
      console.error("Error fetching data:", error);
    });
}

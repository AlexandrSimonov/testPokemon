import { getFetch } from "./getFetch";

const apiPath = "https://pokeapi.co/api/v2/";

export default new class PokemonApi {

  getPokemonById(id) {
    return getFetch(`${apiPath}pokemon/${id}/`);
  }

  getPokemons(limit, offset) {
    console.log(limit, offset);
    return getFetch(`${apiPath}pokemon?limit=${limit}&offset=${offset}/`);
  }

  getPokemonByUrl(url) {
    return getFetch(url);
  }
}();
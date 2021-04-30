import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/',
});

export const pokemonAPI = {
  getPokemons(currentPage = 1, pageSize = 10) {
    return instance.get(
      `?offset=${(currentPage - 1) * pageSize}&limit=${pageSize}`,
    );
  },
  getPokemonDescription(name) {
    return instance.get(`${name}`);
  },
};

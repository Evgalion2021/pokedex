import { makeObservable, observable, action, computed } from 'mobx';
import { pokemonAPI } from '../api/api';

export function pokemonStoreFunction() {
  return makeObservable(
    {
      pageOptions: {
        currentPage: 1,
        pageSize: 10,
      },
      pokemons = [],
      handleChangePageOptions(pageNumber, size) {
        this.pageOptions.currentPage = pageNumber;
        this.pageOptions.pageSize = size;
      },
    },
    {
      pageOptions: observable,
      pokemons: observable,
      handleChangePageOptions: action.bound,
    },
  );
}

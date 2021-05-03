import { makeObservable, observable, action, runInAction } from 'mobx';
import { pokemonAPI } from '../api/api';

export function pokemonStoreFunction() {
  return makeObservable(
    {
      pageOptions: {
        currentPage: 1,
        pageSize: 10,
      },
      pokemons: [],
      selectedTags: [],
      tags: [],
      handleChangePageOptions(currentPage, pageSize) {
        this.pageOptions.currentPage = currentPage;
        this.pageOptions.pageSize = pageSize;
      },
      getPokemons(currentPage, pageSize) {
        pokemonAPI
          .getPokemons(currentPage, pageSize)
          .then((response) => {
            return response.data.results;
          })
          .then((response) => {
            const promiseArray = response.map((pokemon) => {
              return pokemonAPI
                .getPokemonDescription(pokemon.name)
                .then((response) => {
                  return {
                    name: response.data.name,
                    id: response.data.id,
                    img:
                      response.data.sprites.other['official-artwork']
                        .front_default,
                    tags: response.data.types,
                  };
                });
            });
            Promise.all(promiseArray).then((response) => {
              runInAction(() => {
                this.pokemons = response;
              });
            });
          });
      },
      getTags() {
        pokemonAPI.getTags().then((response) => {
          runInAction(() => {
            this.tags = response.data.results.map((tag) => {
              return tag.name;
            });
          });
        });
      },
      handleChangeSelectedTags(tag) {
        this.selectedTags = tag;
        console.log(this.selectedTags);
      },
    },
    {
      pageOptions: observable,
      pokemons: observable,
      tags: observable,
      handleChangePageOptions: action.bound,
      getPokemons: action.bound,
      getTags: action.bound,
      handleChangeSelectedTags: action.bound,
    },
  );
}

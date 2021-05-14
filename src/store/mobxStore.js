import { makeObservable, observable, action, runInAction } from 'mobx';
import { pokemonAPI } from '../api/api';

export function pokemonStoreFunction() {
  return makeObservable(
    {
      pageOptions: {
        currentPage: 1,
        pageSize: 12,
        // This must be not hardcoded value from the beginning
        totalCount: 1118,
      },
      pokemons: [],
      selectedTags: [],
      tags: [],
      pokemonNameForSearch: '',
      pokemonsSelectedByTags: [],
      currentPokemonToShow: null,

      handleChangePageOptions(currentPage, pageSize) {
        this.pageOptions.currentPage = currentPage;
        this.pageOptions.pageSize = pageSize;
      },

      getPokemons(currentPage, pageSize) {
        pokemonAPI
          .getPokemons(currentPage, pageSize)
          .then((response) => {
            runInAction(() => {
              this.totalCount = response.data.count;
            });
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
                    img: response.data.sprites.other['official-artwork']
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
        this.pokemonsSelectedByTags = [];
        this.pokemonNameForSearch = '';
        this.currentPokemonToShow = null;
        this.selectedTags = tag;
      },

      getPokemonsSelectedByTags(tags) {
        const tagsPromiseArray = tags.map((tag) => {
          return pokemonAPI.getPokemonsWithTag(tag).then((response) => {
            return response.data.pokemon.map((pokemon) => {
              return pokemon.pokemon.name;
            });
          });
        });
        Promise.all(tagsPromiseArray).then((response) => {
          const result = tags.reduce((acc, tag, index) => {
            acc[tag] = response[index];

            return acc;
          }, {});

          runInAction(() => {
            console.log(result);
            this.pokemonsSelectedByTags = result;
          });
        });
      },

      getPokemonNameForSearch(pokemonName) {
        this.pokemonNameForSearch = pokemonName.toLowerCase();
      },

      searchPokemonByName(pokemonName) {
        this.currentPokemonToShow = null;
        pokemonAPI
          .getAllPokemons(this.pageOptions.totalCount)
          .then((response) => {
            let arrayOfPokemonsName = response.data.results.map((pokemon) => {
              return pokemon.name;
            });
            arrayOfPokemonsName = arrayOfPokemonsName.filter((name) => {
              return name.includes(this.pokemonNameForSearch);
            });
            if (arrayOfPokemonsName.length > 0) {
              runInAction(() => {
                this.pokemonsSelectedByTags = [{ search: arrayOfPokemonsName }];
              });
            }
          });
      },
      showPokemonFromListHandler(pokemonName) {
        pokemonAPI.getPokemonDescription(pokemonName).then((response) => {
          runInAction(() => {
            this.currentPokemonToShow = {
              name: response.data.name,
              id: response.data.id,
              img: response.data.sprites.other['official-artwork']
                .front_default,
              tags: response.data.types,
            };
          });
        });
      },

      backToList() {
        this.pokemonNameForSearch = '';
        this.pokemonsSelectedByTags = [];
        this.currentPokemonToShow = null;
        this.selectedTags = [];
        this.pokemons = [];
      },
    },
    {
      pageOptions: observable,
      pokemons: observable,
      selectedTags: observable,
      tags: observable,
      pokemonNameForSearch: observable,
      pokemonsSelectedByTags: observable,
      currentPokemonToShow: observable,
      handleChangePageOptions: action.bound,
      getPokemons: action.bound,
      getTags: action.bound,
      handleChangeSelectedTags: action.bound,
      getPokemonsSelectedByTags: action.bound,
      getPokemonNameForSearch: action.bound,
      searchPokemonByName: action.bound,
      showPokemonFromListHandler: action.bound,
      backToList: action.bound,
    },
  );
}

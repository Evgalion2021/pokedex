import { makeObservable, observable, action, runInAction } from 'mobx';
import { pokemonAPI } from '../api/api';

export function pokemonStoreFunction() {
  return makeObservable(
    {
      pageOptions: {
        currentPage: 1,
        pageSize: 10,
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
      },
      getTagColor(tag) {
        switch (tag) {
          case 'normal':
            return '#A4ACAF';
          case 'fighting':
            return '#D56723';
          case 'flying':
            return '#3DC7EF';
          case 'poison':
            return '#B97FC9';
          case 'ground':
            return '#AB9842';
          case 'rock':
            return '#B97FC9';
          case 'bug':
            return '#729F3F';
          case 'ghost':
            return '#7B62A3';
          case 'steel':
            return '#9EB7B8';
          case 'fire':
            return '#FD7D24';
          case 'water':
            return '#4592C4';
          case 'grass':
            return '#9BCC50';
          case 'electric':
            return '#EED535';
          case 'psychic':
            return '#F366B9';
          case 'ice':
            return '#51C4E7';
          case 'dragon':
            return '#F16E57';
          case 'dark':
            return '#707070';
          case 'fairy':
            return '#FDB9E9';
          case 'shadow':
            return '#00000';
          case 'unknown':
            return '#00000';
          default:
            console.log('Sorry, we are out of ' + tag + '.');
        }
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
            this.pokemonsSelectedByTags = result;
          });
        });
      },
      getPokemonNameForSearch(pokemonName) {
        this.selectedPokemonName = pokemonName;
      },
      searchPokemonByName(pokemonName) {
        this.currentPokemonToShow = null;
        pokemonAPI
          .getAllPokemons(this.pageOptions.totalCount)
          .then((response) => {
            const arrayOfPokemonsName = response.data.results.map((pokemon) => {
              return pokemon.name;
            });
            const searchResult = arrayOfPokemonsName.find((name) => {
              return name === this.selectedPokemonName;
            });
            runInAction(() => {
              if (searchResult) {
                this.currentPokemonToShow = pokemonAPI
                  .getPokemonDescription(searchResult)
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
              }
              console.log(this.pokemons);
            });
          });
      },
      onClickPokemonFromList(pokemonName) {
        runInAction(() => {
          this.currentPokemonToShow = pokemonAPI
            .getPokemonDescription(pokemonName)
            .then((response) => {
              return {
                name: response.data.name,
                id: response.data.id,
                img:
                  response.data.sprites.other['official-artwork'].front_default,
                tags: response.data.types,
              };
            });
        });

        console.log(this.selectedPokemonWithTag);
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
      getTagColor: action.bound,
      getPokemonsSelectedByTags: action.bound,
      getPokemonNameForSearch: action.bound,
      searchPokemonByName: action.bound,
      onClickPokemonFromList: action.bound,
    },
  );
}

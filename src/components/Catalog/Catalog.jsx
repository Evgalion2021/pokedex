import { Button, Row } from 'antd';
import { Fragment, useEffect } from 'react';
import classes from './Catalog.module.scss';
import { Pokemon } from './Pokemon/Pokemon';

export const Catalog = ({
  currentPage,
  pageSize,
  getPokemons,
  pokemons,
  getPokemonsSelectedByTags,
  selectedTags,
  searchPokemonByName,
  pokemonNameForSearch,
  pokemonsSelectedByTags,
  currentPokemonToShow,
  showPokemonFromListHandler,
}) => {
  useEffect(() => {
    if (selectedTags.length) {
      getPokemonsSelectedByTags(selectedTags);
    } else if (pokemonNameForSearch) {
      searchPokemonByName(pokemonNameForSearch);
    } else {
      getPokemons(currentPage, pageSize);
    }
  }, [
    currentPage,
    pageSize,
    getPokemons,
    selectedTags,
    getPokemonsSelectedByTags,
    pokemonNameForSearch,
    searchPokemonByName,
  ]);
  function renderPokemonsSelectedByTags() {
    return (
      <div>
        {Object.keys(pokemonsSelectedByTags).map((key) => {
          return (
            <Fragment key={key}>
              <h2>{key}</h2>
              {pokemonsSelectedByTags[key].map((name) => {
                return (
                  <Button
                    className={classes.item}
                    key={name}
                    onClick={() => showPokemonFromListHandler(name)}
                  >
                    {name}
                  </Button>
                );
              })}
            </Fragment>
          );
        })}
      </div>
    );
  }
  function renderPokemonsSelectedName() {
    return pokemonsSelectedByTags[0].search.map((name) => {
      return (
        <Button
          className={classes.item}
          key={name}
          onClick={() => showPokemonFromListHandler(name)}
        >
          {name + ' '}
        </Button>
      );
    });
  }
  function renderPokemonList() {
    return (
      <Row>
        {pokemons.map((pokemon) => {
          return <Pokemon key={pokemon.name} pokemon={pokemon} />;
        })}
      </Row>
    );
  }

  function currentContent() {
    if (currentPokemonToShow) {
      return <Pokemon pokemon={currentPokemonToShow}></Pokemon>;
    } else if (selectedTags.length > 0) {
      return renderPokemonsSelectedByTags();
    } else if (pokemonNameForSearch) {
      if (pokemonsSelectedByTags.length > 0) {
        return renderPokemonsSelectedName();
      } else {
        return <div>pokemon named {pokemonNameForSearch} doesn't exist</div>;
      }
    } else {
      return renderPokemonList();
    }
  }

  return <div className={classes.container}>{currentContent()}</div>;
};

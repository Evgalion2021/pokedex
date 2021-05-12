import { Button, Row } from 'antd';
import { useEffect, useMemo } from 'react';
import classes from './Catalog.module.scss';
import Pokemon from './Pokemon/Pokemon';

const Catalog = ({
  currentPage,
  pageSize,
  getPokemons,
  pokemons,
  getTagColor,
  getPokemonsSelectedByTags,
  selectedTags,
  searchPokemonByName,
  pokemonNameForSearch,
  pokemonsSelectedByTags,
  currentPokemonToShow,
  onClickPokemonFromList,
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

  const currentContent = useMemo(() => {
    if (selectedTags.length) {
      if (currentPokemonToShow) {
        return (
          <Pokemon
            pokemon={currentPokemonToShow}
            getTagColor={getTagColor}
          ></Pokemon>
        );
      } else {
        return (
          <div>
            {Object.keys(pokemonsSelectedByTags).map((key) => {
              return (
                <>
                  <h2>{key}</h2>
                  {pokemonsSelectedByTags[key].map((name) => {
                    return (
                      <Button
                        className={classes.item}
                        key={name}
                        onClick={() => {
                          return onClickPokemonFromList(name);
                        }}
                      >
                        {name}
                      </Button>
                    );
                  })}
                </>
              );
            })}
          </div>
        );
      }
    } else if (pokemonNameForSearch) {
      if (currentPokemonToShow) {
        return (
          <Pokemon
            pokemon={currentPokemonToShow}
            getTagColor={getTagColor}
          ></Pokemon>
        );
      } else if (pokemonsSelectedByTags.length > 0) {
        return pokemonsSelectedByTags[0].search.map((name) => {
          return (
            <Button
              className={classes.item}
              key={name}
              onClick={() => {
                return onClickPokemonFromList(name);
              }}
            >
              {name + ' '}
            </Button>
          );
        });
      } else {
        return <div>pokemon named {pokemonNameForSearch} doesn't exist</div>;
      }
    } else {
      return (
        <Row>
          {pokemons.map((pokemon) => {
            return (
              <Pokemon
                key={pokemon.name}
                pokemon={pokemon}
                getTagColor={getTagColor}
              />
            );
          })}
        </Row>
      );
    }
  }, [
    selectedTags,
    pokemonNameForSearch,
    pokemons,
    getTagColor,
    pokemonsSelectedByTags,
    currentPokemonToShow,
    onClickPokemonFromList,
  ]);

  return <div className={classes.container}>{currentContent}</div>;
};

export default Catalog;

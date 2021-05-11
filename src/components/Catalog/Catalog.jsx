import { Row } from 'antd';
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
  console.log(currentPokemonToShow);

  const currentContent = useMemo(() => {
    if (selectedTags.length) {
      return (
        <div>
          {Object.keys(pokemonsSelectedByTags).map((key) => {
            return (
              <>
                <h2>{key}</h2>
                {pokemonsSelectedByTags[key].map((name) => {
                  return <span>{name} </span>;
                })}
              </>
            );
          })}
        </div>
      );
    } else if (pokemonNameForSearch) {
      if (currentPokemonToShow) {
        {
          console.log(currentPokemonToShow);
        }
        return <div>{currentPokemonToShow.name}</div>;
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
  ]);

  return <div className={classes.container}>{currentContent}</div>;
};

export default Catalog;

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
  getPokemonsWithTags,
  selectedTags,
  findSelectedPokemon,
  selectedPokemonName,
  pokemonsWithTags,
  foundPokemon,
}) => {
  useEffect(() => {
    if (selectedTags.length) {
      getPokemonsWithTags(selectedTags);
    } else if (selectedPokemonName) {
      findSelectedPokemon(selectedPokemonName);
    } else {
      getPokemons(currentPage, pageSize);
    }
  }, [
    currentPage,
    pageSize,
    getPokemons,
    selectedTags,
    getPokemonsWithTags,
    selectedPokemonName,
    findSelectedPokemon,
    foundPokemon,
  ]);
  const currentContent = useMemo(() => {
    if (selectedTags.length) {
      return (
        <div>
          {Object.keys(pokemonsWithTags).map((key) => {
            return (
              <>
                <h2>{key}</h2>
                {pokemonsWithTags[key].map((name) => {
                  return <span>{name} </span>;
                })}
              </>
            );
          })}
        </div>
      );
    } else if (selectedPokemonName) {
      if (foundPokemon) {
        return <div>{foundPokemon}</div>;
      } else {
        return <div>pokemon named {selectedPokemonName} doesn't exist</div>;
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
    selectedPokemonName,
    pokemons,
    getTagColor,
    pokemonsWithTags,
    foundPokemon,
  ]);

  return <div className={classes.container}>{currentContent}</div>;
};

export default Catalog;

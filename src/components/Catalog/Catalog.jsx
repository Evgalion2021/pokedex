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
  ]);
  const currentContent = useMemo(() => {
    if (selectedTags.length) {
      return <div>SelectedTagsPage</div>;
    } else if (selectedPokemonName) {
      return <div>SelectedNamePage</div>;
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
  }, [selectedTags, selectedPokemonName, pokemons, getTagColor]);

  return <div className={classes.container}>{currentContent}</div>;
};

export default Catalog;

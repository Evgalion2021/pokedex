import { observer } from 'mobx-react';
import './App.css';
import { Catalog } from './components/Catalog/Catalog';
import { Filter } from './components/Filter/Filter';
import { Paginator } from './components/Pagitanor/Paginator';
import { useStore } from './hooks/useStore';

const App = observer(() => {
  const store = useStore();

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <img
          className='mainImg'
          alt='wallpaper'
          src='https://craig1123.github.io/pokedex/img/Pokedex.png'
        ></img>
      </div>
      <Filter
        tags={store.tags}
        getTags={store.getTags}
        changeSelectedTags={store.handleChangeSelectedTags}
        getPokemonNameForSearch={store.getPokemonNameForSearch}
        selectedTags={store.selectedTags}
      />
      <Catalog
        currentPage={store.pageOptions.currentPage}
        pageSize={store.pageOptions.pageSize}
        getPokemons={store.getPokemons}
        pokemons={store.pokemons}
        getPokemonsSelectedByTags={store.getPokemonsSelectedByTags}
        selectedTags={store.selectedTags}
        pokemonsSelectedByTags={store.pokemonsSelectedByTags}
        searchPokemonByName={store.searchPokemonByName}
        pokemonNameForSearch={store.pokemonNameForSearch}
        currentPokemonToShow={store.currentPokemonToShow}
        showPokemonFromListHandler={store.showPokemonFromListHandler}
      />
      <Paginator
        onChange={store.handleChangePageOptions}
        totalCount={store.pageOptions.totalCount}
        currentPokemonToShow={store.currentPokemonToShow}
        pokemonNameForSearch={store.pokemonNameForSearch}
        selectedTags={store.selectedTags}
        backToList={store.backToList}
      />
    </>
  );
});

export default App;

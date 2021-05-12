import { observer } from 'mobx-react';
import './App.css';
import Catalog from './components/Catalog/Catalog';
import Filter from './components/Filter/Filter';
import Paginator from './components/Pagitanor/Paginator';
import { useStore } from './hooks/useStore';

const App = observer(() => {
  const store = useStore();

  // TODO: use react fragment like main wraper; use css not inline styles
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <img
          alt='wallpaper'
          src='https://craig1123.github.io/pokedex/img/Pokedex.png'
          style={{ margin: '0 auto' }}
        ></img>
      </div>
      <Filter
        tags={store.tags}
        getTags={store.getTags}
        changeSelectedTags={store.handleChangeSelectedTags}
        getPokemonNameForSearch={store.getPokemonNameForSearch}
      />
      <Catalog
        currentPage={store.pageOptions.currentPage}
        pageSize={store.pageOptions.pageSize}
        getPokemons={store.getPokemons}
        pokemons={store.pokemons}
        getTagColor={store.getTagColor}
        getPokemonsSelectedByTags={store.getPokemonsSelectedByTags}
        selectedTags={store.selectedTags}
        pokemonsSelectedByTags={store.pokemonsSelectedByTags}
        searchPokemonByName={store.searchPokemonByName}
        pokemonNameForSearch={store.pokemonNameForSearch}
        currentPokemonToShow={store.currentPokemonToShow}
        onClickPokemonFromList={store.onClickPokemonFromList}
      />
      <Paginator
        onChange={store.handleChangePageOptions}
        totalCount={store.pageOptions.totalCount}
        currentPokemonToShow={store.currentPokemonToShow}
        pokemonNameForSearch={store.pokemonNameForSearch}
        selectedTags={store.selectedTags}
        backToList={store.backToList}
      />
    </div>
  );
});

export default App;

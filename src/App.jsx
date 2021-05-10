import { observer } from 'mobx-react';
import './App.css';
import Catalog from './components/Catalog/Catalog';
import Filter from './components/Filter/Filter';
import Paginator from './components/Pagitanor/Paginator';
import { useStore } from './hooks/useStore';

const App = observer(() => {
  const store = useStore();

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
        getSelectedPokemonName={store.getSelectedPokemonName}
      />
      <Catalog
        currentPage={store.pageOptions.currentPage}
        pageSize={store.pageOptions.pageSize}
        getPokemons={store.getPokemons}
        pokemons={store.pokemons}
        getTagColor={store.getTagColor}
        getPokemonsWithTags={store.getPokemonsWithTags}
        selectedTags={store.selectedTags}
        pokemonsWithTags={store.pokemonsWithTags}
        findSelectedPokemon={store.findSelectedPokemon}
        selectedPokemonName={store.selectedPokemonName}
        foundPokemon={store.foundPokemon}
      />
      <Paginator
        onChange={store.handleChangePageOptions}
        totalCount={store.pageOptions.totalCount}
      />
    </div>
  );
});

export default App;

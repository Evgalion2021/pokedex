import { observer } from "mobx-react";
import "./App.css";
import Catalog from "./components/Catalog/Catalog";
import Filter from "./components/Filter/Filter";
import Paginator from "./components/Pagitanor/Paginator";
import { useStore } from "./hooks/useStore";

const App = observer(() => {
  const store = useStore();

  return (
    <div>
      <Filter
        tags={store.tags}
        getTags={store.getTags}
        changeSelectedTags={store.handleChangeSelectedTags} />
      <Catalog
        currentPage={store.pageOptions.currentPage}
        pageSize={store.pageOptions.pageSize}
        getPokemons={store.getPokemons}
        pokemons={store.pokemons} />
      <Paginator onChange={store.handleChangePageOptions} />
    </div>
  );
});

export default App;

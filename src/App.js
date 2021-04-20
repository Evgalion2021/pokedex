import "./App.css";
import Catalog from "./components/Catalog/Catalog";
import Filter from "./components/Filter/Filter";
import Paginator from "./components/Pagitanor/Paginator";

function App() {
  return (
    <div>
      <Filter />
      <Catalog />
      <Paginator />
    </div>
  );
}

export default App;

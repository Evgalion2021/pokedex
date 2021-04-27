import { useState } from "react";
import "./App.css";
import CatalogTest from "./components/Catalog/CatalogTest";
import Filter from "./components/Filter/Filter";
import Paginator from "./components/Pagitanor/Paginator";

function App() {
  const [pageOptions, setPageOptions] = useState({currentPage: 1,
  pageSize: 10});
  const handlerChangePageOptions = (pageNumber, size) => {
    setPageOptions({pageNumber, size})
  }
  return (
    <div>
      <Filter />
      <CatalogTest pageSize={pageOptions.size} currentPage={pageOptions.pageNumber}/>
      <Paginator onChangePage={handlerChangePageOptions}/>
    </div>
  );
}

export default App;

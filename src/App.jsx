import { observer } from "mobx-react";
import { useState } from "react";
import "./App.css";
import CatalogTest from "./components/Catalog/CatalogTest";
import Filter from "./components/Filter/Filter";
import Paginator from "./components/Pagitanor/Paginator";

const App = observer((props) => {
  return (
    <div>
      <Filter />
      <CatalogTest pageSize={props.store.pageOptions.pageSize} currentPage={props.store.pageOptions.currentPage} />
      <Paginator onChangePage={props.store.handleChangePageOptions} />
    </div>
  );
})

export default App;

import { Row } from "antd";
import { useEffect } from "react";
import classes from "./Catalog.module.scss";
import Pokemon from "./Pokemon/Pokemon";

const Catalog = ({ currentPage, pageSize, getPokemons, pokemons, }) => {
  useEffect(() => {
    getPokemons(currentPage, pageSize);
  }, [currentPage, pageSize, getPokemons]);

  return (
    <div className={classes.container}>
      <Row>
        {pokemons.map((pokemon) => {
          return <Pokemon key={pokemon.name} pokemon={pokemon} />;
        })}
      </Row>
    </div>);
};

export default Catalog;

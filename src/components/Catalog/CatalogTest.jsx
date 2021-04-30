import { Row } from "antd";
import axios from "axios";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { pokemonAPI } from "../../api/api";
import classes from "./Catalog.module.scss"
import Pokemon from "./Pokemon/Pokemon";

const CatalogTest = ({ pageSize, currentPage }) => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    pokemonAPI.getPokemons(currentPage, pageSize).then((response) => {
      return response.data.results;
    }).then((response) => {
      const promiseArray = response.map((pokemon) => {
        return pokemonAPI.getPokemonDescription(pokemon.name).then((response) => {
          return {
            name: response.data.name,
            id: response.data.id,
            img: response.data.sprites.other['official-artwork'].front_default,
            tags: response.data.types
          }
        })
      });
      Promise.all(promiseArray).then((response) => {
        setPokemons(response);
      })
    });
  }, [currentPage, pageSize])

  return (<div className={classes.container}><Row>
    {pokemons.map((pokemon) => {
      return <Pokemon pokemon={pokemon} />
    })}
  </Row></div>);
}

export default CatalogTest;

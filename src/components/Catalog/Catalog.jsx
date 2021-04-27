import { Row } from "antd";
import axios from "axios";
import { makeAutoObservable } from "mobx";
import classes from "./Catalog.module.scss"
import Pokemon from "./Pokemon/Pokemon";

const Catalog = () => {
    let pokemonList = [];

    let get10Pokemons = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10").then(responce => {
            return pokemonList = responce.data.results;
        });
    }

    let get10PokemonsWithDescription = () => {
        for (let i = 0; i < pokemonList.length; i++) {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonList[i].name}`).then(
                responce => {
                    return pokemonList[i] = {
                        id: responce.data.id,
                        img: responce.data.sprites.other['official-artwork'].front_default,
                        firstTag: responce.data.types[0].name,
                        secondTag: responce.data.types[1].name,
                    }

                }
            )
        }
    }

    get10Pokemons()
    get10PokemonsWithDescription()
    console.log(pokemonList)

    let pokemonListWithDescriptions = pokemonList.map(
        (pokemon) => {
            return <Pokemon
                img={pokemon.img} id={pokemon.id} name={pokemon.name} firstTag={pokemon.firstTag} secondTag={pokemon.secondTag} />
        }
    )

    return (<div className={classes.container}><Row>
        {pokemonListWithDescriptions}
    </Row></div>

    );
}

export default Catalog;

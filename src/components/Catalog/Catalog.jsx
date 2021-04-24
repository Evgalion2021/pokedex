import { Row } from "antd";
import axios from "axios";
import classes from "./Catalog.module.scss"
import Pokemon from "./Pokemon/Pokemon";

const Catalog = () => {
    let arrayFromServer = [];

    let bulbasaurInfo = null;

    let getTenPokemons = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10").then(responce => {
            arrayFromServer = responce.data.results;
            console.log(arrayFromServer)
        });
    }
    let getOnePokemonInfo = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon/bulbasaur").then(responce => {
            bulbasaurInfo = {
                id: responce.data.id,
                firstTag: responce.data.types[0].type.name,
                secondTag: responce.data.types[0].type.name
            }
            console.log(bulbasaurInfo);
        })
    }

    getTenPokemons();
    getOnePokemonInfo();



    let firstTestPokemonArray = [
        {
            name: "BULBASAUR",
            img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
            id: "№001",
            firstTag: "Grass",
            secondTag: "Poison"
        },
        {
            name: "IVYSAUR",
            img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png",
            id: "№002",
            firstTag: "Grass",
            secondTag: "Poison"
        },
        {
            name: "VENASAUR",
            img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png",
            id: "№003",
            firstTag: "Grass",
            secondTag: "Poison"
        },
        {
            name: "CHARMANDER",
            img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
            id: "№004",
            firstTag: "Fire",
            secondTag: null
        },
        {
            name: "CHARMELEON",
            img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png",
            id: "№005",
            firstTag: "Fire",
            secondTag: null
        },
        {
            name: "CHARIZARD",
            img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png",
            id: "№006",
            firstTag: "Fire",
            secondTag: "Flying"
        }
    ]
    let secondTestPokemonArray = firstTestPokemonArray.map(
        (pokemon) => {
            return <Pokemon
                img={pokemon.img} id={pokemon.id} name={pokemon.name} firstTag={pokemon.firstTag} secondTag={pokemon.secondTag} />
        }
    )

    return (<div className={classes.container}><Row>
        {secondTestPokemonArray}
    </Row></div>

    );
}

export default Catalog;

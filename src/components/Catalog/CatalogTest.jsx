import { Row } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import classes from "./Catalog.module.scss"
import Pokemon from "./Pokemon/Pokemon";

const CatalogTest = (props) => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${(props.currentPage - 1) * props.pageSize}&limit=${props.pageSize}`).then((response) => {
            return response.data.results;
        }).then((response) => {
            const promiseArray = response.map((pokemon) => {
                return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`).then((response) => {
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
                console.log(response);
            })
        });
    }, [])

    return (<div className={classes.container}><Row>
        {pokemons.map((pokemon) => {
            return <Pokemon name={pokemon.name} id={pokemon.id} img={pokemon.img} tags={pokemon.tags} />
        })}
    </Row></div>);
}

export default CatalogTest;

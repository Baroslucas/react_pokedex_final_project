import { useState, useEffect } from "react";
import { fetchAllPokemon } from "../../api/pokemonApi";
import { PokemonCard } from "../PokemonCard/PokemonCard"
import s from './PokemonList.module.css'

export function PokemonList() {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        fetchAllPokemon()
            .then((data) => {
                setPokemons(data)
            })
    }, [])

    return (
        <div className={s.div}>
            {pokemons.map((pokemon) => (
                <PokemonCard 
                    key={pokemon.id}
                    pokemon={pokemon}
                />
            ))}
        </div>
    )
}
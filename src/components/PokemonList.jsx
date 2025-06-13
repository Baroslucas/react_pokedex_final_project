import { useState, useEffect } from "react";
import { fetchAllPokemon } from "../api/pokemonApi";
import { PokemonCard } from "./PokemonCard"
export function PokemonList() {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        fetchAllPokemon()
            .then((data) => {
                setPokemons(data)
            })
    }, [])

    return (
        <div>
            {pokemons.map((pokemon) => (
                <PokemonCard 
                    key={pokemon.id}
                    pokemon={pokemon}
                />
            ))}
        </div>
    )
}

//  {pokemons.map((pokemon) => {
//                 return
import { useState, useEffect } from "react";
import { fetchAllPokemon } from "../../api/pokemonApi";
import { FilterBar } from "../FilterBar/FilterBar";
import { PokemonCard } from "../PokemonCard/PokemonCard"
import s from './PokemonList.module.css'
import { usePokemons } from "../../context/PokemonContext";

export function PokemonList() {
    const {pokemons, setPokemons} = usePokemons()
    const [filter, setFilter] = useState('')

    useEffect(() => {
        fetchAllPokemon().then((data) => {
            setPokemons(data)
        })
    }, [setPokemons])

    const pokemonListFilter = pokemons.filter((p) =>
        p.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div>
            <FilterBar 
                placeholder="Filter the pokemon list, ex: Pikachu"
                value={filter}
                onChange={setFilter}
            />
            <div className={s.div}>
                {pokemonListFilter.length === 0 ? (
                    <p>Aucun resultat pour la recherche: {filter}</p>
                ) : (
                    pokemonListFilter.map((pokemon) => (
                        <PokemonCard 
                            key={pokemon.id}
                            pokemon={pokemon}
                        />
                    ))
                )}
            </div>
        </div>
    )
}
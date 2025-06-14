import { useState, useEffect } from "react";
import { fetchAllPokemon } from "../../api/pokemonApi";
import { FilterBar } from "../FilterBar/FilterBar";
import { PokemonCard } from "../PokemonCard/PokemonCard"
import s from './PokemonList.module.css'

export function PokemonList() {
    const [pokemons, setPokemons] = useState([])
    const [filter, setFilter] = useState('')

    useEffect(() => {
        fetchAllPokemon().then((data) => {
            setPokemons(data)
        })
    }, [])

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
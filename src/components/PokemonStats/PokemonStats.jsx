import { MAX_STAT, normalizeStats, statsOrder } from "../../config/constants";
import { TypeSpan } from "../TypeSpan/TypeSpan";
import { StatLine } from "./StatLine";
import { usePokemons } from "../../context/PokemonContext"
import { useParams } from "react-router-dom";
import s from "./PokemonStats.module.css"

//All the pokemon stats using StatLine
export function PokemonStats() {
    const { id } = useParams()
    const { pokemons } = usePokemons()
    
    if (!pokemons || pokemons.length === 0) {
        return <p>Chargement des statistiques...</p>;
    }

    const pokemon = pokemons.find((p) => p.id.toString() === id);

    if (!pokemon) {
        return <p>Pokémon introuvable.</p>;
    }

    const normalizePokemonStats = normalizeStats(pokemon.base)

    return (
        <div className={s.mainDiv}>
            <h3 className={s.pokemonName}>{pokemon.name}</h3>
            <div className={s.typeDiv}>
                {pokemon.types.map((type) => (
                    <TypeSpan 
                        key={type} 
                        typeName={type}
                    />
                ))}   
            </div>
            <div className={s.statDiv}>
                 {statsOrder.map((stat) => (
                    <StatLine
                        key={stat}
                        statName={stat}
                        value={normalizePokemonStats[stat]}
                        max={MAX_STAT[stat]}
                    />
                 ))}
            </div>
        </div>
    )
    
}
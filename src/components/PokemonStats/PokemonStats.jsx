import { MAX_STAT, normalizeStats } from "../../config/constants";
import { TypeSpan } from "../TypeSpan/TypeSpan";
import { StatLine } from "./StatLine";
import { usePokemons } from "../../context/PokemonContext"
import { useParams } from "react-router-dom";

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
        <div>
            <h3>{pokemon.name}</h3>
            <div>
                {pokemon.types.map((type) => (
                    <TypeSpan 
                        key={type} 
                        typeName={type}
                    />
                ))}   
            </div>
            <div>
                 {Object.keys(MAX_STAT).map((stat) => (
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
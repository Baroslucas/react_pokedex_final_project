import { MAX_STAT } from "../../config/constants";
import { TypeSpan } from "../TypeSpan/TypeSpan";
import { StatLine } from "./StatLine";
import { usePokemons } from "../../context/PokemonContext"
import { useParams } from "react-router-dom";

export function PokemonStats() {
    const { pokemons } = usePokemons()
    const { id } = useParams()

    const pokemon = pokemons.find((p) => p.id.toString() === id)

    console.log(pokemon)
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
                        value={30}
                        max={MAX_STAT[stat]}
                    />
                 ))}
            </div>
        </div>
    )
    
}
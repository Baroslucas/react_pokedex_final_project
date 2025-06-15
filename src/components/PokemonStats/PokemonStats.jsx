import { MAX_STAT } from "../../config/constants";
import { TypeSpan } from "../TypeSpan/TypeSpan";
import { StatLine } from "./StatLine";

export function PokemonStats({pokemon}) {
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
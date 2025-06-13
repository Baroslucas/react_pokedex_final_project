import { TypeSpan } from "./TypeSpan"
import { POKEMON_IMG_BASE_URL } from "../config/constants"

export function PokemonCard({pokemon}) {
    
    return (
        <div>
            <p>{pokemon.name}</p>
            <img 
                src={`${POKEMON_IMG_BASE_URL}${pokemon.id}.svg`} 
                alt={pokemon.name} 
            />
            <TypeSpan/>
        </div>
    )
}
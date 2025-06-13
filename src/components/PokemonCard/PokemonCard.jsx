import { TypeSpan } from "../TypeSpan";
import { POKEMON_IMG_BASE_URL } from "../../config/constants";
import s from './PokemonCard.module.css';

export function PokemonCard({pokemon}) {
    
    return (
        <div className={s.div}>
            <p>{pokemon.name}</p>
            <img 
                src={`${POKEMON_IMG_BASE_URL}${pokemon.id}.svg`} 
                alt={pokemon.name} 
            />
            {pokemon.types.map((type) => (
                <TypeSpan key={type} typeName={type} />
            ))}
           
        </div>
    )
}
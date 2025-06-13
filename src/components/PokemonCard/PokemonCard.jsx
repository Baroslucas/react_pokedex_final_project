import { TypeSpan } from "../TypeSpan";
import { POKEMON_IMG_BASE_URL } from "../../config/constants";
import s from './PokemonCard.module.css';

export function PokemonCard({pokemon}) {
    
    return (
        <div className={s.div}>
            <img 
                src={`${POKEMON_IMG_BASE_URL}${pokemon.id}.svg`} 
                alt={pokemon.name}
                width={80} 
                height={80}
            />
            <p className={s.pokemonName}>{pokemon.name}</p>
            {pokemon.types.map((type) => (
                <TypeSpan key={type} typeName={type} />
            ))}
           
        </div>
    )
}
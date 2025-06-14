import { TypeSpan } from "../TypeSpan/TypeSpan";
import { POKEMON_IMG_BASE_URL } from "../../config/constants";
import s from './PokemonCard.module.css';

export function PokemonCard({pokemon}) {
    
    return (
        <div className={s.div}>
            <img
                className={s.img} 
                src={`${POKEMON_IMG_BASE_URL}${pokemon.id}.svg`} 
                alt={pokemon.name}
            />
            <p className={s.pokemonName}>#{pokemon.id} {pokemon.name}</p>
            <div className={s.typeDiv}>
                {pokemon.types.map((type) => (
                    <TypeSpan key={type} typeName={type} />
                ))}
            </div>
           
        </div>
    )
}
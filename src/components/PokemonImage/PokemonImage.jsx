import { useParams } from "react-router-dom"
import { usePokemons } from "../../context/PokemonContext"
import { POKEMON_IMG_BASE_URL } from "../../config/constants";

export function PokemonImage() {
    const { pokemons } = usePokemons()
    const { id } = useParams()

    const pokemon = pokemons.find(p => p.id.toString() === id);
    return (
        <div>
            <img 
                src={`${POKEMON_IMG_BASE_URL}${pokemon.id}.svg`} 
                alt={pokemon.name} 
            />
        </div>
        
    )
}
import { useParams } from "react-router-dom"
import { usePokemons } from "../../context/PokemonContext"
import { POKEMON_IMG_BASE_URL } from "../../config/constants";

export function PokemonImage() {
    const { pokemons } = usePokemons()
    const { id } = useParams()

    if (!pokemons || pokemons.length === 0) {
        return <p>Chargement des pokémons...</p>
    }

    const pokemon = pokemons.find(p => p.id.toString() === id)

    if (!pokemon) {
        return <p>Pokémon introuvable</p>
    }

    return (
        <div>
            <img 
                src={`${POKEMON_IMG_BASE_URL}${pokemon.id}.svg`} 
                alt={pokemon.name} 
            />
        </div>
    )
}

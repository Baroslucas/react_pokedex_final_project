import { useParams } from "react-router-dom"
import { usePokemons } from "../../context/PokemonContext"
import { POKEMON_IMG_BASE_URL } from "../../config/constants";
import s from "./PokemonImage.module.css"

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
        <div className={s.div}>
            <img 
                className={s.img}
                src={`${POKEMON_IMG_BASE_URL}${pokemon.id}.svg`} 
                alt={pokemon.name} 
            />
        </div>
    )
}

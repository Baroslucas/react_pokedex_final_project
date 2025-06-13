import pokeball from '../assets/img/pokeball.png'
import pokedex from '../assets/img/pokedex.png'

export function Header() {

    return (
        <button> 
            <img src={pokeball} alt="pokeball"/>
            <img src={pokedex} alt="pokedex"/>
        </button>

        
    )
}
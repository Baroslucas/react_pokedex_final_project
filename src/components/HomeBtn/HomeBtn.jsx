
import { useNavigate } from 'react-router-dom'
import pokeball from '/assets/img/pokeball.png'
import pokedex from '/assets/img/pokedex.png'
import s from "./HomeBtn.module.css"

export function HomeBtn() {
    const navigate = useNavigate()

    const handleClick = async () => {
        navigate('/')
    }

    return (
        <button 
            className={s.button}
            onClick={handleClick}> 
            <img 
                src={pokeball} 
                alt="pokeball" 
                className={s.pokeballImg}
                
            />
            
            <img 
                src={pokedex} 
                alt="pokedex" 
                className={s.pokedexImg}
            />
        </button>   
    )
}
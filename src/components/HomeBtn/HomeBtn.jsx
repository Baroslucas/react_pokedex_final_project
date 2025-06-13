import pokeball from '../../assets/img/pokeball.png'
import pokedex from '../../assets/img/pokedex.png'
import s from "./HomeBtn.module.css"

export function HomeBtn() {

    return (
        <button className={s.button}> 
            <img 
            src={pokeball} 
            alt="pokeball" 
            className={s.pokeballImg}/>
            <img 
            src={pokedex} 
            alt="pokedex" 
            className={s.pokedexImg}/>
        </button>   
    )
}
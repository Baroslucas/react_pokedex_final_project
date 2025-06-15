import leftArrow from '../../assets/img/left_arrow.svg'
import rightArrow from '../../assets/img/right_arrow.svg'
import s from './SwitchPokemonBtn.module.css'

export function SwitchPokemonBtn() {
    return <div className={s.div}>
        <button className={s.button}>
            <img 
                className={s.img}
                src={leftArrow}
                alt="leftArrow" 
            />
        </button>
        <button className={s.button}>
            <img
                className={s.img} 
                src={rightArrow} 
                alt="rightArrow" 
            />
        </button>
    </div>
}
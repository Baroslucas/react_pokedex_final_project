import { useNavigate, useParams } from 'react-router-dom'
import leftArrow from '../../assets/img/left_arrow.svg'
import rightArrow from '../../assets/img/right_arrow.svg'
import s from './SwitchPokemonBtn.module.css'

export function SwitchPokemonBtn() {
    const navigate = useNavigate()
    const { id } = useParams()
    const currentId = parseInt(id)
    
    const handleLeftClick = () => {
        navigate(`/pokemon/${currentId - 1}`)
    }

    const handleRightClick = () => {
        navigate(`/pokemon/${currentId + 1}`)
    }
    return <div className={s.div}>
            <button className={s.button} 
                    onClick={handleLeftClick} 
                    disabled={currentId === 1}
                >
                <img 
                    className={s.img}
                    src={leftArrow}
                    alt="leftArrow" 
                />
            </button>
            <button className={s.button} 
                    onClick={handleRightClick} 
                    disabled={currentId === 151}
                >
                <img
                    className={s.img} 
                    src={rightArrow} 
                    alt="rightArrow"
                />
            </button>
           </div>
}
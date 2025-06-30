import { PKMN_TYPES } from "../../config/constants"
import s from './TypeSpan.module.css'

//span to display the pokemon type(s), used in both Home and Reviews pages
export function TypeSpan({typeName}) {
    
    const type = PKMN_TYPES.find((elemType) => elemType.name === typeName.toLowerCase())

    return (
            <span
                className={s.span}
                style={{backgroundColor: type?.color}}>
                    {typeName}
            </span>
            )
            
}
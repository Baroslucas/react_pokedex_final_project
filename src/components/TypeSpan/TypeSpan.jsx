import { PKMN_TYPES } from "../../config/constants"
import s from './TypeSpan.module.css'

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
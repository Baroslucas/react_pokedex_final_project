import { PKMN_TYPES } from "../config/constants"

export function TypeSpan({typeName}) {
    
    const type = PKMN_TYPES.find((elemType) => elemType.name === typeName.toLowerCase())

    return <span style={{backgroundColor: type?.color}}>
                {typeName}
            </span>
}
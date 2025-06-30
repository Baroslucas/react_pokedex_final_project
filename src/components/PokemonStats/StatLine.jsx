import { MAX_STAT } from "../../config/constants"
import s from "./PokemonStats.module.css"

//Render of one single line to build pokemonStats
export function StatLine({statName, value}) {
    const max = MAX_STAT[statName]

    return (
        <div className={s.statBars}>
            <p className={s.statName}>{statName}</p>
            <div className={s.statLine}>
                <span className={s.span}>{value}</span>
                <progress className={s.progress} value={value} max={max} />
            </div>
        </div>
    )
}
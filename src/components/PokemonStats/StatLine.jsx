import { MAX_STAT } from "../../config/constants"

export function StatLine({statName, value}) {
    const max = MAX_STAT[statName]

    return (
        <div>
            <p>{statName}</p>
            <span>{value}</span>
            <progress value={value} max={max} />
        </div>
    )
}
import s from './FilterBar.module.css'

export function FilterBar({placeholder}) {
    return (
        <div className={s.div}>
            <input
                className={s.input}
                type="text" 
                placeholder={placeholder}/>
        </div>
    )
}
import s from './FilterBar.module.css'

// Filter bar for the HomePage
export function FilterBar({placeholder, value, onChange}) {
    return (
        <div className={s.div}>
            <input
                className={s.input}
                type="text" 
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />             
        </div>
    )
}
import { HomeBtn } from "../HomeBtn/HomeBtn";
import s from "./Header.module.css"

export function Header() {

    return (
            <div className={s.header}>
                <HomeBtn/>
            </div>
        )
}


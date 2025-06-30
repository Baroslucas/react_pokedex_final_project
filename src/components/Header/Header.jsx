import { HomeBtn } from "../HomeBtn/HomeBtn";
import s from "./Header.module.css"

//Header with HomeBtn
export function Header() {

    return (
            <div className={s.header}>
                <HomeBtn/>
            </div>
        )
}


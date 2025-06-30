import { PokemonImage } from "../components/PokemonImage/PokemonImage";
import { PokemonReview } from "../components/PokemonReview/PokemonReview";
import { PokemonStats } from "../components/PokemonStats/PokemonStats";
import { SwitchPokemonBtn } from "../components/SwitchPokemonBtn/SwitchPokemonBtn";
import s from "./DescriptionPage.module.css"

export function DescriptionPage() {
    return (
        <> 
            <SwitchPokemonBtn />
            <div className={s.descriptionDiv}>
                <PokemonImage />
                <PokemonStats />
                <PokemonReview />
            </div>
        </>
        
    )
}
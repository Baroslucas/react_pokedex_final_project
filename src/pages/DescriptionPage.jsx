import { Header } from "../components/Header/Header";
import { PokemonImage } from "../components/PokemonImage/PokemonImage";
import { PokemonReview } from "../components/PokemonReview/PokemonReview";
import { PokemonStats } from "../components/PokemonStats/PokemonStats";
import { SwitchPokemonBtn } from "../components/SwitchPokemonBtn/SwitchPokemonBtn";

export function DescriptionPage() {
    return (
        <>
            <Header />
            <SwitchPokemonBtn />
            <PokemonImage />
            <PokemonStats />
            <PokemonReview />
        </>
        
    )
}
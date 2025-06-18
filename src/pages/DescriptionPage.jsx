import { Header } from "../components/Header/Header";
import { PokemonImage } from "../components/PokemonImage/PokemonImage";
import { PokemonStats } from "../components/PokemonStats/PokemonStats";
import { SwitchPokemonBtn } from "../components/SwitchPokemonBtn/SwitchPokemonBtn";

export function DescriptionPage() {
    return (
        <>
            <Header />
            <SwitchPokemonBtn />
            <PokemonImage />
            <PokemonStats />
        </>
        
    )
}
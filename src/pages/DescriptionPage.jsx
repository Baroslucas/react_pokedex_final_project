import { Header } from "../components/Header/Header";
import { PokemonStats } from "../components/PokemonStats/PokemonStats";
import { SwitchPokemonBtn } from "../components/SwitchPokemonBtn/SwitchPokemonBtn";

export function DescriptionPage() {
    return (
        <>
            <Header />
            <SwitchPokemonBtn />
            <PokemonStats />
        </>
        
    )
}
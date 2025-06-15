import { Header } from "../components/Header/Header"
import { FilterBar } from "../components/FilterBar/FilterBar"
import { PokemonList } from "../components/PokemonList/PokemonList"


export function HomePage() {
    return (
        <>
            <Header />
            <PokemonList/>
        </>
    )
}
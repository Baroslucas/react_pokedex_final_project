import { Header } from "../components/Header/Header"
import { PokemonList } from "../components/PokemonList/PokemonList"
import { PokemonStats } from "../components/PokemonStats/PokemonStats"



export function HomePage() {
    return (
        <>
            <Header />
            <PokemonList/>
        </>
    )
}
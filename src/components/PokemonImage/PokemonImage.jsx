export function PokemonImage({pokemonImg, pokemonName}) {
    return (
        <div>
            <img 
                src={pokemonImg} 
                alt={pokemonName} 
            />
        </div>
        
    )
}
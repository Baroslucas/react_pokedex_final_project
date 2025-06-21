import { createContext, useState, useContext } from "react";

const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);

  return (
    <PokemonContext.Provider value={{ pokemons, setPokemons }}>
      {children}
    </PokemonContext.Provider>
  );
}

export function usePokemons() {
  
  return useContext(PokemonContext);}
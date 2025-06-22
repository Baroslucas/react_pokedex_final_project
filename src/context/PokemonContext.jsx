import { createContext, useState, useEffect, useContext } from "react";
import { fetchAllPokemon } from "../api/pokemonApi";

const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function loadPokemons() {
      const data = await fetchAllPokemon();
      setPokemons(data)
    }
    loadPokemons()
  }, []);

  return (
    <PokemonContext.Provider value={{ pokemons, setPokemons }}>
      {children}
    </PokemonContext.Provider>
  );
}

export function usePokemons() { 
  return useContext(PokemonContext);}
export async function fetchAllPokemon() {
  const response = await fetch("http://localhost:3001/pokemons");
  return await response.json();
}

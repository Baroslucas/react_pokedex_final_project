export async function fetchAllPokemon() {
  const response = await fetch("http://localhost:3001/pokemons");
  return await response.json();
}

export async function fetchPokemonReview(id) {
  const response = await fetch(
    `http://localhost:3001/reviews/?pokemonId=${id}`
  );
  return await response.json();
}

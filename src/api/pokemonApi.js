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

//
export async function addReview({ pokemonId, author, content }) {
  const response = await fetch("http://localhost:3001/reviews/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      pokemonId,
      author,
      content,
    }),
  });

  if (!response.ok) {
    throw new Error("La review n'a pas été correctement envoyée");
  }

  return await response.json();
}

export async function updateLike({ id, like }) {
  const response = await fetch(`http://localhost:3001/pokemons/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ like }),
  });

  return await response.json();
}

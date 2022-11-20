export const getPokemonList = async (index) => {
  const url = "https://pokeapi.co/api/v2/pokemon/";

  const getPokemon = async () => {
    const result = await fetch(url);
    const response = await result.json();
    const listPromises = response.results.map((pokemon) =>
      getDataPokemon(pokemon.url)
    );
    return Promise.all(listPromises);
  };

  const getDataPokemon = async (pokemon) => {
    const result = await fetch(pokemon);
    return await result.json();
  };

  const pokemonListPromise = getPokemon();
  let listPokemon = [];
  pokemonListPromise.then(async(poke) => {
    poke.forEach(async (pokemon) => {
      listPokemon.push(await pokemon);
    });
  });

  return listPokemon;
};

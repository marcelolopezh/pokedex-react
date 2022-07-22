export const getPokemon = async (pokemon) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const pokemonFind = {
      id: data.order,
      name: data.name,
      imgFront: data.sprites.front_default,
      imgBack: data.sprites.back_default,
      types: data.types,
      stats: data.stats,
    };
    return pokemonFind;
  } catch (error) {
    return false;
  }
};

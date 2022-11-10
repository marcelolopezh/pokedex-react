import { useState, useEffect } from "react";
import { getPokemon } from "../helpers/getPokemon";

export const usePokemonFetch = (pokemon) => {
  const [pokemonData, setPokemonData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    getPokemon(pokemon.toLowerCase())
      .then((pok) => {
        setPokemonData(pok);
        setLoading(false);
      })
      .catch((error) => {
        setPokemonData(null);
        setLoading(false);
      });
  }, [pokemon]);

  return { pokemonData, loading };
};

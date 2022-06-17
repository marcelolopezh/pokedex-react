import { useState, useEffect } from "react";
import { getPokemon } from "../helpers/getPokemon";

export const usePokemonFetch = (pokemon) => {
  const [state, setState] = useState({
    pokemonData: {},
    loading: true,  
  });
  useEffect(() => {
    getPokemon(pokemon).then((pok) => {
      setState({
        pokemonData: pok,
        loading: false,
      });
    });
  }, [pokemon]);

  return state;
};

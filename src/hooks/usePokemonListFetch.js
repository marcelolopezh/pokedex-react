import { useState, useEffect } from "react";
import { getPokemonList } from "../helpers/getPokemonList";

export const usePokemonListFetch = (index) => {
  const [pokemonListData, setPokemonListData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getDataFromApi() {
      const data = await getPokemonList(index);
      setPokemonListData(await data);
      setLoading(false);
    }
    getDataFromApi();
  }, [index]);
  return { pokemonListData, loading };
};

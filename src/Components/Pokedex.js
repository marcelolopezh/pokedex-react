import React from "react";
import { usePokemonFetch } from "../hooks/usePokemonFetch";
import "../index.css";
import { PokeInfo } from "./PokeInfo";
const pokeGif = require("../assets/img/pokeball-gif.gif");

export const Pokedex = ({ pokemon }) => {
  const { pokemonData, loading } = usePokemonFetch(pokemon);
  return (
    <>
      {loading ? (
        <img src={pokeGif} width="50%" />
      ) : (
        <PokeInfo pokemonData={pokemonData} />
      )}
    </>
  );
};

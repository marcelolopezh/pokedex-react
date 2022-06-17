import { useState } from "react";
import { Buscador } from "./Components/Buscador";
import { Pokemon } from "./Components/Pokemon";
import "./index.css";

export const Pokedex = () => {
  const [pokemon, setPokemon] = useState();
  return (
    <div className="pokedex">
      <Buscador setPokemon={setPokemon} />
      {pokemon ? <Pokemon pokemon={pokemon} /> : null}
    </div>
  );
};

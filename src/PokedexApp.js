import { useState } from "react";
import { Buscador } from "./Components/Buscador";
import { Pokedex } from "./Components/Pokedex";
import "./index.css";

export const PokedexApp = () => {
  const [pokemon, setPokemon] = useState();
  return (
    <div className="pokedex">
      <Buscador setPokemon={setPokemon} />
      {pokemon ? <Pokedex pokemon={pokemon} /> : null}
    </div>
  );
};

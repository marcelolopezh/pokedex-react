import React, { useState } from "react";
import { usePokemonFetch } from "../hooks/usePokemonFetch";
import "../index.css";

export const Pokemon = ({ pokemon }) => {
  const { pokemonData, loading } = usePokemonFetch(pokemon);
  const [imgFront, setImgFront] = useState(true);
  return (
    <>
      <div className="pokemon">
        <h3>{!loading ? pokemonData.name.toUpperCase() : ""}</h3>
        <h4> {!loading ? "N° " + pokemonData.id : ""}</h4>
      </div>
      <button onClick={() => setImgFront(!imgFront)}>
        {imgFront ? "↺" : "↻"}
      </button>
      <div className="pokemonImg">
        {!loading && imgFront ? (
          <img src={pokemonData.imgFront} alt="frontPokemon" />
        ) : (
          ""
        )}
        {!loading && !imgFront ? (
          <img src={pokemonData.imgBack} alt="backPokemon" />
        ) : (
          ""
        )}
      </div>
      <div>
        {!loading
          ? pokemonData.types.map((type) => {
              return (
                <div className={type.type.name} key={type.slot}>
                  <small className="typePokemon">
                    {type.type.name.toUpperCase()}
                  </small>
                </div>
              );
            })
          : ""}
      </div>
      <div className="divStat">
        <table className="statTable">
          <tbody>
            {!loading
              ? pokemonData.stats.map((stat) => {
                  return (
                    <tr key={stat.stat.name}>
                      <td className="statName">{stat.stat.name}</td>
                      <td className="statValue">{stat.base_stat}</td>
                    </tr>
                  );
                })
              : null}
          </tbody>  
        </table>
      </div>
    </>
  );
};

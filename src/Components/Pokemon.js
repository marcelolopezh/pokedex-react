import React, { useState } from "react";
import { usePokemonFetch } from "../hooks/usePokemonFetch";
import "../index.css";
const pokeGif = require("../assets/img/pokeball-gif.gif");

export const Pokemon = ({ pokemon }) => {
  const { pokemonData, loading } = usePokemonFetch(pokemon);
  const [imgFront, setImgFront] = useState(true);
  return (
    <>
      {loading ? <img src={pokeGif} width="100%" /> : null}
      <div className="pokemon">
        <h3>
          {!loading && pokemonData ? pokemonData.name.toUpperCase() : null}
        </h3>
        <h4> {!loading && pokemonData ? "N° " + pokemonData.id : ""}</h4>
      </div>
      {!loading ? (
        <button onClick={() => setImgFront(!imgFront)}>
          {imgFront ? "↺" : "↻"}
        </button>
      ) : (
        ""
      )}
      {!loading ? (
        <div className="pokemonImg">
          {!loading && imgFront && pokemonData ? (
            <img src={pokemonData.imgFront} alt="frontPokemon" />
          ) : (
            ""
          )}
          {!loading && !imgFront && pokemonData ? (
            <img src={pokemonData.imgBack} alt="backPokemon" />
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
      <div>
        {!loading && pokemonData
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
            {!loading && pokemonData
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

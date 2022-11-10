import React, { useState } from "react";

export const PokeInfo = ({ pokemonData }) => {
  const [imgFront, setImgFront] = useState(true);

  return (
    <>
      <div className="pokemon">
        <h3>{pokemonData ? pokemonData.name.toUpperCase() : null}</h3>
        <h4> {pokemonData ? "N° " + pokemonData.id : ""}</h4>
      </div>
      {pokemonData ? (
        <>
          <button onClick={() => setImgFront(!imgFront)}>
            {imgFront ? "↺" : "↻"}
          </button>
          <div className="pokemonImg">
            {imgFront && pokemonData ? (
              <img src={pokemonData.imgFront} alt="frontPokemon" />
            ) : (
              ""
            )}
            {!imgFront && pokemonData ? (
              <img src={pokemonData.imgBack} alt="backPokemon" />
            ) : (
              ""
            )}
          </div>
        </>
      ) : <h4> No Encontrado! </h4>}
      <div>
        {pokemonData
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
            {pokemonData
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
      </div>{" "}
    </>
  );
};

import React, { useState } from "react";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import "../index.css";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import LoopIcon from "@mui/icons-material/Loop";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 2,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const normalize = (pokemonData) => {
  let pokemonDataNormalize = pokemonData.stats;
  let names = [];
  let stats = [];
  pokemonDataNormalize.map((stat) => {
    names.push(stat.stat.name);
    stats.push(stat.base_stat);
    console.log(names, stats);
  });
  return { names, stats };
};

const data = (pokemonData) => {
  return {
    labels: normalize(pokemonData).names,
    datasets: [
      {
        label: "# of Votes",
        data: normalize(pokemonData).stats,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };
};

export const PokeInfo = ({ pokemonData }) => {
  const [imgFront, setImgFront] = useState(true);
  return (
    <>
      <div className="pokemon">
        <h1 className={pokemonData ? pokemonData.types[0].type.name : null}>
          {pokemonData ? pokemonData.name.toUpperCase() : null}
        </h1>
        <h4> {pokemonData ? "N° " + pokemonData.id : ""}</h4>
      </div>
      {pokemonData ? (
        <>
          {imgFront ? (
            <AutorenewIcon onClick={() => setImgFront(!imgFront)} />
          ) : (
            <LoopIcon onClick={() => setImgFront(!imgFront)} />
          )}

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
      ) : (
        <h2> No Encontrado! </h2>
      )}
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

      <div>
        {pokemonData ? (
          <Radar
            data={data(pokemonData)}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

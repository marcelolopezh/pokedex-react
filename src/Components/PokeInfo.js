import React, { useState } from "react";
import "../index.css";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import LoopIcon from "@mui/icons-material/Loop";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

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

const normalize = (pokemonData) => {
  let pokemonDataNormalize = pokemonData.stats;
  let names = [];
  let stats = [];
  // eslint-disable-next-line array-callback-return
  pokemonDataNormalize.map((stat) => {
    names.push(stat.stat.name);
    stats.push(stat.base_stat);
  });
  return { names, stats };
};

const data = (pokemonData) => {
  return {
    labels: normalize(pokemonData).names,
    datasets: [
      {
        label: "Stats",
        data: normalize(pokemonData).stats,
        backgroundColor: "rgba(16, 14, 238, 0.4)",
        borderColor: "rgba(16, 14, 238, 1)",
        borderWidth: 1,
      },
    ],
  };
};

export const PokeInfo = ({ pokemonData }) => {
  const [imgFront, setImgFront] = useState(true);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container style={{ maxHeight: "100vh", marginTop: "5rem" }}>
          <Grid md={5} xs={12}>
            <div className="pokemon">
              <h1
                className={pokemonData ? pokemonData.types[0].type.name : null}
              >
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
          </Grid>
          <Grid
            md={7}
            xs={12}
            alignItems="center"
            justifyContent="center"
          >
            {pokemonData ? (
              <div>
                <Radar
                  style={{ paddingBottom: "1.1rem" }}
                  data={data(pokemonData)}
                />
              </div>
            ) : (
              ""
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

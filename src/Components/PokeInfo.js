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
  let newArr = [];
  let min = 1;
  let max = 155;
  pokemonDataNormalize.map((stat) => {
    newArr.push({
      name: stat.stat.name,
      base_stat: ((stat.base_stat - min) * 100) / (max - min),
    });
  });
  return newArr;
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
      <div className="divStat">
        {pokemonData
          ? normalize(pokemonData).map((stat) => {
              return (
                <Box sx={{ flexGrow: 1 }} key={stat.name}>
                  <Typography variant="caption" display="block" align="left">
                    {stat.name.toUpperCase()}
                  </Typography>
                  <BorderLinearProgress
                    variant="determinate"
                    value={stat.base_stat}
                    className="VolumeBar"
                  />
                </Box>
              );
            })
          : null}
      </div>{" "}
    </>
  );
};

/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const pokeGif = require("../assets/img/pokeball-gif.gif");

export const PokemonCard = (pokemon) => {
  const [pokemonData, setPokemonData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getData() {
      const url = pokemon.pokemon.url;
      await axios.get(url).then((response) => {
        setPokemonData(response.data);
      });
    }
    getData();
    setLoading(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {" "}
      {!loading ? (
        pokemonData ? (
          <Card>
            <img src={pokemonData.sprites.front_default} alt={pokemonData.name}/>
            <CardContent>
              <Typography gutterBottom variant="p" component="div">
                {pokemonData.name.toUpperCase()}
              </Typography>
            </CardContent>
          </Card>
        ) : (
          ""
        )
      ) : (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img src={pokeGif} width="50%" alt="loading"/>
      )}{" "}
    </div>
  );
};

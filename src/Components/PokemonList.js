import axios from "axios";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { PokemonCard } from "./PokemonCard";

export const PokemonList = () => {
  const [loading, setLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState();
  useEffect(() => {
    async function getData() {
      const url = "https://pokeapi.co/api/v2/pokemon/";
      await axios.get(url).then((response) => {
        setPokemonList(response.data.results);
      });
    }
    getData();
    setLoading(false);
  }, []);

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          overflowY: "scroll",
        }}
        className="boxScroll"
      >
        <Grid container spacing={2}>
          {!loading ? (
            <>
              {pokemonList
                ? pokemonList.map((pokemon) => (
                    <Grid item xs={6} md={4} key={pokemon.name}>
                      <PokemonCard pokemon={pokemon} />
                    </Grid>
                  ))
                : ""}
            </>
          ) : (
            <></>
          )}
        </Grid>
      </Box>
    </>
  );
};

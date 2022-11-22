import axios from "axios";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { PokemonCard } from "./PokemonCard";

import Pagination from "@mui/material/Pagination";

export const PokemonList = ({ setPokemon }) => {
  const [loading, setLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState();
  const [page, setPage] = useState(1);

  const itemsPerPage = 9;

  const [offset, setOffset] = useState(parseInt(0));

  useEffect(() => {
    async function getData() {
      let url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${itemsPerPage}`;
      console.log(url);
      await axios.get(url).then((response) => {
        setPokemonList(response.data);
      });
    }
    getData();
    setLoading(false);
  }, [offset]);

  const handleChangePage = (e, p) => {
    setPage(p);
    setOffset(parseInt(itemsPerPage * p));
  };

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
        <Grid container spacing={1}>
          {!loading ? (
            <>
              {pokemonList
                ? pokemonList.results.map((pokemon) => (
                    <Grid item xs={6} md={4} key={pokemon.name}>
                      <button
                        style={{
                          border: "none",
                          background: "none",
                          width: "100%",
                        }}
                        onClick={() => setPokemon(pokemon.name)}
                      >
                        <PokemonCard pokemon={pokemon} />
                      </button>
                    </Grid>
                  ))
                : ""}

              {pokemonList ? (
                <Grid
                  container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  style={{ maxHeight: "100vh", marginTop: "1rem" }}
                >
                  <Grid item xs={10}>
                    <Pagination
                      count={parseInt(pokemonList.count / itemsPerPage) - 15}
                      size="small"
                      page={page}
                      color="primary"
                      onChange={handleChangePage}
                    />
                  </Grid>
                </Grid>
              ) : (
                ""
              )}
            </>
          ) : (
            <></>
          )}
        </Grid>
      </Box>
    </>
  );
};

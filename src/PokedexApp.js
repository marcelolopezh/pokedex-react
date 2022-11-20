import { useState } from "react";
import { Buscador } from "./Components/Buscador";
import { Pokedex } from "./Components/Pokedex";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "./index.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { PokemonList } from "./Components/PokemonList";

export const PokedexApp = () => {
  const [pokemon, setPokemon] = useState();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3} className="mainContainer">
          <Grid item xs={12} md={5}>
            <Card>
              <CardContent>
                <Buscador setPokemon={setPokemon} />
                {pokemon ? <Pokedex pokemon={pokemon} /> : null}
              </CardContent>
            </Card>{" "}
          </Grid>

          <Grid item xs={12} md={7}>
            <Card>
              <CardContent>
                <PokemonList />
              </CardContent>
            </Card>{" "}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

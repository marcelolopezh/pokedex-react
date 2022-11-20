import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { PokedexApp } from "./PokedexApp";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3} className="mainContainer">
        <Grid item xs={12}>
          <PokedexApp />
        </Grid>
      </Grid>
    </Box>
  </React.StrictMode>
);

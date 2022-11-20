import React, { useState } from "react";
import "../index.css";
import TextField from "@mui/material/TextField";
import Search from "@mui/icons-material/Search";

export const Buscador = ({ setPokemon }) => {
  const [busqueda, setBusqueda] = useState("");
  const setInputBusqueda = (e) => {
    setBusqueda(e.target.value);
  };
  const preventDefault = (e) => {
    e.preventDefault();
    setPokemon(busqueda);
  };

  return (
    <div className="buscador">
      <form onSubmit={preventDefault}>
        <TextField
          onChange={setInputBusqueda}
          value={busqueda}
          label="Nombre Pokemon"
          variant="standard"
          InputProps={{ endAdornment: <Search /> }}
        />
      </form>
    </div>
  );
};

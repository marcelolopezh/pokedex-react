import React, { useState } from "react";
import "../index.css";

export const Buscador = ({setPokemon}) => {
  const [busqueda, setBusqueda] = useState("");
  const setInputBusqueda = (e) => {
    setBusqueda(e.target.value);
  };
  const preventDefault = (e) => {
    e.preventDefault();
    setPokemon(busqueda)
    setBusqueda('')
  };

  return (
    <div className="buscador">
      <form onSubmit={preventDefault}>
        <input type="text" value={busqueda} onChange={setInputBusqueda} />
        <input type="submit" value="Buscar "/>
      </form>
    </div>
  );
};

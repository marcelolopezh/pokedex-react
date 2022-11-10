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
  };

  return (
    <div className="buscador">
      <form onSubmit={preventDefault}>
        <input type="text" value={busqueda} onChange={setInputBusqueda} />
        <button type="submit" className="btn-buscar">🔎</button>
      </form>
    </div>
  );
};

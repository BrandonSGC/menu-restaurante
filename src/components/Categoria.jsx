import { useState } from "react";
import { Platillo } from "./Platillo";

export const Categoria = ({categoria}) => {

  const platillos = [
    {
      "id": 1,
      "nombre": "Ensalada César",
      "costo": 8.99,
      "categoria_id": 1,
      "activo": true
    },
    {
      "id": 2,
      "nombre": "Pasta Alfredo",
      "costo": 12.99,
      "categoria_id": 2,
      "activo": true
    },
    {
      "id": 3,
      "nombre": "Tarta de Manzana",
      "costo": 5.99,
      "categoria_id": 3,
      "activo": true
    },
    {
      "id": 4,
      "nombre": "Sopa de Tomate",
      "costo": 6.99,
      "categoria_id": 1,
      "activo": true
    }
  ];

  return (
    <>
      <div>
        <h2>{categoria}</h2>

        {/* Lista de Platillos */}
        <ul>
          {platillos.map( (platillo) => {
            return <Platillo key={platillo.id} id={platillo.id} nombre={platillo.nombre} costo={platillo.costo}/>
          })}
        </ul>

      </div>
    </>
  );
};

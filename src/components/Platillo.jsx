import React from "react";

export const Platillo = ({id, nombre="Arroz con Pollo", costo="3500"}) => {

  const onActivate = (status) => {
    if (status === 1) {
      // Activar platillo.
    } else {
      // Desactivar platillo.
    }
  }
  const onEdit = (id) => {
    // Show modal with data.


    console.log(`Editing product with id: ${id}`);
  }
  
  const onDelete = (id) => {
    console.log(`Deleting product with id: ${id}`);
  }

  return (
    <>
      <li id={id}>
        Platillo: {nombre}, Costo: ₡{costo}
        <button onClick={() => onActivate(1)}>Activar</button>
        <button onClick={() => onActivate(0)}>Inactivar</button>
        <button onClick={() => onEdit(id)}>Editar</button>
        <button onClick={() => onDelete(id)}>Borrar</button>
      </li>
    </>
  );
};

import React from "react";

export const Platillo = ({ platillo, isAdmin }) => {
  const onActivate = (status) => {
    if (status === 1) {
      // Activar platillo.
    } else {
      // Desactivar platillo.
    }
  };
  const onEdit = (id) => {
    // Show modal with data.

    const datosActualizados = {
      nombre: "Ensalada Modificada",
      costo: 1000.0,
      categoria_id: 1,
    };
    editarPlatillo(id, datosActualizados);
    console.log(`Editing product with id: ${id}`);
  };

  const onDelete = (id) => {
    // Modal para confirmar delete.

    // Si confirma entonces se hace la peticion
    console.log(`Deleting product with id: ${id}`);
    eliminarPlatillo(id);
  };

  return (
    <>
      <li className="platillo" id={platillo.id}>
        <p>
          <span>Platillo:</span> {platillo.nombre},<span> Costo:</span> ₡
          {platillo.costo}
          {isAdmin ? (
            <>
              ,<span> Activo:</span> {platillo.activo ? "Activo" : "Inactivo"}
            </>
          ) : (
            ""
          )}
        </p>
        {isAdmin ? (
          <div className="actions">
            <button className="button" onClick={() => onActivate(1)}>
              Activar
            </button>
            <button className="button" onClick={() => onActivate(0)}>
              Inactivar
            </button>
            <button className="button" onClick={() => onEdit(id)}>
              Editar
            </button>
            <button className="button" onClick={() => onDelete(id)}>
              Borrar
            </button>
          </div>
        ) : (
          ""
        )}
      </li>
    </>
  );
};

// Functions:
const editarPlatillo = (id, data) => {
  const url = `http://localhost:3000/platillos/${id}`;
  fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  })
    .then((response) => {
      if (response.status === 200) {
        // La solicitud se completó con éxito
        console.log("Platillo actualizado con éxito.");
        // Aquí puedes realizar otras acciones después de actualizar el platillo
      } else {
        // La solicitud no se completó con éxito, maneja el error apropiadamente
        console.error("Error al actualizar el platillo.");
      }
    })
    .catch((error) => {
      // Maneja errores de red u otros errores
      console.error("Error de red:", error);
    });
};

const eliminarPlatillo = (id) => {
  const url = `http://localhost:3000/platillos/${id}`;
  fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.status === 2000) {
        console.log("Platillo eliminado con éxito!");
      } else {
        console.log("Error al eliminar el platillo...");
      }
    })
    .catch((error) => {
      console.error(`Se ha producido un error: ${error}`);
    });
};

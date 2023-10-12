import { useState } from "react";
import { Modal } from "./Modal";
import { ModalCrearPlatillo } from "./ModalCrearPlatillo";

export const Platillo = ({ platillo, isAdmin }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  const [userId, setUserId] = useState(null);

  const onActivate = (id, status) => {
    actualzarEstadoPlatillo(id, status);
  };

  const onEdit = (id) => {

  };
  
  const onDelete = async (id) => {
    setUserId(id);
    setIsModalOpen(true);
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
            <button className="button" onClick={() => onActivate(platillo.id, 1)}>
              Activar
            </button>
            <button className="button" onClick={() => onActivate(platillo.id, 0)}>
              Inactivar
            </button>
            <button className="button" onClick={() => onEdit(platillo.id)}>
              Editar
            </button>
            <button className="button" onClick={() => onDelete(platillo.id)}>
              Borrar
            </button>
          </div>
        ) : (
          ""
        )}
      </li>
      
      
      <Modal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} userId={userId}/>

    </>
  );
};

// Functions:
const actualzarEstadoPlatillo = (id, status) => {
  const url = `http://localhost:3000/platillos/${id}/${status}`;
  fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
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
      console.error("Se ha producido un error:", error);
    });
};
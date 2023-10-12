import { useState } from "react";
import { Modal } from "./Modal";
import { ModalCrearPlatillo } from "./ModalCrearPlatillo";

export const Platillo = ({ platillo, isAdmin, categorias }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalCPOpen, setIsModalCPOpen] = useState(false);

  const [platilloId, setPlatilloId] = useState(null);


  const onActivate = (id, status) => {
    actualzarEstadoPlatillo(id, status);
  };

  const onEdit = (platillo) => {

    setIsModalCPOpen(true);
  };
  
  
  const onDelete = async (id) => {
    setPlatilloId(id);
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
              ,<span> Estado:</span> {platillo.activo ? "Activo" : "Inactivo"}
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
            <button className="button" onClick={onEdit}>
              Editar
            </button>
            <button className="button" onClick={() => onDelete(platillo.id)}>
              Borrar
            </button>
            <Modal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} platilloId={platilloId}/>
            <ModalCrearPlatillo isOpen={isModalCPOpen} setIsModalOpen={setIsModalCPOpen} platillo={platillo} categorias={categorias} />
          </div>
        ) : (
          ""
        )}
      </li>
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
        console.log("Platillo actualizado con éxito.");
        alert("Platillo actualizado con éxito.");

      } else {
        console.error("Error al actualizar el platillo.");
        alert("Error al actualizar el platillo.");
      }
    })
    .catch((error) => {
      console.error("Se ha producido un error:", error);
      alert("Se ha producido un error:", error);
    });
};
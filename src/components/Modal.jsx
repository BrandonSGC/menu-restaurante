export const Modal = ({ isOpen, setIsModalOpen, platilloId }) => {
  
  const handleAcept = () => {
    setIsModalOpen(false);
    eliminarPlatillo(platilloId);
  }

  const handleCancel = () => {
    setIsModalOpen(false);
  }

  return (
    <section className={`modal ${isOpen ? "modal--show" : ""}`}>
      <div className="modal__container">
        <img src="./delete.svg" className="modal__img" />
        <p className="modal__paragraph">¿Desea eliminar el platillo seleccionado?</p>
        <div className="modal__buttons">
          <button className="modal__aceptar" onClick={handleAcept}>Aceptar</button>
          <button className="modal__cancelar" onClick={handleCancel}>Cancelar</button>
        </div>
      </div>
    </section>
  );
};

// Functions
const eliminarPlatillo = (id) => {
  const url = `http://localhost:3000/platillos/${id}`;
  fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.status === 200) {
        console.log("Platillo eliminado con éxito!");
      } else {
        console.log("Error al eliminar el platillo...");
      }
    })
    .catch((error) => {
      console.error(`Se ha producido un error: ${error}`);
    });
};
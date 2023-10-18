export const ModalCategoria = ({ isOpen, setIsModalOpen, categoriaID }) => {
  
    const handleAcept = () => {
      setIsModalOpen(false);
      eliminarCategoria(categoriaID);
    }
  
    const handleCancel = () => {
      setIsModalOpen(false);
    }
  
    return (
      <section className={`modal ${isOpen ? "modal--show" : ""}`}>
        <div className="modal__container">
          <img src="./delete.svg" className="modal__img" />
          <p className="modal__paragraph">¿Desea eliminar la Categoria seleccionada?</p>
          <div className="modal__buttons">
            <button className="modal__aceptar" onClick={handleAcept}>Aceptar</button>
            <button className="modal__cancelar" onClick={handleCancel}>Cancelar</button>
          </div>
        </div>
      </section>
    );
  };
  
  // Functions
  const eliminarCategoria = (id) => {
    const url = `http://localhost:3000/categorias/${id}`;
    
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (response.status === 200) {
        console.log("Categoría eliminada con éxito!");
      } else if (response.status === 404) {
        console.log("La categoría no existe.");
      } else {
        console.log("Error al eliminar la categoría.");
      }
    })
    .catch((error) => {
      console.error(`Se ha producido un error: ${error}`);
    });
  };
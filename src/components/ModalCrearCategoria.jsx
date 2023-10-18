import React, { useEffect, useState } from "react";

export const ModalCrearCategoria = ({
  isOpen, 
  setIsModalOpen, 
  categoriaID,
  categoria, 
  isEditing, 
}) => {
  
  const [editData, setEditData] = useState({
    id: "",
    nombre: "",
  });
  

  const [nombre, setNombre] = useState(isEditing ? editData.nombre : "");

  useEffect(() => {
    // Si se proporciona una categoria, establece sus datos en editData
    if (categoria) {
      setEditData({
        id : categoria.id,
        nombre: categoria.nombre,
      });
    }
  }, [categoria]);

  const handleCancel = () => {
    setIsModalOpen(false);
  }


  const handleAcept = () => {
    if (isEditing) {
      editarCategoria(editData.id, editData); // Pasa editData como segundo parámetro
      alert('Se ha editado correctamente');
      setIsModalOpen(false);
      return;
    }
    if (nombre.trim() === "") {
      alert("Por favor, complete los campos correctamente.");
    } else {
      const data = {
        nombre: nombre,
      };
      crearCategoria(data);
      console.log('Creando Categoria...')
      setIsModalOpen(false);
    } 
  };

  return (
    <section className={`modal ${isOpen ? "modal--show" : ""}`}>
      <div className="modal__container">
        {isEditing ? (
          <h2>Modificar Categoria</h2>
        ) : (
          <h2>Crear Nueva Categoria</h2>
        )}
        <fieldset className="fieldset">
          <div className="field">
            <label className="label">Nombre:</label>
            <input
              className="input"
              type="text"
              value={isEditing ? editData.nombre : nombre}
              onChange={(e) =>
                isEditing
                  ? setEditData({ ...editData, nombre: e.target.value })
                  : setNombre(e.target.value)
              }
              maxLength={100}
            />
          </div>
        </fieldset>
        <div className="modal__buttons">
          <button className="modal__aceptar" onClick={handleAcept}>
            Aceptar
          </button>
          <button className="modal__cancelar" onClick={handleCancel}>
            Cancelar
          </button>
        </div>
      </div>
    </section>
  );
};

// Funciones
const crearCategoria = (categoria) => {
  const url = `http://localhost:3000/categorias`;
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(categoria)
  })
    .then((response) => {
      if (response.status === 201) {
        console.log("Categoria creada con éxito.");
        alert("Categoria creada con éxito.");

      } else {
        console.error("Error al crear la Categoria.");
        alert("Error al crear la Categoria.");
      }
    })
    .catch((error) => {
      console.error("Se ha producido un error:", error);
      alert("Se ha producido un error:", error);
    });
};

const editarCategoria = (id, categoria) => { // Recibe id como parámetro
  const url = `http://localhost:3000/categorias/${id}`;
  fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(categoria),
  })
    .then((response) => {
      if (response.status === 200) {
        console.log("Categoria actualizada con éxito.");
        alert("Categoria actualizada con éxito.");
      } else {
        console.error("Error al actualizar la Categoria.");
        alert("Error al actualizar la Categoria.");
      }
    })
    .catch((error) => {
      console.error("Se ha producido un error:", error);
      alert("Se ha producido un error:", error);
    });
};
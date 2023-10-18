import React, { useEffect, useState } from "react";

export const ModalCrearPlatillo = ({
  isOpen,
  setIsModalOpen,
  categorias,
  platillo,
  isEditing,
}) => {
  const [editData, setEditData] = useState({
    id: "",
    nombre: "",
    costo: "",
    categoria_id: "",
  });

  const [nombre, setNombre] = useState(isEditing ? editData.nombre : "");
  const [costo, setCosto] = useState(isEditing ? editData.costo : "");
  const [categoria, setCategoria] = useState(isEditing ? editData.categoria_id : "");


  useEffect(() => {
    // Si se proporciona un platillo, establece sus datos en editData
    if (platillo) {
      setEditData({
        id: platillo.id,
        nombre: platillo.nombre,
        costo: platillo.costo,
        categoria_id: platillo.categoria_id,
      });
    }
  }, [platillo]);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleAcept = () => {
    if (isEditing) {
      editarPlatillo(editData.id, editData);
      alert('Se ha editado correctamente');
      setIsModalOpen(false);
      return;
    }
    if (nombre.trim() === "" || isNaN(parseFloat(costo)) || categoria === "") {
      alert("Por favor, complete todos los campos correctamente.");
    } else {
      const data = {
        nombre: nombre,
        costo: costo,
        categoria_id: categoria,
        activo: true,
      };
      crearPlatillo(data);
      console.log('Creando platillo...')
      setIsModalOpen(false);
    } 
  };


  return (
    <section className={`modal ${isOpen ? "modal--show" : ""}`}>
      <div className="modal__container">
        {isEditing ? (
          <h2>Modificar Platillo</h2>
        ) : (
          <h2>Crear Nuevo Platillo</h2>
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

          <div className="field">
            <label>Costo:</label>
            <input
              className="input"
              type="number"
              value={isEditing ? editData.costo : costo}
              onChange={(e) =>
                isEditing
                  ? setEditData({ ...editData, costo: e.target.value })
                  : setCosto(e.target.value)
              }
              step="0.01"
            />
          </div>
        </fieldset>

        <label>Categoría del Platillo:</label>
        <select
          className="input"
          value={isEditing ? editData.categoria_id : categoria}
          onChange={(e) =>
            isEditing
              ? setEditData({ ...editData, categoria_id: e.target.value })
              : setCategoria(e.target.value)
          }
        >
          <option value="">Seleccione una categoría</option>
          {/* Cargar select con categorias */}
          {categorias.map((categoria) => {
            return (
              <option key={categoria.id} value={categoria.id}>
                {categoria.nombre}
              </option>
            );
          })}
        </select>

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
const crearPlatillo = (platillo) => {
  const url = `http://localhost:3000/platillos`;
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(platillo),
  })
    .then((response) => {
      if (response.status === 201) {
        console.log("Platillo creado con éxito.");
        alert("Platillo creado con éxito.");
      } else {
        console.error("Error al crear el platillo.");
        alert("Error al crear el platillo.");
      }
    })
    .catch((error) => {
      console.error("Se ha producido un error:", error);
      alert("Se ha producido un error:", error);
    });
};


const editarPlatillo = (id, newData) => {
  const url = `http://localhost:3000/platillos/${id}`;
  fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
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

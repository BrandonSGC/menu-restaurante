import React, { useEffect, useState } from "react";

export const ModalCrearPlatillo = ({isOpen, setIsModalOpen, categorias, platillo }) => {
  const [nombre, setNombre] = useState("");
  const [costo, setCosto] = useState("");
  const [categoria, setCategoria] = useState("");

  const [editData, setEditData] = useState({
    nombre: "",
    costo: "",
    categoria_id: "",
  });
  
  useEffect(() => {
    // Si se proporciona un platillo, establece sus datos en editData
    if (platillo) {
      setEditData({
        nombre: platillo.nombre,
        costo: platillo.costo,
        categoria_id: platillo.categoria_id,
      });
    }
  }, [platillo]);

  const handleCancel = () => {
    setIsModalOpen(false);
  }

  const handleGuardarClick = () => {
    // Validar los datos antes de guardar
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

      setIsModalOpen(false);
    }
  };

  return (
    <section className={`modal ${isOpen ? "modal--show" : ""}`}>
      <div className="modal__container">
        <h2>Crear Nuevo Platillo</h2>

        <fieldset className="fieldset">

          <div className="field">
            <label className="label">Nombre:</label>
            <input
              className="input"
              type="text"
              value={editData.nombre}
              onChange={(e) => setNombre(e.target.value)}
              maxLength={100}
            />
          </div>

          <div className="field">
            <label>Costo:</label>
            <input
              className="input"
              type="number"
              value={editData.costo}
              onChange={(e) => setCosto(e.target.value)}
              step="0.01"
            />
          </div>
        </fieldset>

        <label>Categoría del Platillo:</label>
        <select
          className="input"
          value={editData.categoria_id}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="">Seleccione una categoría</option>
          {/* Cargar select con categorias */}
          {categorias.map( (categoria) => {
            return <option key={categoria.id} value={categoria.id}>{categoria.nombre}</option>
          })}
        </select>

        <div className="modal__buttons">
          <button className="modal__aceptar" onClick={handleGuardarClick}>
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
    body: JSON.stringify(platillo)
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
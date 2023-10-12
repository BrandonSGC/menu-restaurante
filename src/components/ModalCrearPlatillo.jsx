import React, { useState } from "react";

export const ModalCrearPlatillo = ({ onClose, onSave, isOpen, setIsModalOpen }) => {
  const [nombre, setNombre] = useState("");
  const [costo, setCosto] = useState("");
  const [categoria, setCategoria] = useState("");

  const handleCancel = () => {
    setIsModalOpen(false);
  }

  const handleGuardarClick = () => {
    // Validar los datos antes de guardar
    if (nombre.trim() === "" || isNaN(parseFloat(costo)) || categoria === "") {
      alert("Por favor, complete todos los campos correctamente.");
    } else {
      // Guardar los datos del nuevo platillo
      onSave({
        nombre,
        costo: parseFloat(costo),
        categoria,
      });

      // Cerrar el modal
      onClose();
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
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              maxLength={100}
            />
          </div>

          <div className="field">
            <label>Costo:</label>
            <input
              className="input"
              type="number"
              value={costo}
              onChange={(e) => setCosto(e.target.value)}
              step="0.01"
            />
          </div>
        </fieldset>

        <label>Categoría del Platillo:</label>
        <select
          className="input"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="">Seleccione una categoría</option>
          <option value="Entrada">Entrada</option>
          <option value="Plato Principal">Plato Principal</option>
          <option value="Postre">Postre</option>
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

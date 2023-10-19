import { useState } from "react";
import { ModalCategoria } from "./ModalCategoria";
import { ModalCrearCategoria} from "./ModalCrearCategoria";

export const Categoria = ({ id, categoria }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalCPOpen, setIsModalCPOpen] = useState(false);
    const [categoriaID, setCategorias] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const onEdit = async (id) => {
      setIsEditing(true);
      setCategorias(id); 
      setIsModalCPOpen(true);
    };

  const onDelete = async (id) => {
    setCategorias(id); 
    setIsModalOpen(true);
  };

  return (
    <>
      <li className="categoria" id={categoria}>
          <div className="actions">
            <button className="button" onClick={() => onEdit(categoria.id)}>
             Editar
            </button>
            <button className="button" onClick={() => onDelete(categoria.id)}>
              Borrar
            </button>
            <ModalCategoria isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} categoriaID={categoriaID}/>
            <ModalCrearCategoria isOpen={isModalCPOpen} setIsModalOpen={setIsModalCPOpen} categoriaID={categoriaID} categorias={categoriaID} isEditing />
          </div>
      </li>
    </>
  );
};
  

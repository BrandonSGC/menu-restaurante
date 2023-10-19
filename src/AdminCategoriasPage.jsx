import { useEffect, useState } from "react";
import { PlatilloCategoria } from "./components/PlatilloCategoria";
import { ModalCrearCategoria } from "./components/ModalCrearCategoria";

export const AdminCategoriasPage = () => {
  const [categorias, setCategorias] = useState([]);
  const [isModalCPOpen, setIsModalCPOpen] = useState(false);

  const onCreateCategoria = () => {
    setIsModalCPOpen(true);
  }
  useEffect(() => {
    // Hacer el fetch para obtener las categorías:
    const url = `http://localhost:3000/categorias`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCategorias(data));
  }, []);

  return (
    <div className="container">
      <header className="header__display">
        <h2 className="heading">Administración de Categorías</h2>
        <button className="button" onClick={onCreateCategoria}>Crear Categoria</button>
      </header>

      {/* Iterar por cada categoría */}
      {categorias.map((categoria) => {
        return <PlatilloCategoria key={categoria.id} categoria={categoria}/>
      })}
      
      <ModalCrearCategoria isOpen={isModalCPOpen} setIsModalOpen={setIsModalCPOpen} categoriaID={categorias.id} categorias={categorias}/>
    </div>
  );
}

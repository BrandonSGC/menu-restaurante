import { useEffect, useState } from "react";
import { Categoria } from "./components/Categoria";
import { ModalCrearPlatillo } from "./components/ModalCrearPlatillo";

export const AdminPlatillosPage = () => {
  const [categorias, setCategorias] = useState([]);
  const [isModalCPOpen, setIsModalCPOpen] = useState(false);

  const onCreatePlatillo = () => {
    setIsModalCPOpen(true);
  }
  useEffect(() => {
    // Hacer el fetch para obtener las categorias:
    const url = `http://localhost:3000/categorias`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCategorias(data));
  }, []);

  return (
    <>
      <div className="container">
        <header className="header__display">
          <h1 className="heading">Administración de Platillos</h1>
          <button className="button" onClick={onCreatePlatillo}>Crear Platillo</button>
        </header>
        
        {/* Iterrar por cada categoria */}
        {categorias.map((categoria) => {
          return <Categoria key={categoria.id} categoria={categoria} isAdmin categorias={categorias}/>;
        })}
        
        <ModalCrearPlatillo isOpen={isModalCPOpen} setIsModalOpen={setIsModalCPOpen} categorias={categorias}/>
      </div>
    </>
  );
}
